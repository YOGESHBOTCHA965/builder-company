// Portfolio card: Large image, title, subtle accent, fade-in motion
import Image from 'next/image';

export default function PortfolioCard({ project }) {
  return (
    <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #eee', padding: 24, marginBottom: 24 }}>
      <Image src={project.images[0]} alt={project.title} width={600} height={300} style={{ borderRadius: 8 }} />
      <h2 style={{ fontFamily: 'serif', fontSize: 28 }}>{project.title}</h2>
      <p>{project.description}</p>
    </div>
  );
}
