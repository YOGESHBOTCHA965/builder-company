import React from 'react';
import Link from 'next/link';

const categories = [
  'All', 'Exteriors', 'Kitchens', 'Living Spaces', 'Primary Suites', 'Outdoor Living', 'Communities',
];

const images = [
  { src:'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=85', caption:'Oakridge Estates — Austin, TX',          category:'Exteriors',     span:true  },
  { src:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',  caption:'The Ashford — Gourmet Kitchen',          category:'Kitchens',      span:false },
  { src:'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80',  caption:'The Worthington — Primary Suite',        category:'Primary Suites',span:false },
  { src:'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80',  caption:'Maplewood Reserve — Exterior',           category:'Exteriors',     span:false },
  { src:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',  caption:'Lakeville Shores — Waterfront Lot',      category:'Communities',   span:false },
  { src:'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80',  caption:'Riverview Heights — Outdoor Kitchen',    category:'Outdoor Living',span:true  },
  { src:'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80',  caption:'The Meridian — Great Room',              category:'Living Spaces', span:false },
  { src:'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',  caption:'The Harrington — Rear Elevation',        category:'Exteriors',     span:false },
  { src:'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&q=80',  caption:'The Summit at Westlake — Master Bath',   category:'Primary Suites',span:true  },
  { src:'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80',  caption:'The Laurel — Chefs Kitchen',             category:'Kitchens',      span:false },
  { src:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',  caption:'Cedar Glen — Community Pool',            category:'Communities',   span:false },
  { src:'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80',  caption:'The Bellaire — Covered Patio',           category:'Outdoor Living',span:false },
  { src:'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80',  caption:'The Ashford — Living Room',              category:'Living Spaces', span:false },
  { src:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80',  caption:'Oakridge Estates — Community Entry',     category:'Communities',   span:true  },
  { src:'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',  caption:'The Bellair — Primary Bedroom',          category:'Primary Suites',span:false },
  { src:'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80',  caption:'The Worthington — Outdoor Fire Lounge',  category:'Outdoor Living',span:false },
];

export default function GalleryPage() {
  return (
    <div>

      {/* Page Hero */}
      <section className="page-hero">
        <div className="inner">
          <span className="eyebrow" style={{ color:'var(--gold)' }}>Our Work</span>
          <h1 style={{ fontFamily:'var(--font-playfair, Georgia, serif)', marginBottom:'1rem' }}>
            Building Memories
          </h1>
          <div className="gold-divider" style={{ margin:'1rem auto 1.5rem' }} />
          <p>
            Where quality and craftsmanship meet timeless design. Browse a curated selection of completed homes,
            interiors, and communities from our portfolio.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-lg">
        <div className="container">
          {/* Filter tabs - static display, functional version would use client component */}
          <div className="filter-row">
            {categories.map((c,i) => (
              <span key={c} className={`filter-pill${i === 0 ? ' active':''}`} style={{ cursor:'default' }}>{c}</span>
            ))}
          </div>

          {/* Masonry-style grid */}
          <div className="gallery-grid">
            {images.map((img, i) => (
              <div key={i} className={`gallery-item${img.span ? ' span-2':''}`}>
                <img src={img.src} alt={img.caption} />
                <div className="gallery-overlay">
                  <div>
                    <p style={{ margin:0, fontWeight:600, fontSize:14 }}>{img.caption}</p>
                    <p style={{ margin:'3px 0 0', fontSize:11, opacity:0.8, textTransform:'uppercase', letterSpacing:1 }}>{img.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div style={{ textAlign:'center', marginTop:'3rem' }}>
            <Link href="/portfolio" className="btn btn-dark btn-lg">
              View Full Portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-lg" style={{ background:'var(--warm-gray)' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'center' }}>
            <div>
              <span className="eyebrow">The Craft in Action</span>
              <h2 style={{ fontFamily:'var(--font-playfair, Georgia, serif)', fontSize:'clamp(1.8rem,3vw,2.6rem)', marginBottom:'1.5rem' }}>
                From Foundation<br />to Forever Home
              </h2>
              <div className="gold-divider gold-divider-left" style={{ marginBottom:'1.75rem' }} />
              <p style={{ fontSize:15, lineHeight:1.9, color:'var(--text-body)', marginBottom:'1.25rem' }}>
                Our craftsmen take enormous pride in the precision and care they bring to every detail. Watch how
                a Prestige Home takes shape — from the moment we break ground to the day we hand you the keys.
              </p>
              <p style={{ fontSize:15, lineHeight:1.9, color:'var(--text-body)', marginBottom:'2rem' }}>
                We invite you to tour our design studio and model homes to experience the quality firsthand.
                No appointment required on Saturdays.
              </p>
              <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
                <Link href="/contact"  className="btn btn-dark">Schedule a Tour</Link>
                <Link href="/process"  className="btn btn-outline-dark">Our Process</Link>
              </div>
            </div>
            <div style={{ borderRadius:'var(--radius)', overflow:'hidden', boxShadow:'var(--shadow-lg)', background:'#000', position:'relative', height:380 }}>
              <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=85" alt="Build process" style={{ width:'100%', height:'100%', objectFit:'cover', opacity:0.85 }} />
              <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
                <div style={{ width:72, height:72, borderRadius:'50%', background:'rgba(201,168,76,0.9)', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 4px 20px rgba(0,0,0,0.3)' }}>
                  <span style={{ fontSize:28, marginLeft:4 }}>▶</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign:'center', padding:'5rem 2rem', background:'var(--charcoal)' }}>
        <span className="eyebrow" style={{ color:'var(--gold)' }}>Love What You See?</span>
        <h2 style={{ fontFamily:'var(--font-playfair, Georgia, serif)', fontSize:'clamp(1.8rem,3vw,2.6rem)', color:'#f8f8f6', marginBottom:'1rem' }}>
          Let&apos;s Build Yours Next.
        </h2>
        <p style={{ fontSize:17, color:'#bbb', maxWidth:480, margin:'0 auto 2rem', lineHeight:1.8 }}>
          Every home in this gallery started as a conversation. Yours can too.
        </p>
        <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
          <Link href="/contact" className="btn btn-gold btn-lg">Get in Touch</Link>
          <Link href="/floor-plans" className="btn btn-outline-gold btn-lg">Browse Floor Plans</Link>
        </div>
      </section>

    </div>
  );
}
