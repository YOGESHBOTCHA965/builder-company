/** @type {import('next').NextConfig} */

const securityHeaders = [
  // Prevent site from being embedded in iframes (clickjacking)
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  // Stop browsers from MIME-sniffing the content type
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Enable browser XSS filter
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  // Control how much referrer info is sent
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Restrict browser feature access
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
  // Enforce HTTPS for 1 year (enable only after confirming HTTPS in production)
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
  // Content Security Policy
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      // Allow images from self, Unsplash, Sanity CDN, and data URIs
      "img-src 'self' data: https://images.unsplash.com https://cdn.sanity.io",
      // Allow Google Fonts stylesheets
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Allow Google Fonts font files
      "font-src 'self' https://fonts.gstatic.com",
      // Allow scripts from self + Next.js needs 'unsafe-eval' in dev; tighten in production
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://challenges.cloudflare.com",
      // Allow fetching from Supabase, Sanity, Cloudflare Turnstile
      "connect-src 'self' https://*.supabase.co https://api.sanity.io https://challenges.cloudflare.com",
      // Allow Cloudflare Turnstile iframe
      "frame-src https://challenges.cloudflare.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; '),
  },
];

const nextConfig = {
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;
