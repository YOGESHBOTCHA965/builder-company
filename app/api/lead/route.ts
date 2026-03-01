// Lead API route: Handles lead submissions, validation, Turnstile verification, DB storage, email, sales notification
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';
import { validateLeadInput } from '../../../lib/validators';

export async function POST(req: NextRequest) {
  // Enforce JSON content-type
  const contentType = req.headers.get('content-type') ?? '';
  if (!contentType.includes('application/json')) {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }

  // Safe JSON parsing — malformed body returns 400 instead of crashing
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }

  // Input validation (length limits, format checks)
  const validation = validateLeadInput(data);
  if (!validation.ok) {
    const errMsg = 'error' in validation ? (validation as { ok: false; error: string }).error : 'Validation failed';
    return NextResponse.json({ error: errMsg }, { status: 400 });
  }

  // Turnstile bot-protection verification
  // Skip only when the secret key is not configured (local dev without Turnstile)
  if (process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY) {
    const turnstileToken = typeof data.turnstileToken === 'string' ? data.turnstileToken : '';
    if (!turnstileToken) {
      return NextResponse.json({ error: 'Bot verification required' }, { status: 403 });
    }
    try {
      // Correct Cloudflare Turnstile siteverify endpoint
      const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY,
          response: turnstileToken,
        }),
      });
      const turnstileResult = await turnstileRes.json() as { success: boolean };
      if (!turnstileResult.success) {
        return NextResponse.json({ error: 'Verification failed' }, { status: 403 });
      }
    } catch {
      // If Turnstile is unreachable treat as a server error, don't let unverified leads through
      return NextResponse.json({ error: 'Could not complete verification' }, { status: 503 });
    }
  }

  // Store lead — do NOT store the turnstile_token itself (single-use, unnecessary retention)
  try {
    const { error } = await supabase.from('leads').insert([
      {
        name: String(data.name).trim(),
        email: String(data.email).trim().toLowerCase(),
        phone: data.phone ? String(data.phone).trim() : null,
        message: data.message ? String(data.message).trim() : null,
        utm_params: data.utm ?? null,
        consent_timestamp: new Date().toISOString(),
        home_id: data.homeId ?? null,
        community_id: data.communityId ?? null,
        floor_plan_id: data.floorPlanId ?? null,
        status: 'new',
      }
    ]);
    if (error) {
      console.error('[lead] supabase insert error:', error.message);
      return NextResponse.json({ error: 'Submission failed. Please try again.' }, { status: 500 });
    }
  } catch (err) {
    console.error('[lead] unexpected error:', err);
    return NextResponse.json({ error: 'Submission failed. Please try again.' }, { status: 500 });
  }

  // Send confirmation email (pseudo-code)
  // await sendConfirmationEmail(data.email);

  // Notify sales (pseudo-code)
  // await notifySales(data);

  return NextResponse.json({ success: true }, { status: 200 });
}
