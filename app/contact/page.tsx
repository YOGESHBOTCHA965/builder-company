'use client';

import React, { useState } from 'react';
import FAQAccordion from '@/components/ui/FAQAccordion';

const offices = [
  {
    city:'Austin (HQ)',
    address:'4200 Capital of Texas Hwy, Suite 200\nAustin, TX 78746',
    phone:'(512) 441-8800',
    email:'austin@prestigehomestx.com',
    hours:'Mon–Sat 10am–6pm · Sun 12–5pm',
  },
  {
    city:'Dallas',
    address:'3600 Preston Road, Suite 150\nPlano, TX 75093',
    phone:'(972) 338-2200',
    email:'dallas@prestigehomestx.com',
    hours:'Mon–Sat 10am–6pm · Sun 12–5pm',
  },
  {
    city:'Houston',
    address:'10001 Westheimer Road, Suite 900\nHouston, TX 77042',
    phone:'(713) 662-4400',
    email:'houston@prestigehomestx.com',
    hours:'Mon–Sat 10am–6pm · Sun 12–5pm',
  },
];

const faqs = [
  { question:'How do I schedule a model home tour?',         answer:'Call any of our offices directly or submit the contact form above. Our Home Advisors are available Monday–Saturday 10am–6pm and Sunday 12–5pm. Walk-in visits are also welcome.' },
  { question:'Is there a cost to building with Prestige?',   answer:'There is never a cost to meet with us, tour our communities, or receive a preliminary budget. You invest only when you sign a purchase agreement and design contract.' },
  { question:'Do you build on my own lot?',                  answer:'We primarily build within our curated communities, but we evaluate select custom projects on privately owned lots annually. Contact us to discuss your situation.' },
  { question:'How soon can construction start?',             answer:'Once a purchase and design agreement is executed, permits are typically in hand within 4–6 weeks and construction starts shortly after. We can often accommodate fast-track builds for move-in-ready homes.' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', interest:'', message:'', consent:false });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value, type } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/lead', {
        method:'POST',
        headers:{ 'Content-Type':'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      // still show success for demo
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="inner">
          <span className="eyebrow" style={{ color:'var(--gold)' }}>We&apos;d Love to Hear From You</span>
          <h1 style={{ fontFamily:'var(--font-playfair, Georgia, serif)' }}>Get in Touch</h1>
          <div className="gold-divider" style={{ margin:'1rem auto 1.5rem' }} />
          <p>Reach out to schedule a tour, ask about a community, or simply start the conversation. Our Home Advisors respond within one business hour.</p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section-lg">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:'5rem', alignItems:'flex-start' }}>

            {/* Left: office info */}
            <div>
              <span className="eyebrow">Our Offices</span>
              <h2 style={{ fontFamily:'var(--font-playfair, Georgia, serif)', fontSize:'clamp(1.6rem,2.5vw,2.2rem)', marginBottom:'2rem' }}>
                Find Us in Your City
              </h2>
              <div style={{ display:'flex', flexDirection:'column', gap:'1.5rem' }}>
                {offices.map(o => (
                  <div key={o.city} style={{ background:'var(--warm-gray)', borderRadius:'var(--radius)', padding:'1.5rem', borderLeft:'4px solid var(--gold)' }}>
                    <p style={{ fontFamily:'var(--font-playfair, Georgia, serif)', fontSize:18, fontWeight:600, marginBottom:10 }}>{o.city}</p>
                    <p style={{ fontSize:14, lineHeight:1.7, color:'var(--text-body)', whiteSpace:'pre-line', marginBottom:8 }}>{o.address}</p>
                    <p style={{ fontSize:14, color:'var(--text-body)', marginBottom:4 }}>📞 <a href={`tel:${o.phone}`} style={{ color:'var(--text-body)' }}>{o.phone}</a></p>
                    <p style={{ fontSize:14, color:'var(--text-body)', marginBottom:4 }}>✉️ <a href={`mailto:${o.email}`} style={{ color:'var(--gold-dark)' }}>{o.email}</a></p>
                    <p style={{ fontSize:12, color:'#888', marginTop:6 }}>🕐 {o.hours}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <span className="eyebrow">Contact Form</span>
              <h2 style={{ fontFamily:'var(--font-playfair, Georgia, serif)', fontSize:'clamp(1.6rem,2.5vw,2.2rem)', marginBottom:'2rem' }}>
                Send Us a Message
              </h2>

              {submitted ? (
                <div style={{ background:'#f0fdf4', border:'1px solid #bbf7d0', borderRadius:'var(--radius)', padding:'2.5rem', textAlign:'center' }}>
                  <div style={{ fontSize:48, marginBottom:12 }}>✅</div>
                  <h3 style={{ fontFamily:'var(--font-playfair, Georgia, serif)', fontSize:22, marginBottom:8 }}>Message Received!</h3>
                  <p style={{ fontSize:15, color:'var(--text-body)', lineHeight:1.8 }}>Thank you for reaching out. One of our Personal Home Advisors will contact you within one business hour.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:'1.25rem' }}>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
                    <div>
                      <label style={{ fontSize:13, fontWeight:600, display:'block', marginBottom:6 }}>Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="Jane Smith" style={inputStyle} />
                    </div>
                    <div>
                      <label style={{ fontSize:13, fontWeight:600, display:'block', marginBottom:6 }}>Email Address *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="jane@email.com" style={inputStyle} />
                    </div>
                  </div>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
                    <div>
                      <label style={{ fontSize:13, fontWeight:600, display:'block', marginBottom:6 }}>Phone Number</label>
                      <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="(512) 555-0100" style={inputStyle} />
                    </div>
                    <div>
                      <label style={{ fontSize:13, fontWeight:600, display:'block', marginBottom:6 }}>I&apos;m Interested In</label>
                      <select name="interest" value={form.interest} onChange={handleChange} style={inputStyle}>
                        <option value="">Select one...</option>
                        <option>Schedule a Model Home Tour</option>
                        <option>New Home Construction</option>
                        <option>Available / Move-In Ready Home</option>
                        <option>Community Information</option>
                        <option>Floor Plan Question</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label style={{ fontSize:13, fontWeight:600, display:'block', marginBottom:6 }}>Your Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your dream home, timeline, or any questions you have..." rows={5} style={{ ...inputStyle, resize:'vertical' }} />
                  </div>
                  <div style={{ display:'flex', alignItems:'flex-start', gap:10 }}>
                    <input type="checkbox" name="consent" id="consent" checked={form.consent} onChange={handleChange} required style={{ marginTop:3, flexShrink:0 }} />
                    <label htmlFor="consent" style={{ fontSize:12, color:'#666', lineHeight:1.7 }}>
                      I agree to be contacted by Prestige Homes regarding my inquiry. I understand I can opt out at any time.
                    </label>
                  </div>
                  <button type="submit" disabled={loading} className="btn btn-dark btn-lg" style={{ marginTop:8 }}>
                    {loading ? 'Sending…' : 'Send Message →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-lg" style={{ background:'var(--warm-gray)' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'3.5rem' }}>
            <span className="eyebrow">Quick Answers</span>
            <h2 style={{ fontFamily:'var(--font-playfair, Georgia, serif)', fontSize:'clamp(2rem,3.5vw,2.8rem)' }}>
              Frequently Asked Questions
            </h2>
            <div className="gold-divider" />
          </div>
          <div style={{ maxWidth:800, margin:'0 auto' }}>
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width:'100%',
  padding:'12px 14px',
  borderRadius:8,
  border:'1px solid #d0d0d0',
  fontSize:14,
  background:'#fff',
  color: '#1a1a1a',
  outline:'none',
  fontFamily:'inherit',
  boxSizing:'border-box',
};
