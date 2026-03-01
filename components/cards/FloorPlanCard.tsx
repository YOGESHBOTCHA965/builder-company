// Floor plan card: Specs, price visibility, related inventory
import Image from 'next/image';

export default function FloorPlanCard({ floorPlan }) {
  return (
    <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #eee', padding: 24, marginBottom: 24 }}>
      <Image src={floorPlan.heroImage} alt={floorPlan.name} width={600} height={300} style={{ borderRadius: 8 }} />
      <h2 style={{ fontFamily: 'serif', fontSize: 28 }}>{floorPlan.name}</h2>
      <p>{floorPlan.specs && JSON.stringify(floorPlan.specs)}</p>
      <p>{floorPlan.description}</p>
    </div>
  );
}
