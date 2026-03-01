// sanity.ts
import { createClient } from 'next-sanity';

if (!process.env.SANITY_PROJECT_ID || !process.env.SANITY_DATASET) {
  throw new Error(
    'Missing Sanity environment variables: SANITY_PROJECT_ID and SANITY_DATASET must be set.'
  );
}

/**
 * Public read-only client — uses CDN, no auth token.
 * Safe to use in server components for public content fetches.
 */
export const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: true,
  apiVersion: '2023-01-01',
  // Do NOT pass a token here — the CDN ignores auth and including the token
  // risks accidentally exposing it via client bundles.
});

/**
 * Authenticated write client — bypasses CDN, uses API token.
 * Use ONLY in server-side API routes for mutations (draft preview, webhooks, etc.).
 * Never import in client components.
 */
export const sanityWriteClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: false,
  apiVersion: '2023-01-01',
  token: process.env.SANITY_API_TOKEN, // server-side only
});
