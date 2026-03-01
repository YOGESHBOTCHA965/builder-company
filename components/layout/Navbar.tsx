'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/communities',     label: 'Communities' },
  { href: '/floor-plans',     label: 'Floor Plans' },
  { href: '/available-homes', label: 'Hot Homes' },
  { href: '/portfolio',       label: 'Portfolio' },
  { href: '/gallery',         label: 'Gallery' },
  { href: '/process',         label: 'Our Process' },
  { href: '/about',           label: 'About Us' },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className="nav-wrapper"
        style={{ boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.28)' : undefined }}
      >
        <div className="nav-inner">
          {/* Logo */}
          <Link href="/" className="nav-logo" onClick={() => setOpen(false)}>
            PRESTIGE<span>&nbsp;HOMES</span>
          </Link>

          {/* Desktop Links */}
          <ul className="nav-links">
            {navLinks.map(l => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="nav-cta">Contact Us</Link>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className={`hamburger${open ? ' open' : ''}`}
            aria-label="Toggle menu"
            onClick={() => setOpen(o => !o)}
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`mobile-menu${open ? ' open' : ''}`}>
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            style={{
              marginTop: '1rem',
              background: 'var(--gold)',
              color: '#fff',
              padding: '13px 0',
              borderRadius: '8px',
              textAlign: 'center',
              fontWeight: 700,
              fontSize: 15,
              border: 'none',
              display: 'block',
            }}
          >
            Get in Touch
          </Link>
        </div>
      </nav>
    </>
  );
}
