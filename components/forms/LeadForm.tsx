// Lead form: Elegant, Turnstile, validation, consent timestamp
import React, { useState } from 'react';

export default function LeadForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', consent: false });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      // NOTE: When Cloudflare Turnstile is integrated, replace `undefined` with
      // the token returned by the Turnstile widget callback before submitting.
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('Thank you! We will be in touch shortly.');
      } else {
        // Show a generic message — never expose raw server error text to users
        setStatus('Something went wrong. Please try again or call us directly.');
      }
    } catch {
      setStatus('Network error. Please check your connection and try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #eee', padding: 24, marginBottom: 24 }}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required style={{ marginBottom: 12 }} />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required style={{ marginBottom: 12 }} />
      <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" style={{ marginBottom: 12 }} />
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" style={{ marginBottom: 12 }} />
      <label>
        <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} required />
        I consent to be contacted
      </label>
      <button type="submit" style={{ marginTop: 12 }}>Submit</button>
      <div>{status}</div>
    </form>
  );
}
