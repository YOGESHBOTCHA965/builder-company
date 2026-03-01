import React from 'react';
import Link from 'next/link';

const communities = [
  {
    name:'Oakridge Estates',
    city:'Austin, TX',
    status:'Selling Now',
    statusClass:'badge-green',
    priceRange:'$620s – $1.1M',
    homes:'72 Homesites',
    sqft:'2,400 – 4,800 sq ft',
    img:'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    desc:'A gated sanctuary in the Texas Hill Country, featuring sweeping panoramic views, resort-style amenities, and access to top-rated schools.',
  },
  {
    name:'Lakeville Shores',
    city:'Lake Travis, TX',
    status:'Coming Soon',
    statusClass:'badge-gold',
    priceRange:'$780s – $1.4M',
    homes:'48 Homesites',
    sqft:'2,800 – 5,200 sq ft',
    img:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    desc:'Waterfront luxury living on the shores of Lake Travis. Private community boat dock, walking trails, and breathtaking sunsets every evening.',
  },
  {
    name:'Maplewood Reserve',
    city:'Dallas, TX',
    status:'Selling Now',
    statusClass:'badge-green',
    priceRange:'$540s – $890K',
    homes:'96 Homesites',
    sqft:'2,200 – 4,200 sq ft',
    img:'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80',
    desc:'Urban sophistication meets suburban serenity. Maplewood Reserve offers exceptional walkability, curated landscaping, and a vibrant community clubhouse.',
  },
  {
    name:'Riverview Heights',
    city:'Houston, TX',
    status:'Selling Now',
    statusClass:'badge-green',
    priceRange:'$490s – $820K',
    homes:'120 Homesites',
    sqft:'2,000 – 3,900 sq ft',
    img:'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80',
    desc:'Houston\'s newest master-planned community. Energy-efficient construction, smart home integration, and an 8-acre central park at its heart.',
  },
  {
    name:'Cedar Glen',
    city:'San Antonio, TX',
    status:'Limited Homes',
    statusClass:'badge-amber',
    priceRange:'$460s – $740K',
    homes:'64 Homesites',
    sqft:'1,900 – 3,600 sq ft',
    img:'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    desc:'Heritage-inspired architecture in the heart of San Antonio. Cedar Glen blends timeless Texas character with modern luxury finishes.',
  },
  {
    name:'Pinnacle Ridge',
    city:'Frisco, TX',
    status:'Selling Now',
    statusClass:'badge-green',
    priceRange:'$680s – $1.2M',
    homes:'56 Homesites',
    sqft:'2,600 – 5,000 sq ft',
    img:'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
    desc:'Prestige Homes\' most ambitious community to date. Located in Frisco\'s fastest-growing corridor, with unrivaled amenities and award-winning schools.',
  },
];

export default function CommunitiesPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="inner">
          <span className="eyebrow" style={{ color:'var(--gold)' }}>Texas Communities</span>
          <h1 style={{ fontFamily:'var(--font-playfair, Georgia, serif)' }}>Find Your Community</h1>
          <div className="gold-divider" style={{ margin:'1rem auto 1.5rem' }} />
          <p>12 extraordinary communities across Texas — each thoughtfully planned, meticulously built, and designed to foster connection.</p>
        </div>
      </section>

      <section className="section-lg">
        <div className="container">
          <div className="filter-row">
            {['All Regions','Austin','Dallas','Houston','San Antonio','Frisco'].map((f,i) => (
              <span key={f} className={`filter-pill${i===0?' active':''}`} style={{ cursor:'default' }}>{f}</span>
            ))}
          </div>

          <div className="grid-3" style={{ gap:'2rem' }}>
            {communities.map(c => (
              <div key={c.name} className="card">
                <div className="img-zoom-wrap" style={{ height:240 }}>
                  <img src={c.img} alt={c.name} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                  <div style={{ position:'absolute', top:14, left:14 }}>
                    <span className={`badge ${c.statusClass}`}>{c.status}</span>
                  </div>
                </div>
                <div style={{ padding:'1.75rem' }}>
                  <p style={{ fontSize:12, color:'var(--gold-dark)', fontWeight:700, textTransform:'uppercase', letterSpacing:1.5, marginBottom:6 }}>{c.city}</p>
                  <h3 style={{ fontFamily:'var(--font-playfair, Georgia, serif)', fontSize:22, marginBottom:8 }}>{c.name}</h3>
                  <p style={{ fontSize:14, color:'var(--text-body)', lineHeight:1.8, marginBottom:'1.25rem' }}>{c.desc}</p>
                  <div className="spec-box" style={{ marginBottom:'1.25rem' }}>
                    <div><span className="spec-val">{c.priceRange}</span><span className="spec-lbl">Starting From</span></div>
                    <div><span className="spec-val">{c.homes}</span><span className="spec-lbl">Available</span></div>
                    <div><span className="spec-val">{c.sqft}</span><span className="spec-lbl">Home Size</span></div>
                  </div>
                  <Link href="/contact" className="btn btn-dark" style={{ width:'100%', textAlign:'center', display:'block' }}>
                    Explore Community
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ textAlign:'center', padding:'5rem 2rem', background:'var(--warm-gray)' }}>
        <span className="eyebrow">Not Sure Where to Start?</span>
        <h2 style={{ fontFamily:'var(--font-playfair, Georgia, serif)', fontSize:'clamp(1.8rem,3vw,2.6rem)', marginBottom:'1rem' }}>
          Let Us Match You to the Perfect Community
        </h2>
        <p style={{ fontSize:16, color:'var(--text-body)', maxWidth:500, margin:'0 auto 2rem', lineHeight:1.8 }}>
          Our Personal Home Advisors will help you find the right community based on your lifestyle, budget, and location preferences.
        </p>
        <Link href="/contact" className="btn btn-dark btn-lg">Talk to a Home Advisor</Link>
      </section>
    </div>
  );
}
