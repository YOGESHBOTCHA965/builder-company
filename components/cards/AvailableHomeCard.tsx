// Available home card: Status badge, price logic, specs, luxury presentation
import Image from 'next/image';
import { StatusBadge, PriceDisplay } from '../ui';

export default function AvailableHomeCard({ home }) {
  return (
    <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #eee', padding: 24, marginBottom: 24 }}>
      <Image src={home.heroImage} alt={home.address} width={600} height={300} style={{ borderRadius: 8 }} />
      <h2 style={{ fontFamily: 'serif', fontSize: 28 }}>{home.address}</h2>
      <StatusBadge status={home.status} />
      <PriceDisplay price={home.price} visibility={home.price_visibility} />
      <p>Completion: {home.completion_date}</p>
    </div>
  );
}
