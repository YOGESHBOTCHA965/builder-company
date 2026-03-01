import React from 'react';
import Link from 'next/link';

const homes = [
  {
    name:'The Ashford — Lot 14',
    community:'Oakridge Estates',
    city:'Austin, TX',
    status:'Move-In Ready',
    statusClass:'badge-green',
    price:'$689,900',
    beds:4, baths:3.5, sqft:3200, garage:3,
    img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    tags:['New Construction','Energy Star','Smart Home'],
  },
  {
    name:'The Worthington — Lot 7',
    community:'Lakeville Shores',
    city:'Lake Travis, TX',
    status:'Under Contract',
    statusClass:'badge-amber',
    price:'$842,500',
    beds:5, baths:4, sqft:4100, garage:3,
    img:'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
    tags:['Waterfront Lot','Upgraded Finishes'],
  },
  {
    name:'The Meridian — Lot 22',
    community:'Maplewood Reserve',
    city:'Dallas, TX',
    status:'Move-In Ready',
    statusClass:'badge-green',
    price:'$524,900',
    beds:3, baths:2.5, sqft:2400, garage:2,
    img:'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    tags:['Backs to Greenbelt','Solar Ready'],
  },
  {
    name:'The Harrington — Lot 31',
    community:'Riverview Heights',
    city:'Houston, TX',
    status:'Hot Home',
    statusClass:'badge-red',
    price:'$598,000',
    beds:4, baths:3, sqft:3600, garage:2,
    img:'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80',
    tags:['Corner Lot','Extended Patio'],
  },
  {
    name:'The Laurel — Lot 4',
    community:'Cedar Glen',
    city:'San Antonio, TX',
    status:'Move-In Ready',
    statusClass:'badge-green',
    price:'$467,900',
    beds:3, baths:2, sqft:1980, garage:2,
    img:'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80',
    tags:['1-Story','Low HOA'],
  },
  {
    name:'The Summit — Lot 9',
    community:'Pinnacle Ridge',
    city:'Frisco, TX',
    status:'Hot Home',
    statusClass:'badge-red',
    price:'$978,000',
    beds:5, baths:4.5, sqft:4800, garage:3,
    img:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    tags:['Cul-de-Sac','Pool Yard','Premium Lot'],
  },
];

export default function AvailableHomesPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="inner">
          <span className="eyebrow" style={{ color:'var(--gold)' }}>Available Now &amp; Coming Soon</span>
          <h1 style={{ fontFamily:'var(--font-playfair, Georgia, serif)' }}>Hot Homes</h1>
          <div className="gold-divider" style={{ margin:'1rem auto 1.5rem' }} />
          <p>Move-in ready and nearly complete homes across our Texas communities — priced to move quickly. Schedule a showing before they&apos;re gone.</p>
        </div>
      </section>

      {/* Status Legend */}
      <div style={{ background:'#fff', borderBottom:'1px solid #eee', padding:'1rem 2rem' }}>
        <div style={{ maxWidth:1320, margin:'0 auto', display:'flex', gap:'1.5rem', alignItems:'center', flexWrap:'wrap' }}>
          <span style={{ fontSize:13, fontWeight:600, color:'var(--text-heading)' }}>Status Key:</span>
          <span className="badge badge-green">Move-In Ready</span>
          <span className="badge badge-red">Hot Home <span style={{ fontSize:14 }}>🔥</span></span>
          <span className="badge badge-amber">Under Contract</span>
          <span className="badge badge-gold">Coming Soon</span>
        </div>
      </div>

      <section className="section-lg">
        <div className="container">
          <div className="filter-row">
            {['All Regions','Austin','Dallas','Houston','San Antonio','Frisco'].map((f,i) => (
              <span key={f} className={`filter-pill${i===0?' active':''}`} style={{ cursor:'default' }}>{f}</span>
            ))}
          </div>

          <div className="grid-3" style={{ gap:'2rem' }}>
            {homes.map(h => (
              <div key={h.name} className="card">
                <div className="img-zoom-wrap" style={{ height:240 }}>
                  <img src={h.img} alt={h.name} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                  <div style={{ position:'absolute', top:14, left:14 }}>
                    <span className={`badge ${h.statusClass}`}>{h.status}</span>
                  </div>
                  <div style={{ position:'absolute', bottom:14, left:14 }}>
                    <span style={{ background:'rgba(0,0,0,0.7)', color:'#f8f8f6', fontSize:18, fontWeight:700, padding:'4px 12px', borderRadius:6 }}>{h.price}</span>
                  </div>
                </div>
                <div style={{ padding:'1.75rem' }}>
                  <p style={{ fontSize:11, color:'var(--gold-dark)', fontWeight:700, textTransform:'uppercase', letterSpacing:1.5, marginBottom:4 }}>{h.community} · {h.city}</p>
                  <h3 style={{ fontFamily:'var(--font-playfair, Georgia, serif)', fontSize:20, marginBottom:'1rem' }}>{h.name}</h3>
                  <div className="spec-box" style={{ marginBottom:'1.25rem' }}>
                    <div><span className="spec-val">{h.beds}</span><span className="spec-lbl">Beds</span></div>
                    <div><span className="spec-val">{h.baths}</span><span className="spec-lbl">Baths</span></div>
                    <div><span className="spec-val">{h.sqft.toLocaleString()}</span><span className="spec-lbl">Sq Ft</span></div>
                    <div><span className="spec-val">{h.garage}</span><span className="spec-lbl">Car Gar.</span></div>
                  </div>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:'1.25rem' }}>
                    {h.tags.map(t => <span key={t} className="badge badge-gray">{t}</span>)}
                  </div>
                  <Link href="/contact" className="btn btn-dark" style={{ width:'100%', textAlign:'center', display:'block' }}>
                    Schedule a Showing
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ textAlign:'center', padding:'5rem 2rem', background:'var(--warm-gray)' }}>
        <span className="eyebrow">Didn&apos;t Find the Right Fit?</span>
        <h2 style={{ fontFamily:'var(--font-playfair, Georgia, serif)', fontSize:'clamp(1.8rem,3vw,2.6rem)', marginBottom:'1rem' }}>
          Build Yours From the Ground Up
        </h2>
        <p style={{ fontSize:16, color:'var(--text-body)', maxWidth:500, margin:'0 auto 2rem', lineHeight:1.8 }}>
          Browse our floor plans and choose a homesite in any of our 12 communities to start your custom build.
        </p>
        <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
          <Link href="/floor-plans" className="btn btn-dark btn-lg">Browse Floor Plans</Link>
          <Link href="/communities" className="btn btn-outline-dark btn-lg">View Communities</Link>
        </div>
      </section>
    </div>
  );
}
