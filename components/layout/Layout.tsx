// Luxury layout: Off-white base, deep charcoal text, serif headlines, clean sans body, generous spacing
import React from 'react';

export default function Layout({ children }) {
  return (
    <div style={{ background: '#f8f8f6', color: '#232323', fontFamily: 'serif', minHeight: '100vh' }}>
      <main style={{ margin: '0 auto', maxWidth: 1400, padding: '2rem' }}>
        {children}
      </main>
    </div>
  );
}
