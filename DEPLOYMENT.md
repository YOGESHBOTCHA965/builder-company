# Deployment Instructions

1. **Vercel**
   - Deploy Next.js project to Vercel (SSR enabled)
   - Set environment variables in Vercel dashboard

2. **Cloudflare**
   - Configure DNS for domain
   - Enable WAF and CDN
   - Set up Turnstile for forms

3. **Sanity**
   - Create Sanity project
   - Add schemas from /sanity/schemas
   - Deploy Studio for marketing content editing

4. **Supabase**
   - Create Supabase project
   - Run db/schema.sql to initialize tables
   - Set up Storage for images/docs

5. **Edge Functions**
   - Use Vercel edge functions for SSR and API

6. **Security**
   - Store secrets in environment variables
   - No secrets in client code
   - All business logic in server components/API

7. **SEO**
   - Add metadata per page
   - Implement structured data (JSON-LD)
   - Generate sitemap

8. **Performance**
   - Use Next/Image for all images
   - Lazy load galleries
   - Optimize Core Web Vitals

9. **Testing**
   - Validate forms, filtering, and inventory logic

10. **Monitoring**
    - Enable Vercel analytics
    - Set up error tracking
