'use client';
import React, { useState } from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: Props) {
  const [active, setActive] = useState<number | null>(null);

  const toggle = (i: number) => setActive(prev => (prev === i ? null : i));

  return (
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
      {items.map((item, i) => (
        <div key={i} className="faq-item">
          <button className="faq-question" onClick={() => toggle(i)}>
            <span style={{ fontSize: 18, fontFamily: 'var(--font-playfair, Georgia, serif)', paddingRight: '1rem' }}>
              {item.question}
            </span>
            <span className="faq-icon" style={{ color: active === i ? 'var(--gold-dark)' : 'var(--charcoal)' }}>
              {active === i ? '−' : '+'}
            </span>
          </button>
          <div className={`faq-answer${active === i ? ' open' : ''}`}>
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
}
