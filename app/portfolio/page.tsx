import React from 'react';
import Link from 'next/link';

const projects = [
  {
    name:'Oakridge Estates Model',
    location:'Austin, TX',
    year:'2024',
    style:'Modern Hill Country',
    sqft:'4,200',
    beds:5, baths:4.5,
    img:'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=85',
    desc:'Our flagship Hill Country model seamlessly blends warm natural stone, white oak flooring, and panoramic steel windows — earning the 2024 Best Model Home award from the Texas Home Builders Association.',
    awards:['2024 Best Model Home — THBA','2024 Design Excellence — Austin AIA'],
  },
  {
    name:'Lakeville Waterfront Estate',
    location:'Lake Travis, TX',
    year:'2023',
    style:'Contemporary Lakefront',
    sqft:'5,800',
    beds:5, baths:5,
    img:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85',
    desc:'A one-of-a-kind lakefront custom build featuring a twelve-foot glass back wall, cantilevered pool deck over the water, and full smart home integration throughout all three levels.',
    awards:['2023 Home of the Year — HBA Dallas'],
  },
  {
    name:'The Harrington Residence',
    location:'Frisco, TX',
    year:'2023',
    style:'Traditional Luxury',
    sqft:'4,800',
    beds:5, baths:4,
    img:'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=85',
    desc:'A traditional showpiece featuring a two-story foyer, hand-painted murals, chef-grade La Cornue kitchen equipment, and a climate-controlled 400-bottle wine cellar.',
    awards:[],
  },
  {
    name:'Cedar Glen Community Center',
    location:'San Antonio, TX',
    year:'2022',
    style:'Texas Heritage',
    sqft:'3,200',
    beds:4, baths:3,
    img:'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=85',
    desc:'Heritage Texas architecture with modern performance. Smooth stucco facades, clay tile roofing, and courtyard-style outdoor living define this San Antonio masterpiece.',
    awards:['2022 Community Development of the Year — NAHB'],
  },
];

export default function PortfolioPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="inner">
          <span className="eyebrow" style={{ color:'var(--gold)' }}>Our Work Speaks</span>
          <h1 style={{ fontFamily:'var(--font-playfair, Georgia, serif)' }}>Portfolio</h1>
          <div className="gold-divider" style={{ margin:'1rem auto 1.5rem' }} />
          <p>500+ homes. 25+ years. A legacy of craftsmanship you can see in every detail.</p>
        </div>
      </section>

      <section className="section-lg">
        <div className="container">
          {projects.map((p, i) => (
            <div key={p.name} style={{ display:'grid', gridTemplateColumns: i%2===0 ? '1fr 1fr':'1fr 1fr', gap:'4rem', alignItems:'center', marginBottom:'5rem' }}>
              <div style={{ order: i%2===0 ? 0 : 1, borderRadius:'var(--radius)', overflow:'hidden', boxShadow:'var(--shadow-lg)' }}>
                <div className="img-zoom-wrap" style={{ height:460 }}>
                  <img src={p.img} alt={p.name} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                </div>
              </div>
              <div style={{ order: i%2===0 ? 1 : 0 }}>
                <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:16 }}>
                  <span className="badge badge-gold">{p.year}</span>
                  <span className="badge badge-gray">{p.style}</span>
                </div>
                <h2 style={{ fontFamily:'var(--font-playfair, Georgia, serif)', fontSize:'clamp(1.6rem,2.5vw,2.2rem)', marginBottom:8 }}>{p.name}</h2>
                <p style={{ fontSize:13, color:'var(--gold-dark)', fontWeight:700, textTransform:'uppercase', letterSpacing:1.5, marginBottom:'1.25rem' }}>{p.location}</p>
                <div className="gold-divider gold-divider-left" style={{ marginBottom:'1.5rem' }} />
                <div className="spec-box" style={{ marginBottom:'1.5rem' }}>
                  <div><span className="spec-val">{p.sqft}</span><span className="spec-lbl">Sq Ft</span></div>
                  <div><span className="spec-val">{p.beds}</span><span className="spec-lbl">Bedrooms</span></div>
                  <div><span className="spec-val">{p.baths}</span><span className="spec-lbl">Bathrooms</span></div>
                </div>
                <p style={{ fontSize:15, lineHeight:1.9, color:'var(--text-body)', marginBottom:'1.25rem' }}>{p.desc}</p>
                {p.awards.length > 0 && (
                  <div style={{ marginBottom:'1.5rem' }}>
                    {p.awards.map(a => (
                      <div key={a} style={{ display:'flex', alignItems:'center', gap:8, marginBottom:6 }}>
                        <span>🏆</span>
                        <span style={{ fontSize:13, color:'var(--gold-dark)', fontWeight:600 }}>{a}</span>
                      </div>
                    ))}
                  </div>
                )}
                <Link href="/contact" className="btn btn-dark">Inquire Now →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ textAlign:'center', padding:'5rem 2rem', background:'var(--charcoal)' }}>
        <span className="eyebrow" style={{ color:'var(--gold)' }}>Start Your Story</span>
        <h2 style={{ fontFamily:'var(--font-playfair, Georgia, serif)', fontSize:'clamp(1.8rem,3vw,2.6rem)', color:'#f8f8f6', marginBottom:'1rem' }}>
          Your Home Belongs in This Portfolio.
        </h2>
        <p style={{ fontSize:16, color:'#bbb', maxWidth:480, margin:'0 auto 2rem', lineHeight:1.8 }}>
          Let&apos;s build something extraordinary together.
        </p>
        <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
          <Link href="/contact" className="btn btn-gold btn-lg">Schedule a Consultation</Link>
          <Link href="/gallery" className="btn btn-outline-gold btn-lg">View Gallery</Link>
        </div>
      </section>
    </div>
  );
}
