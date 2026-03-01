import React from 'react';
import Link from 'next/link';

const plans = [
  {
    name:'The Ashford',
    style:'Traditional',
    beds:4, baths:3.5, sqft:3200, garage:3,
    price:'$620s',
    img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    features:['Gourmet Island Kitchen','Covered Back Porch','Study/Home Office','Primary Suite on Main'],
    badge:'Most Popular',
    badgeClass:'badge-gold',
  },
  {
    name:'The Worthington',
    style:'Modern Farmhouse',
    beds:5, baths:4, sqft:4100, garage:3,
    price:'$780s',
    img:'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
    features:['Two-Story Great Room','Game Room + Media Room','Prep Kitchen','3-Car Split Garage'],
    badge:'New Plan',
    badgeClass:'badge-green',
  },
  {
    name:'The Meridian',
    style:'Contemporary',
    beds:3, baths:2.5, sqft:2400, garage:2,
    price:'$490s',
    img:'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    features:['Open Concept Living','Spa-Style Primary Bath','Smart Home Pre-Wire','Energy Star Certified'],
    badge:'',
    badgeClass:'',
  },
  {
    name:'The Harrington',
    style:'Hill Country',
    beds:4, baths:3, sqft:3600, garage:2,
    price:'$680s',
    img:'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80',
    features:['Vaulted Ceiling Great Room','Outdoor Kitchen Ready','Jack & Jill Bath','Mud/Utility Room'],
    badge:'Award Winner',
    badgeClass:'badge-dark',
  },
  {
    name:'The Summit',
    style:'Traditional',
    beds:5, baths:4.5, sqft:4800, garage:3,
    price:'$920s',
    img:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    features:['Butler\'s Pantry & Wet Bar','Private Guest Suite','Bonus Loft Space','3-Car Courtyard Garage'],
    badge:'Editor\'s Pick',
    badgeClass:'badge-gold',
  },
  {
    name:'The Laurel',
    style:'Modern Farmhouse',
    beds:3, baths:2, sqft:1980, garage:2,
    price:'$420s',
    img:'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80',
    features:['1-Story Living','Expansive Covered Patio','Quartz Countertops Std','Energy Efficient Pkg'],
    badge:'Great Value',
    badgeClass:'badge-amber',
  },
];

export default function FloorPlansPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="inner">
          <span className="eyebrow" style={{ color:'var(--gold)' }}>Thoughtfully Designed</span>
          <h1 style={{ fontFamily:'var(--font-playfair, Georgia, serif)' }}>Floor Plans</h1>
          <div className="gold-divider" style={{ margin:'1rem auto 1.5rem' }} />
          <p>From cozy 3-bedroom retreats to sprawling 5-bedroom estates — every plan is crafted for the way real families actually live.</p>
        </div>
      </section>

      <section className="section-lg">
        <div className="container">
          <div className="filter-row">
            {['All Plans','3 Bedrooms','4 Bedrooms','5 Bedrooms','Modern Farmhouse','Traditional','Contemporary','Hill Country'].map((f,i) => (
              <span key={f} className={`filter-pill${i===0?' active':''}`} style={{ cursor:'default' }}>{f}</span>
            ))}
          </div>

          <div className="grid-3" style={{ gap:'2rem' }}>
            {plans.map(p => (
              <div key={p.name} className="card">
                <div className="img-zoom-wrap" style={{ height:240 }}>
                  <img src={p.img} alt={p.name} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                  {p.badge && (
                    <div style={{ position:'absolute', top:14, left:14 }}>
                      <span className={`badge ${p.badgeClass}`}>{p.badge}</span>
                    </div>
                  )}
                  <div style={{ position:'absolute', top:14, right:14 }}>
                    <span className="badge badge-gray">{p.style}</span>
                  </div>
                </div>
                <div style={{ padding:'1.75rem' }}>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:12 }}>
                    <h3 style={{ fontFamily:'var(--font-playfair, Georgia, serif)', fontSize:22 }}>{p.name}</h3>
                    <span style={{ fontSize:18, fontWeight:700, color:'var(--gold-dark)' }}>{p.price}</span>
                  </div>
                  <div className="spec-box" style={{ marginBottom:'1.25rem' }}>
                    <div><span className="spec-val">{p.beds}</span><span className="spec-lbl">Beds</span></div>
                    <div><span className="spec-val">{p.baths}</span><span className="spec-lbl">Baths</span></div>
                    <div><span className="spec-val">{p.sqft.toLocaleString()}</span><span className="spec-lbl">Sq Ft</span></div>
                    <div><span className="spec-val">{p.garage}</span><span className="spec-lbl">Car Gar.</span></div>
                  </div>
                  <ul style={{ listStyle:'none', padding:0, margin:'0 0 1.5rem', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'6px 8px' }}>
                    {p.features.map(f => (
                      <li key={f} style={{ fontSize:12, color:'var(--text-body)', display:'flex', alignItems:'flex-start', gap:5 }}>
                        <span style={{ color:'var(--gold-dark)', marginTop:2 }}>✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <div style={{ display:'flex', gap:8 }}>
                    <Link href="/contact" className="btn btn-dark" style={{ flex:1, textAlign:'center' }}>Request Info</Link>
                    <Link href="/contact" className="btn btn-outline-dark" style={{ flex:1, textAlign:'center' }}>View Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ textAlign:'center', padding:'5rem 2rem', background:'var(--charcoal)' }}>
        <span className="eyebrow" style={{ color:'var(--gold)' }}>Don&apos;t See Exactly What You Want?</span>
        <h2 style={{ fontFamily:'var(--font-playfair, Georgia, serif)', fontSize:'clamp(1.8rem,3vw,2.6rem)', color:'#f8f8f6', marginBottom:'1rem' }}>
          We Build Custom, Too.
        </h2>
        <p style={{ fontSize:16, color:'#bbb', maxWidth:480, margin:'0 auto 2rem', lineHeight:1.8 }}>
          Our design team will work with you to craft a plan that perfectly fits your lifestyle, lot, and vision.
        </p>
        <Link href="/contact" className="btn btn-gold btn-lg">Start a Custom Design →</Link>
      </section>
    </div>
  );
}
