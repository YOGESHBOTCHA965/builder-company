// validators.ts
type ValidationResult = { ok: true } | { ok: false; error: string };

const EMAIL_REGEX = /^[^@\s]{1,64}@[^@\s]{1,253}\.[^@\s]{2,}$/;
const PHONE_REGEX = /^[\d\s\+\-\(\)\.]{7,20}$/;

/** Maximum field lengths to prevent DoS via huge payloads */
const LIMITS = {
  name: 120,
  email: 254,
  phone: 30,
  message: 2000,
} as const;

export function validateLeadInput(data: unknown): ValidationResult {
  if (!data || typeof data !== 'object') {
    return { ok: false, error: 'Invalid request body' };
  }

  const d = data as Record<string, unknown>;

  // Required: name
  if (typeof d.name !== 'string' || d.name.trim().length === 0) {
    return { ok: false, error: 'Name is required' };
  }
  if (d.name.trim().length > LIMITS.name) {
    return { ok: false, error: 'Name too long' };
  }

  // Required: email
  if (typeof d.email !== 'string' || d.email.trim().length === 0) {
    return { ok: false, error: 'Email is required' };
  }
  if (d.email.trim().length > LIMITS.email) {
    return { ok: false, error: 'Email too long' };
  }
  if (!EMAIL_REGEX.test(d.email.trim())) {
    return { ok: false, error: 'Invalid email address' };
  }

  // Required: explicit boolean consent
  if (d.consent !== true) {
    return { ok: false, error: 'Consent is required' };
  }

  // Optional: phone — validate format when provided
  if (d.phone !== undefined && d.phone !== null && d.phone !== '') {
    if (typeof d.phone !== 'string' || d.phone.length > LIMITS.phone) {
      return { ok: false, error: 'Invalid phone number' };
    }
    if (!PHONE_REGEX.test(d.phone)) {
      return { ok: false, error: 'Invalid phone number format' };
    }
  }

  // Optional: message length limit
  if (d.message !== undefined && d.message !== null) {
    if (typeof d.message !== 'string' || d.message.length > LIMITS.message) {
      return { ok: false, error: 'Message too long (max 2000 characters)' };
    }
  }

  return { ok: true };
}
