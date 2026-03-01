import React from 'react';
import Link from 'next/link';
import { Playfair_Display, Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import ChatWidget from '@/components/ui/ChatWidget';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400','500','600','700','900'],
});
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300','400','500','600','700'],
});

export const metadata = {
  title: 'Prestige Homes | Luxury Custom Home Builder — Texas',
  description: 'Award-winning luxury custom home builder crafting premier residences across Texas.',
};

const footerCols = {
  Communities: [
    { label: 'Oakridge Estates',        href: '/communities' },
    { label: 'Maplewood Reserve',       href: '/communities' },
    { label: 'Riverview Heights',       href: '/communities' },
    { label: 'The Summit at Westlake',  href: '/communities' },
    { label: 'Lakeville Shores',        href: '/communities' },
  ],
  Homes: [
    { label: 'Hot Homes',    href: '/available-homes' },
    { label: 'Floor Plans',  href: '/floor-plans' },
    { label: 'Portfolio',    href: '/portfolio' },
    { label: 'Gallery',      href: '/gallery' },
  ],
  Company: [
    { label: 'About Us',       href: '/about' },
    { label: 'Our Process',    href: '/process' },
    { label: 'Contact',        href: '/contact' },
    { label: 'Privacy Policy', href: '/contact' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body style={{ fontFamily: 'var(--font-inter, Inter, Arial, sans-serif)' }}>

        {/* Announcement Bar */}
        <div className="announcement-bar">
          🏆&nbsp;Prestige Homes Voted #1 Luxury Builder in Texas — 5 Years Running&nbsp;
          <Link href="/portfolio">View Our Work →</Link>
        </div>

        {/* Sticky Navbar */}
        <Navbar />

        {/* Page Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer style={{ background: '#111', color: '#c8bfa8', paddingTop: '4.5rem' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(190px,1fr))',
              gap: '3rem',
              paddingBottom: '3.5rem',
              borderBottom: '1px solid rgba(201,168,76,0.12)',
            }}>
              {/* Brand */}
              <div>
                <p style={{
                  fontFamily: 'var(--font-playfair, Georgia, serif)',
                  fontSize: 26, fontWeight: 700,
                  color: 'var(--gold-light)',
                  letterSpacing: 3, marginBottom: '1.25rem', lineHeight: 1.3,
                }}>
                  PRESTIGE<br /><span style={{ color: 'var(--gold)' }}>HOMES</span>
                </p>
                <p style={{ fontSize: 14, lineHeight: 1.85, color: '#777', marginBottom: '1.5rem', maxWidth: 210 }}>
                  Crafting extraordinary residences since 1998, across Texas&apos;s most sought-after communities.
                </p>
                {/* Social */}
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  {[
                    { text: 'f',   label: 'Facebook' },
                    { text: 'in',  label: 'LinkedIn' },
                    { text: '▶',   label: 'YouTube' },
                    { text: '◉',   label: 'Instagram' },
                  ].map(s => (
                    <a key={s.label} href="#" aria-label={s.label} className="social-icon"
                      style={{ fontFamily: 'Arial, sans-serif', fontSize: 13, fontWeight: 700 }}>
                      {s.text}
                    </a>
                  ))}
                </div>
              </div>

              {/* Link Columns */}
              {Object.entries(footerCols).map(([heading, links]) => (
                <div key={heading}>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.25rem' }}>
                    {heading}
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {links.map(l => (
                      <li key={l.label}>
                        <Link href={l.href} className="footer-link">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Contact */}
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.25rem' }}>
                  Contact
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14, color: '#777' }}>
                  <a href="tel:+15125550190" style={{ color: '#777' }}>📞&nbsp;(512) 555-0190</a>
                  <a href="mailto:hello@prestigehomes.com" style={{ color: '#777' }}>✉️&nbsp;hello@prestigehomes.com</a>
                  <p style={{ margin: 0, lineHeight: 1.75 }}>📍&nbsp;3800 N Capital of Texas Hwy<br />Austin, TX 78746</p>
                  <p style={{ margin: 0 }}>🕐&nbsp;Mon–Fri 9am–6pm, Sat 10am–4pm</p>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              flexWrap: 'wrap', gap: '0.75rem',
              padding: '1.75rem 0',
              fontSize: 13, color: '#555',
            }}>
              <p style={{ color: '#555', margin: 0 }}>
                © {new Date().getFullYear()} Prestige Homes. All rights reserved.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                {['Privacy Policy','Terms of Service','Sitemap'].map(t => (
                  <Link key={t} href="/contact" className="footer-legal-link">
                    {t}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </footer>

        {/* Floating Chat & Chatbot */}
        <ChatWidget />

      </body>
    </html>
  );
}
