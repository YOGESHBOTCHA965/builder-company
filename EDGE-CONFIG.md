# Edge Configuration Notes

- **Cloudflare DNS**: Use for domain management and fast global resolution.
- **Cloudflare WAF**: Enable to protect against attacks and bots.
- **Cloudflare CDN**: Cache static assets and images for performance.
- **Turnstile**: Integrate on all lead/contact forms for bot protection.
- **Vercel Edge Functions**: Use for SSR and API routes, ensuring fast TTFB and SEO.
- **No secrets in client code**: All sensitive keys and logic must be server-side.
- **Supabase Storage/R2**: Store images and documents securely, serve via CDN.
- **Strict CORS policies**: Only allow trusted origins for API/data access.
- **Audit logs**: Track inventory and lead status changes for compliance.
