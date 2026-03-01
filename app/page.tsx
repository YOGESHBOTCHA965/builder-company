import React from 'react';
import Link from 'next/link';
import FAQAccordion, { FAQItem } from '@/components/ui/FAQAccordion';

/* ─── DATA ─────────────────────────────────────────────────────────────────── */
const hotHomes = [
  { id:1, address:'1240 Oakridge Lane', city:'Austin, TX 78735', community:'Oakridge Estates', plan:'The Ashford', beds:4, baths:3.5, sqft:3200, price:'$1,285,000', status:'Move-In Ready', badgeClass:'badge-green', img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=640&q=80' },
  { id:2, address:'847 Maplewood Drive', city:'Dallas, TX 75205', community:'Maplewood Reserve', plan:'The Laurel', beds:5, baths:4, sqft:4100, price:'$1,395,000', status:'Available', badgeClass:'badge-green', img:'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=640&q=80' },
  { id:3, address:'2103 Riverview Terrace', city:'Houston, TX 77019', community:'Riverview Heights', plan:'The Bellaire', beds:4, baths:3, sqft:2900, price:'$975,000', status:'Available', badgeClass:'badge-green', img:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=640&q=80' },
  { id:4, address:'974 Cedar Glen Court', city:'San Antonio, TX 78256', community:'Cedar Glen', plan:'The Harrington', beds:6, baths:5, sqft:6500, price:'$2,950,000', status:'Move-In Ready', badgeClass:'badge-green', img:'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=640&q=80' },
];

const features = [
  { icon:'🏛️', title:'Timeless Architecture',  desc:'Award-winning architects balance classic elegance with the demands of modern living in every blueprint.' },
  { icon:'🔨', title:'Master Craftsmanship',    desc:'Decades of expertise ensure flawless finishes and construction that stands strong for generations.' },
  { icon:'🌿', title:'Sustainable by Design',   desc:'Solar-ready, energy-efficient builds using eco-conscious materials that are beautiful and responsible.' },
  { icon:'🤝', title:'Concierge Experience',    desc:'A dedicated personal advisor guides every decision from lot selection to your final walkthrough.' },
];

const regions = [
  { city:'Austin',      communities:3, img:'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&q=80' },
  { city:'Dallas',      communities:2, img:'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&q=80' },
  { city:'Houston',     communities:2, img:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&q=80' },
  { city:'San Antonio', communities:1, img:'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&q=80' },
  { city:'Frisco',      communities:1, img:'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&q=80' },
];

const teamStories = [
  { name:'Marcus Prestige', role:'VP of Construction',         quote:"I've built Prestige Homes — and I live in one. When you build something this well, you want to keep it.", img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
  { name:'Alicia Torres',   role:'Lead Interior Designer',     quote:"Every finish I spec for clients, I'd put in my own home. That's the Prestige standard.",                  img:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80' },
  { name:'David Chen',      role:'Senior Project Manager',     quote:"Twelve years here, and the quality never wavers. That's why I bought in Lakeville Shores.",              img:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
];

const galleryImgs = [
  { src:'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80', caption:'Oakridge Estates, Austin',    span:true  },
  { src:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&q=80', caption:"Chef's Kitchen",              span:false },
  { src:'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=500&q=80', caption:'Primary Suite',               span:false },
  { src:'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&q=80', caption:'Maplewood Reserve',           span:false },
  { src:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&q=80', caption:'Lakeside Living',             span:false },
  { src:'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&q=80', caption:'Outdoor Entertaining',        span:false },
  { src:'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&q=80', caption:'European-Style Kitchen',      span:false },
];

const testimonials = [
  { quote:"Prestige Homes didn't just build our dream home — they crafted our dream life. Every detail exceeded expectations.",     name:'Sarah & Michael Thompson', community:'Oakridge Estates' },
  { quote:"From the first meeting to move-in day, the team was professional, transparent, and genuinely passionate about quality.", name:'James & Rachel Chen',      community:'Maplewood Reserve' },
  { quote:"The craftsmanship is unparalleled. Friends and family can't believe the quality of our home. Worth every penny.",        name:'David & Lisa Patel',       community:'Riverview Heights' },
];

const faqs: FAQItem[] = [
  { question:'How long does it take to build a custom home?',   answer:'Our typical build timeline is 9–14 months from permit approval to move-in. Timing depends on plan complexity, site conditions, and selection completeness. We provide a detailed schedule during the contract phase and keep you updated weekly.' },
  { question:'Can I customize a floor plan?',                    answer:'Absolutely. Every plan is a starting point. Our design team works with you to modify layouts, add rooms, adjust square footage, or blend elements from multiple plans. Structural modifications are reviewed by our engineering team.' },
  { question:'What is included in the base price?',             answer:'Our base pricing includes a comprehensive package: site prep, foundation, framing, roofing, all rough mechanicals, insulation, drywall, trim, paint, flooring, cabinetry, countertops, fixtures, and landscaping. No hidden costs.' },
  { question:'Do you offer financing assistance?',              answer:'Yes. We partner with preferred lenders who specialize in new construction loans. Our sales team can connect you with a lending consultant who will walk you through construction-to-permanent financing options.' },
  { question:'What warranty do you provide?',                   answer:'We offer a 2-year workmanship warranty, 5-year systems warranty (HVAC, plumbing, electrical), and a 10-year structural warranty backed by a third-party insurer. You are protected long after move-in.' },
  { question:'How do I get started?',                           answer:'Contact us or visit a model home. A Personal Home Advisor will understand your vision, walk you through communities and floor plans, discuss budget ranges, and outline next steps — all with no pressure.' },
];

const stats = [
  { val:'500+', lbl:'Homes Delivered' },
  { val:'25+',  lbl:'Years of Excellence' },
  { val:'12',   lbl:'Active Communities' },
  { val:'98%',  lbl:'Client Satisfaction' },
];

/* ─── PAGE COMPONENT ─────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <div>

      {/* ══ HERO ═══════════════════════════════════════════════════════════ */}
      <section className="hero-section">
        <div className="hero-bg">
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=85" alt="Luxury home" />
        </div>
        <div className="hero-content">
          <span className="eyebrow" style={{ color:'var(--gold-light)', letterSpacing:5 }}>
            Award-Winning Luxury Builder · Texas
          </span>
          <h1 style={{ fontFamily:'var(--font-playfair, Georgia, serif)' }}>
            Where Vision Becomes<br />
            <span style={{ color:'var(--gold-light)' }}>Your Forever Home</span>
          </h1>
          <p className="lead">
            Premium custom residences built with uncompromising craftsmanship, curated finishes, and a personal touch
            across Texas&apos;s most sought-after communities.
          </p>
          <div className="hero-actions">
            <Link href="/contact"         className="btn btn-gold btn-lg">Schedule a Consultation</Link>
            <Link href="/available-homes" className="btn btn-outline-gold btn-lg">Browse Hot Homes</Link>
          </div>
        </div>
      </section>

      {/* ══ STATS ══════════════════════════════════════════════════════════ */}
      <div className="stats-bar">
        <div className="stats-grid">
          {stats.map(s => (
            <div key={s.lbl} className="stat-item">
              <span className="stat-val" style={{ fontFamily:'var(--font-playfair, Georgia, serif)' }}>{s.val}</span>
              <span className="stat-lbl">{s.lbl}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ══ HOT HOMES ══════════════════════════════════════════════════════ */}
      <section className="section-lg" style={{ background:'var(--off-white)' }}>
        <div className="container">
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', flexWrap:'wrap', gap:'1rem', marginBottom:'3rem' }}>
            <div>
              <span className="eyebrow">— Featured —</span>
              <h2 style={{ fontFamily:'var(--font-playfair, Georgia, serif)', fontSize:'clamp(2rem,3.5vw,2.8rem)' }}>
                Hot Prestige Homes
              </h2>
              <div className="gold-divider gold-divider-left" />
            </div>
            <Link href="/available-homes" className="btn btn-outline-dark btn-sm">View All Homes →</Link>
          </div>

          <div className="grid-4" style={{ gap:'1.75rem' }}>
            {hotHomes.map(h => (
              <div key={h.id} className="card">
                <div className="img-zoom-wrap" style={{ height:210 }}>
                  <img src={h.img} alt={h.address} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                </div>
                <div style={{ padding:'1.4rem' }}>
                  <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:10, gap:8, flexWrap:'wrap' }}>
                    <span className={`badge ${h.badgeClass}`}>{h.status}</span>
                    <span style={{ fontSize:11, color:'var(--text-muted)', textTransform:'uppercase', letterSpacing:0.5 }}>{h.community}</span>
                  </div>
                  <p style={{ fontWeight:700, fontSize:15, marginBottom:2, color:'var(--charcoal)' }}>{h.plan}</p>
                  <p style={{ fontSize:13, color:'var(--text-muted)', marginBottom:12 }}>{h.address}, {h.city}</p>
                  <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:6, marginBottom:14 }}>
                    {[{v:h.beds,l:'Beds'},{v:h.baths,l:'Baths'},{v:h.sqft.toLocaleString(),l:'Sq Ft'}].map(s => (
                      <div key={s.l} className="spec-box">
                        <span className="spec-val">{String(s.v)}</span>
                        <span className="spec-lbl">{s.l}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', borderTop:'1px solid #f0ede6', paddingTop:12 }}>
                    <span style={{ fontFamily:'var(--font-playfair, Georgia, serif)', fontSize:18, fontWeight:700, color:'var(--gold-dark)' }}>{h.price}</span>
                    <Link href="/contact" className="btn btn-dark btn-sm">Get Info</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY PRESTIGE ═══════════════════════════════════════════════════ */}
      <section className="section-lg" style={{ background:'var(--warm-gray)' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'3.5rem' }}>
            <span className="eyebrow">The Prestige Difference</span>
            <h2 style={{ fontFamily:'var(--font-playfair, Georgia, serif)', fontSize:'clamp(2rem,3.5vw,2.8rem)' }}>
              Four Pillars of Excellence
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid-4" style={{ gap:'1.75rem' }}>
            {features.map(f => (
              <div key={f.title} style={{ background:'#fff', borderRadius:'var(--radius)', padding:'2.25rem 1.75rem', boxShadow:'var(--shadow-card)', textAlign:'center' }}>
                <div style={{ fontSize:44, marginBottom:16 }}>{f.icon}</div>
                <h3 style={{ fontFamily:'var(--font-playfair, Georgia, serif)', fontSize:21, marginBottom:12 }}>{f.title}</h3>
                <p style={{ fontSize:14, lineHeight:1.8, color:'var(--text-body)' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ REGIONS ════════════════════════════════════════════════════════ */}
      <section className="section-lg">
        <div className="container">
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', flexWrap:'wrap', gap:'1rem', marginBottom:'3rem' }}>
            <div>
              <span className="eyebrow">Where We Build</span>
              <h2 style={{ fontFamily:'var(--font-playfair, Georgia, serif)', fontSize:'clamp(2rem,3.5vw,2.8rem)' }}>
                Texas Communities
              </h2>
              <div className="gold-divider gold-divider-left" />
            </div>
            <Link href="/communities" className="btn btn-outline-dark btn-sm">All Communities →</Link>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px,1fr))', gap:'1rem' }}>
            {regions.map(r => (
              <Link key={r.city} href="/communities" className="region-card" style={{ display:'block', position:'relative', borderRadius:'var(--radius)', overflow:'hidden', height:240, boxShadow:'var(--shadow-card)', textDecoration:'none' }}>
                <img src={r.img} alt={r.city} className="region-img" />
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 55%)' }} />
                <div style={{ position:'absolute', bottom:16, left:16 }}>
                  <p style={{ fontFamily:'var(--font-playfair, Georgia, serif)', fontSize:20, fontWeight:700, color:'#fff', marginBottom:4 }}>{r.city}</p>
                  <p style={{ fontSize:12, color:'var(--gold-light)' }}>{r.communities} {r.communities===1 ? 'Community':'Communities'}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ GALLERY / BUILDING MEMORIES ════════════════════════════════════ */}
      <section className="section-lg" style={{ background:'var(--charcoal)' }}>
        <div className="container">
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', flexWrap:'wrap', gap:'1rem', marginBottom:'2.5rem' }}>
            <div>
              <span className="eyebrow" style={{ color:'var(--gold)' }}>Our Work</span>
              <h2 style={{ fontFamily:'var(--font-playfair, Georgia, serif)', fontSize:'clamp(2rem,3.5vw,2.8rem)', color:'#f8f8f6' }}>
                Building Memories
              </h2>
              <div className="gold-divider gold-divider-left" />
              <p style={{ marginTop:16, fontSize:16, color:'#bbb', maxWidth:520, lineHeight:1.8 }}>
                Where quality and craftsmanship meet timeless design. With 25 years of experience, we build homes that become legacies.
              </p>
            </div>
            <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
              <Link href="/gallery"  className="btn btn-gold">View Full Gallery</Link>
              <Link href="/process"  className="btn btn-outline-gold">Our Design Process</Link>
            </div>
          </div>
          <div className="gallery-grid">
            {galleryImgs.map((g,i) => (
              <div key={i} className={`gallery-item${g.span ? ' span-2':''}`}>
                <img src={g.src} alt={g.caption} />
                <div className="gallery-overlay">{g.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TEAM STORIES ═══════════════════════════════════════════════════ */}
      <section className="section-lg" style={{ background:'var(--warm-gray)' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'3.5rem' }}>
            <span className="eyebrow">Our Team. Their Story.</span>
            <h2 style={{ fontFamily:'var(--font-playfair, Georgia, serif)', fontSize:'clamp(2rem,3.5vw,2.8rem)' }}>
              We Don&apos;t Just Build Homes.<br />We Live in Them.
            </h2>
            <div className="gold-divider" />
            <p style={{ marginTop:'1.25rem', fontSize:16, color:'var(--text-body)', maxWidth:560, margin:'1.25rem auto 0', lineHeight:1.8 }}>
              Many of our team members own Prestige Homes. When your employees trust your product enough to invest in it, that says everything.
            </p>
          </div>
          <div className="grid-3" style={{ gap:'2rem' }}>
            {teamStories.map(t => (
              <div key={t.name} style={{ background:'#fff', borderRadius:'var(--radius)', overflow:'hidden', boxShadow:'var(--shadow-card)', display:'flex', flexDirection:'column' }}>
                <div className="gallery-thumb-wrap" style={{ height:260, overflow:'hidden' }}>
                  <img src={t.img} alt={t.name} className="gallery-thumb" style={{ objectPosition:'top' }} />
                </div>
                <div style={{ padding:'1.75rem', flex:1, display:'flex', flexDirection:'column', gap:12 }}>
                  <p style={{ fontSize:15, color:'var(--text-body)', lineHeight:1.85, fontStyle:'italic', flex:1 }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p style={{ fontWeight:700, color:'var(--charcoal)', fontSize:15, margin:0 }}>{t.name}</p>
                    <p style={{ fontSize:13, color:'var(--gold-dark)', marginTop:3, margin:0 }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign:'center', marginTop:'2.5rem' }}>
            <Link href="/about" className="btn btn-dark">Meet the Full Team →</Link>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ═══════════════════════════════════════════════════ */}
      <section className="section-lg">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'3.5rem' }}>
            <span className="eyebrow">What Homeowners Say</span>
            <h2 style={{ fontFamily:'var(--font-playfair, Georgia, serif)', fontSize:'clamp(2rem,3.5vw,2.8rem)' }}>
              Real Stories. Real Families.
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid-3" style={{ gap:'2rem' }}>
            {testimonials.map(t => (
              <div key={t.name} className="testimonial-card">
                <div className="testimonial-quote">&ldquo;</div>
                <p className="testimonial-text">{t.quote}</p>
                <div className="testimonial-author">{t.name}</div>
                <div className="testimonial-community">{t.community}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ════════════════════════════════════════════════════════════ */}
      <section className="section-lg" style={{ background:'var(--warm-gray)' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'3.5rem' }}>
            <span className="eyebrow">Ask Away</span>
            <h2 style={{ fontFamily:'var(--font-playfair, Georgia, serif)', fontSize:'clamp(2rem,3.5vw,2.8rem)' }}>
              Frequently Asked Questions
            </h2>
            <div className="gold-divider" />
            <p style={{ marginTop:'1.25rem', fontSize:16, color:'var(--text-body)', maxWidth:540, margin:'1.25rem auto 0', lineHeight:1.8 }}>
              Ready to get started? Or just have questions? Ask us anything.
            </p>
          </div>
          <FAQAccordion items={faqs} />
          <div style={{ textAlign:'center', marginTop:'2.5rem' }}>
            <Link href="/contact" className="btn btn-dark">Have Another Question? Contact Us</Link>
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ══════════════════════════════════════════════════════ */}
      <section style={{ background:'linear-gradient(135deg,#1a1a1a 0%,#3a2e1a 100%)', textAlign:'center', padding:'6rem 2rem', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:'url(https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1600&q=60)', backgroundSize:'cover', backgroundPosition:'center', opacity:0.09 }} />
        <div style={{ position:'relative', maxWidth:700, margin:'0 auto' }}>
          <span className="eyebrow" style={{ color:'var(--gold)' }}>Start Your Journey</span>
          <h2 style={{ fontFamily:'var(--font-playfair, Georgia, serif)', fontSize:'clamp(2.2rem,4.5vw,3.8rem)', color:'var(--gold-light)', marginBottom:'1.25rem' }}>
            Ready to Build<br />Your Dream?
          </h2>
          <p style={{ fontSize:18, color:'#d4c9b0', maxWidth:520, margin:'0 auto 2.5rem', lineHeight:1.8 }}>
            Let&apos;s start a conversation about your vision. Our team guides you from first idea to move-in day.
          </p>
          <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
            <Link href="/contact"          className="btn btn-gold btn-lg">Get in Touch Today</Link>
            <Link href="/available-homes"  className="btn btn-outline-gold btn-lg">Browse Quick Move-Ins</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
