import React from 'react';
import Link from 'next/link';

const leaders = [
  { name:'Robert Harrington', title:'Founder & CEO', years:'28 years', img:'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80', bio:'Robert founded Prestige Homes in 1998 with a simple belief: every family deserves a home built without compromise. Under his leadership, the company has delivered over 500 extraordinary residences across Texas.' },
  { name:'Catherine Blake', title:'Chief Design Officer', years:'20 years', img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80', bio:'Catherine oversees every design selection across all Prestige communities. A graduate of Rice University\'s architecture program, she brings a rare combination of aesthetic vision and technical precision.' },
  { name:'Marcus Prestige', title:'VP of Construction', years:'16 years', img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', bio:'Marcus owns a Prestige Home — which tells you everything about his standards. He manages our network of master-trade partners and enforces our zero-shortcuts construction philosophy.' },
  { name:'Alicia Torres', title:'Lead Interior Designer', years:'11 years', img:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80', bio:'Alicia runs our 12,000 sq ft design studio in Austin, guiding hundreds of families through their finish selections with an expert eye for luxury and livability.' },
  { name:'David Chen', title:'Senior Project Manager', years:'12 years', img:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80', bio:'David has overseen the construction of 180+ homes. He lives in Lakeville Shores and credits that personal investment as the reason he\'ll never let a shortcut slide on any job site.' },
  { name:'Priya Nair', title:'Head of Client Relations', years:'9 years', img:'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80', bio:'Priya ensures every homeowner family feels informed, supported, and excited at every stage. Her team maintains a 98% client satisfaction rating — the highest in our regional market.' },
];

const awards = [
  { year:'2024', award:'Best Luxury Home Builder',          org:'Texas Home Builders Association' },
  { year:'2024', award:'Design Excellence Award',           org:'Austin AIA' },
  { year:'2023', award:'Green Builder of the Year',         org:'Texas Green Building Council' },
  { year:'2023', award:'Customer Service Award',            org:'BuilderReviews.com' },
  { year:'2022', award:'Community Development of the Year', org:'NAHB National Awards' },
  { year:'2022', award:'Best Master-Planned Community',     org:'Dallas Morning News' },
];

const values = [
  { icon:'⚖️', title:'Integrity Above All',        desc:'We do what we say. Every commitment is honored, every budget respected, every timeline upheld.' },
  { icon:'💎', title:'Uncompromising Quality',     desc:'We use only premium materials and vetted master trade partners. There is no "good enough" at Prestige.' },
  { icon:'🧑‍🤝‍🧑', title:'Family-First Culture',    desc:'We build homes for families — and we operate as one. Our team has an average tenure of 11 years.' },
  { icon:'🔬', title:'Continuous Innovation',      desc:'From smart home integration to sustainable building methods, we adopt best practices before they become standard.' },
];

export default function AboutPage() {
  return (
    <div>

      {/* Page Hero */}
      <section className="page-hero" style={{ textAlign:'left', padding:'6rem 2rem' }}>
        <div style={{ maxWidth:1320, margin:'0 auto', position:'relative', zIndex:1 }}>
          <span className="eyebrow" style={{ color:'var(--gold)' }}>Building Memories Since 1998</span>
          <h1 style={{ fontFamily:'var(--font-playfair, Georgia, serif)', fontSize:'clamp(2.5rem,5vw,4rem)', color:'#f8f8f6', maxWidth:700 }}>
            Rooted in Family.<br />Built for Yours.
          </h1>
          <div className="gold-divider gold-divider-left" style={{ marginTop:'1.25rem', marginBottom:'1.5rem' }} />
          <p style={{ fontSize:18, color:'#d4c9b0', maxWidth:580, lineHeight:1.85 }}>
            For over 25 years, Prestige Homes has turned individual visions into extraordinary living spaces.
            We&apos;re not a volume builder. We&apos;re craftsmen who happen to build homes.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-lg">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'5rem', alignItems:'center' }}>
            <div>
              <span className="eyebrow">Our Story</span>
              <h2 style={{ fontFamily:'var(--font-playfair, Georgia, serif)', fontSize:'clamp(1.8rem,3vw,2.6rem)', marginBottom:'1.5rem' }}>
                A Legacy Built One<br />Home at a Time
              </h2>
              <div className="gold-divider gold-divider-left" style={{ marginBottom:'1.75rem' }} />
              <p style={{ fontSize:15, lineHeight:1.9, color:'var(--text-body)', marginBottom:'1.25rem' }}>
                Prestige Homes was founded in 1998 by Robert Harrington with a single model home in Austin and an
                unshakeable conviction: luxury homebuilding should be personal, transparent, and held to the
                highest possible standard.
              </p>
              <p style={{ fontSize:15, lineHeight:1.9, color:'var(--text-body)', marginBottom:'1.25rem' }}>
                Twenty-five years later, we&apos;ve delivered over 500 custom residences across 12 communities in
                Texas. Every one of those homes reflects the same values Robert started with — just refined by
                thousands of hours of collective craftsmanship.
              </p>
              <p style={{ fontSize:15, lineHeight:1.9, color:'var(--text-body)', marginBottom:'2rem' }}>
                What makes us different? Many of our people own Prestige Homes. When your team invests in what
                they build, the standard of care never slips.
              </p>
              <Link href="/contact" className="btn btn-dark">Start Your Journey →</Link>
            </div>
            <div style={{ borderRadius:'var(--radius)', overflow:'hidden', boxShadow:'var(--shadow-lg)' }}>
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=85" alt="Our craftsmanship" style={{ width:'100%', height:520, objectFit:'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-lg" style={{ background:'var(--warm-gray)' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'3.5rem' }}>
            <span className="eyebrow">What We Stand For</span>
            <h2 style={{ fontFamily:'var(--font-playfair, Georgia, serif)', fontSize:'clamp(2rem,3.5vw,2.8rem)' }}>
              Our Core Values
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid-4" style={{ gap:'1.75rem' }}>
            {values.map(v => (
              <div key={v.title} style={{ background:'#fff', borderRadius:'var(--radius)', padding:'2.25rem 1.75rem', boxShadow:'var(--shadow-card)', textAlign:'center' }}>
                <div style={{ fontSize:44, marginBottom:16 }}>{v.icon}</div>
                <h3 style={{ fontFamily:'var(--font-playfair, Georgia, serif)', fontSize:20, marginBottom:12 }}>{v.title}</h3>
                <p style={{ fontSize:14, lineHeight:1.8, color:'var(--text-body)' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-lg">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'3.5rem' }}>
            <span className="eyebrow">The People Behind the Homes</span>
            <h2 style={{ fontFamily:'var(--font-playfair, Georgia, serif)', fontSize:'clamp(2rem,3.5vw,2.8rem)' }}>
              Our Leadership Team
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid-3" style={{ gap:'2rem' }}>
            {leaders.map(l => (
              <div key={l.name} className="card">
                <div className="img-zoom-wrap" style={{ height:280 }}>
                  <img src={l.img} alt={l.name} style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top' }} />
                </div>
                <div style={{ padding:'1.75rem' }}>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:12, gap:8 }}>
                    <div>
                      <h3 style={{ fontFamily:'var(--font-playfair, Georgia, serif)', fontSize:20, marginBottom:4 }}>{l.name}</h3>
                      <p style={{ fontSize:13, color:'var(--gold-dark)', fontWeight:600 }}>{l.title}</p>
                    </div>
                    <span className="badge badge-gold">{l.years}</span>
                  </div>
                  <p style={{ fontSize:14, lineHeight:1.8, color:'var(--text-body)' }}>{l.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section-lg" style={{ background:'var(--charcoal)' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'3.5rem' }}>
            <span className="eyebrow" style={{ color:'var(--gold)' }}>Recognition</span>
            <h2 style={{ fontFamily:'var(--font-playfair, Georgia, serif)', fontSize:'clamp(2rem,3.5vw,2.8rem)', color:'#f8f8f6' }}>
              Award-Winning Excellence
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid-3" style={{ gap:'1.5rem' }}>
            {awards.map(a => (
              <div key={a.award} style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(201,168,76,0.2)', borderRadius:'var(--radius)', padding:'1.75rem', display:'flex', gap:'1.25rem', alignItems:'flex-start' }}>
                <div style={{ fontSize:32, flexShrink:0 }}>🏆</div>
                <div>
                  <p style={{ fontSize:11, color:'var(--gold)', fontWeight:700, letterSpacing:2, textTransform:'uppercase', marginBottom:6 }}>{a.year}</p>
                  <p style={{ fontFamily:'var(--font-playfair, Georgia, serif)', fontSize:17, color:'#f8f8f6', marginBottom:6 }}>{a.award}</p>
                  <p style={{ fontSize:13, color:'#888' }}>{a.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign:'center', padding:'5rem 2rem', background:'var(--warm-gray)' }}>
        <span className="eyebrow">Join the Prestige Family</span>
        <h2 style={{ fontFamily:'var(--font-playfair, Georgia, serif)', fontSize:'clamp(1.8rem,3vw,2.6rem)', marginBottom:'1rem' }}>
          Ready to Experience the Difference?
        </h2>
        <p style={{ fontSize:17, color:'var(--text-body)', maxWidth:500, margin:'0 auto 2rem', lineHeight:1.8 }}>
          Schedule a no-pressure consultation with a Personal Home Advisor today.
        </p>
        <Link href="/contact" className="btn btn-dark btn-lg">Get in Touch</Link>
      </section>

    </div>
  );
}
