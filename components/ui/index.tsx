// UI: Status badge, price display, image gallery (Next/Image, lazy load)
export function StatusBadge({ status }) {
  const color = {
    available: '#2ecc40',
    pending: '#ffb700',
    sold: '#d32f2f',
    coming_soon: '#888'
  }[status] || '#ccc';
  return <span style={{ background: color, color: '#fff', borderRadius: 6, padding: '4px 12px', marginRight: 8 }}>{status}</span>;
}

export function PriceDisplay({ price, visibility }) {
  if (visibility === 'show') return <span>${price}</span>;
  if (visibility === 'starting_at') return <span>Starting at ${price}</span>;
  if (visibility === 'call') return <span>Call for price</span>;
  if (visibility === 'hidden') return <span>Price hidden</span>;
  return null;
}

import Image from 'next/image';
export function ImageGallery({ images }) {
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      {images.map((img, i) => (
        <Image key={i} src={img} alt={`Gallery ${i}`} width={300} height={200} style={{ borderRadius: 8 }} loading="lazy" />
      ))}
    </div>
  );
}
