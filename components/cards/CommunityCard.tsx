// Community card: Hero image, name, location, minimal design
import Image from 'next/image';

export default function CommunityCard({ community }) {
  return (
    <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #eee', padding: 24, marginBottom: 24 }}>
      <Image src={community.heroImage} alt={community.name} width={600} height={300} style={{ borderRadius: 8 }} />
      <h2 style={{ fontFamily: 'serif', fontSize: 28 }}>{community.name}</h2>
      <p style={{ color: '#666' }}>{community.location}</p>
      <p>{community.description}</p>
    </div>
  );
}
