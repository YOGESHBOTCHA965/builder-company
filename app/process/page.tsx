import React from 'react';
import Link from 'next/link';
import FAQAccordion from '@/components/ui/FAQAccordion';

const steps = [
  {
    number:'01',
    icon:'🧭',
    title:'Discovery & Vision',
    duration:'1–2 Weeks',
    desc:'Your journey begins with a comprehensive one-on-one session with your Personal Home Advisor. We explore your lifestyle, priorities, budget, and vision — then recommend the right community and floor plan to match.',
    details:['Personal Home Advisor assigned','Community & lot selection','Floor plan recommendation','Initial budget review'],
  },
  {
    number:'02',
    icon:'✏️',
    title:'Design Studio Experience',
    duration:'2–4 Weeks',
    desc:'Step into our 12,000 sq ft Design Studio in Austin and bring your vision to life. Our senior designers guide you through thousands of selections — cabinetry, flooring, fixtures, countertops, and more.',
    details:['Personal designer assigned','Full material selection','3D visualization tools','Design contract executed'],
  },
  {
    number:'03',
    icon:'📋',
    title:'Pre-Construction Planning',
    duration:'3–4 Weeks',
    desc:'Our project management team finalizes your construction drawings, secures permits, and schedules your master trade partners. You receive a detailed construction timeline before a single shovel hits the ground.',
    details:['Final blueprint review','Permit applications filed','Trade partner scheduling','Pre-construction meeting'],
  },
  {
    number:'04',
    icon:'🏗️',
    title:'Construction Begins',
    duration:'6–10 Months',
    desc:'The build is underway. Your dedicated Project Manager oversees every phase — from foundation to framing, mechanical to finishing — and provides weekly digital progress updates directly to your phone.',
    details:['Weekly progress updates','Milestone walkthroughs','Quality control inspections','Change order management'],
  },
  {
    number:'05',
    icon:'🔍',
    title:'Quality Assurance',
    duration:'2–3 Weeks',
    desc:'Before you ever step inside, your home undergoes a thorough internal quality review, a third-party pre-delivery inspection, and a comprehensive New Home Orientation walkthrough — together, with you.',
    details:['Internal QC inspection','Third-party inspection','Punch list completion','New Home Orientation walk'],
  },
  {
    number:'06',
    icon:'🗝️',
    title:'Keys & Beyond',
    duration:'Day 1 + Ongoing',
    desc:'Welcome home. We hand you your keys, activate your smart home systems, and introduce you to your dedicated Warranty Service team. Our relationship doesn\'t end at closing — it begins there.',
    details:['Closing ceremony','Smart home activation','1-Year warranty coverage','Dedicated warranty contact'],
  },
];

const faqs = [
  { question:'How long does the entire build process take?', answer:'From design studio to keys, most Prestige Homes are completed in 9–14 months depending on plan size, complexity, and community. Your Project Manager will provide a detailed timeline specific to your home before construction begins.' },
  { question:'What is included in the standard specification?', answer:'All Prestige Homes include quartz countertops, hardwood flooring in main areas, tile in all wet areas, smart home pre-wire, high-efficiency HVAC, and appliance packages. Our standard spec is where most builders\' upgrade spec ends.' },
  { question:'Can I make changes during construction?', answer:'Yes, within defined milestone windows. Once a phase is framed and closed, structural changes carry a premium. Our Design Studio process is designed to minimize mid-build changes by getting your selections right before we break ground.' },
  { question:'Do you offer financing or preferred lenders?', answer:'We have preferred lending relationships with several Texas-based institutions who offer competitive rates and pre-approval assistance. We can connect you at any point in your journey.' },
  { question:'What warranty do you provide?', answer:'All Prestige Homes come with a 1-year comprehensive workmanship warranty, 2-year systems warranty (HVAC, plumbing, electrical), and 10-year structural warranty — all administered through our in-house Warranty Service team.' },
];

export default function ProcessPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="inner">
          <span className="eyebrow" style={{ color:'var(--gold)' }}>From Vision to Reality</span>
          <h1 style={{ fontFamily:'var(--font-playfair, Georgia, serif)' }}>Our Process</h1>
          <div className="gold-divider" style={{ margin:'1rem auto 1.5rem' }} />
          <p>We&apos;ve refined our homebuilding process over 25 years to be transparent, stress-free, and extraordinary at every milestone.</p>
        </div>
      </section>

      {/* Steps */}
      <section className="section-lg">
        <div className="container">
          <div style={{ display:'flex', flexDirection:'column', gap:'3rem' }}>
            {steps.map((s, i) => (
              <div key={s.number} style={{ display:'grid', gridTemplateColumns:'80px 1fr', gap:'2rem', alignItems:'flex-start', position:'relative' }}>
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div style={{ position:'absolute', left:39, top:80, width:2, height:'calc(100% + 3rem)', background:'linear-gradient(to bottom, var(--gold), transparent)', opacity:0.4 }} />
                )}
                {/* Number circle */}
                <div style={{ width:80, height:80, borderRadius:'50%', background:'var(--charcoal)', border:'2px solid var(--gold)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', flexShrink:0, zIndex:1 }}>
                  <span style={{ fontSize:22 }}>{s.icon}</span>
                  <span style={{ fontSize:11, color:'var(--gold)', fontWeight:700 }}>{s.number}</span>
                </div>
                {/* Content */}
                <div style={{ paddingBottom:'1rem' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:12, flexWrap:'wrap', marginBottom:10 }}>
                    <h3 style={{ fontFamily:'var(--font-playfair, Georgia, serif)', fontSize:22 }}>{s.title}</h3>
                    <span className="badge badge-gold">{s.duration}</span>
                  </div>
                  <p style={{ fontSize:15, lineHeight:1.9, color:'var(--text-body)', marginBottom:'1.25rem', maxWidth:700 }}>{s.desc}</p>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                    {s.details.map(d => (
                      <div key={d} style={{ display:'flex', alignItems:'center', gap:6, fontSize:13, color:'var(--text-body)', background:'var(--warm-gray)', borderRadius:6, padding:'5px 12px' }}>
                        <span style={{ color:'var(--gold-dark)', fontSize:10, fontWeight:900 }}>✓</span>
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-lg" style={{ background:'var(--warm-gray)' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'3.5rem' }}>
            <span className="eyebrow">Got Questions?</span>
            <h2 style={{ fontFamily:'var(--font-playfair, Georgia, serif)', fontSize:'clamp(2rem,3.5vw,2.8rem)' }}>
              Common Process Questions
            </h2>
            <div className="gold-divider" />
          </div>
          <div style={{ maxWidth:800, margin:'0 auto' }}>
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign:'center', padding:'5rem 2rem', background:'var(--charcoal)' }}>
        <span className="eyebrow" style={{ color:'var(--gold)' }}>Ready to Begin?</span>
        <h2 style={{ fontFamily:'var(--font-playfair, Georgia, serif)', fontSize:'clamp(1.8rem,3vw,2.6rem)', color:'#f8f8f6', marginBottom:'1rem' }}>
          Step One Starts With a Conversation.
        </h2>
        <p style={{ fontSize:16, color:'#bbb', maxWidth:480, margin:'0 auto 2rem', lineHeight:1.8 }}>
          No pressure. No obligation. Just an expert ear and an honest conversation about what&apos;s possible.
        </p>
        <Link href="/contact" className="btn btn-gold btn-lg">Start Your Journey →</Link>
      </section>
    </div>
  );
}
