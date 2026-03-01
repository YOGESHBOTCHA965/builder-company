# 🏡 Prestige Homes: Luxury Custom Home Builder Website

A full-stack luxury real estate marketing website built with **Next.js 15 (App Router)**, **TypeScript**, and a fully custom CSS design system (no Tailwind, no component libraries). Inspired by top-tier home builder brands and designed to outperform them.

> **Live demo:** [https://builder-company.vercel.app](https://builder-company.vercel.app)

---

## ✨ Features

### Pages
| Route | Description |
|---|---|
| `/` | Home: hero, hot homes, stats, regions, gallery, team stories, testimonials, FAQ, CTA |
| `/communities` | All 12 Texas communities with status badges, specs, filters |
| `/floor-plans` | 6 award-winning floor plans with full feature lists and specs |
| `/available-homes` | Move-in ready & Hot Homes with regional filter tabs |
| `/portfolio` | Alternating full-width project showcase with awards |
| `/gallery` | Masonry photo gallery: exteriors, kitchens, living spaces, outdoor |
| `/about` | Company story, leadership team, core values, awards |
| `/process` | 6-step build process timeline with FAQ accordion |
| `/contact` | Contact form with 3 office locations and FAQ section |
| `/api/lead` | POST endpoint: validates, Turnstile-verifies, and stores leads |
| `/api/inventory` | Protected CRUD endpoint for inventory management |

### UI/UX
- 💎 **Luxury design system** using gold (`#c9a84c`) + charcoal palette, Playfair Display + Inter fonts
- 📱 **Fully responsive** across mobile, tablet, and widescreen
- 🧭 **Sticky responsive navbar** with hamburger menu on mobile
- 🤖 **AI Chat Widget (Aria)** with 25+ topic knowledge base, quick-reply chips, typing indicator, unread badge
- 🎞️ **Smooth animations** including CSS hover zoom, chip transitions, chat slide-up
- ♿ **Accessible** with semantic HTML, aria labels, and focus states
- 🔔 **Announcement bar** as dismissible promotional banner

### Security (Production-Ready)
- ✅ `npm audit` with 0 vulnerabilities
- 🛡️ HTTP security headers including CSP, HSTS, X-Frame-Options, Permissions-Policy
- 🤖 Cloudflare Turnstile bot protection on lead form API
- 🔐 Constant-time API key comparison for inventory route
- 📏 Input length limits + full server-side validation
- 🚫 No raw error messages exposed to clients
- 🔒 Supabase service-role key is server-side only, never in client bundle

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org) (App Router) |
| Language | TypeScript 5 |
| Styling | Custom CSS (globals.css) with CSS custom properties, no Tailwind |
| Fonts | Google Fonts via `next/font` (Playfair Display + Inter) |
| CMS | [Sanity.io](https://sanity.io) (schemas defined, ready to connect) |
| Database | [Supabase](https://supabase.com) (PostgreSQL; schema in `db/schema.sql`) |
| Bot Protection | [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/) |
| Deployment | [Vercel](https://vercel.com) (recommended) |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### 1. Clone & Install

```bash
git clone https://github.com/<your-username>/builder-company.git
cd builder-company
npm install
```

### 2. Configure Environment Variables

Copy the example file and fill in your values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `SUPABASE_URL` | Your Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Service-role key (server-side only; never expose to browser) |
| `SUPABASE_ANON_KEY` | Anon key (for future client-side RLS queries) |
| `SANITY_PROJECT_ID` | Sanity project ID |
| `SANITY_DATASET` | Sanity dataset (e.g. `production`) |
| `SANITY_API_TOKEN` | Sanity write token (server-side mutations only) |
| `NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY` | Turnstile site key (safe for browser) |
| `CLOUDFLARE_TURNSTILE_SECRET_KEY` | Turnstile secret key (server-side only) |
| `API_SECRET_KEY` | 32+ char random secret for inventory API route; generate with `openssl rand -hex 32` |
| `EMAIL_SERVICE_API_KEY` | Email provider key (for confirmation emails) |

> **Local dev without external services:** The app runs without any env vars set. API routes will return graceful errors, and pages use static mock data.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 🗄️ Database Setup (Supabase)

The full PostgreSQL schema is in [`db/schema.sql`](db/schema.sql). Run it in the Supabase SQL editor to create:

- `communities`
- `floor_plans`
- `available_homes`
- `inventory_status_history`
- `leads`

---

## 📁 Project Structure

```
builder-company/
├── app/
│   ├── (marketing)/          # Marketing page group
│   ├── about/                # About page
│   ├── available-homes/      # Hot Homes listing
│   ├── communities/          # Community listings
│   ├── contact/              # Contact form page
│   ├── floor-plans/          # Floor plan catalog
│   ├── gallery/              # Photo gallery
│   ├── portfolio/            # Project portfolio
│   ├── process/              # Build process timeline
│   ├── api/
│   │   ├── lead/             # Lead capture API route
│   │   └── inventory/        # Inventory management API (auth required)
│   ├── globals.css           # Full design system CSS
│   ├── layout.tsx            # Root layout (nav, footer, chat widget)
│   └── page.tsx              # Home page
├── components/
│   ├── layout/
│   │   └── Navbar.tsx        # Responsive sticky navbar
│   ├── ui/
│   │   ├── ChatWidget.tsx    # AI chat widget (Aria)
│   │   ├── FAQAccordion.tsx  # Animated accordion
│   │   └── FilterBar.tsx     # Filter pill buttons
│   ├── cards/                # Reusable card components
│   └── forms/
│       └── LeadForm.tsx      # Lead capture form
├── lib/
│   ├── supabase.ts           # Supabase server-side client
│   ├── sanity.ts             # Sanity read/write clients
│   └── validators.ts         # Input validation with length limits
├── sanity/
│   └── schemas/              # Sanity content schemas
├── db/
│   └── schema.sql            # PostgreSQL database schema
├── next.config.js            # Next.js config + security headers
└── .env.example              # Environment variable template
```

---

## 🌐 Deploy to Vercel (Recommended)

Vercel is the fastest way to get a live HTTPS URL:

1. Push this repo to GitHub (see below)
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your `builder-company` GitHub repo
4. Add all environment variables from `.env.example`
5. Click **Deploy** and you'll get a live `https://builder-company.vercel.app` URL in ~60 seconds

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## 📸 Screenshots

**Hero Section**
![Hero section showing luxury home with gold headline](docs/screenshots/hero.png)

**Communities Page**
![Communities page with filter tabs and property cards](docs/screenshots/communities.png)

**Aria AI Chatbot**
![Aria chatbot widget open on the gallery section](docs/screenshots/chatbot.png)

---

## 🔮 Roadmap

- [ ] Connect Sanity CMS for dynamic content management
- [ ] Integrate real Cloudflare Turnstile on contact form
- [ ] Wire Supabase for live inventory and lead storage
- [ ] Add email confirmations via Resend/SendGrid
- [ ] SEO: sitemap.xml, robots.txt, OpenGraph images
- [ ] Google Analytics / Vercel Analytics integration
- [ ] Admin dashboard for lead management

---

## 📄 License

MIT — free to use, modify and deploy for personal and commercial projects.

---

Built with ❤️ using Next.js, TypeScript, and a lot of attention to detail.
