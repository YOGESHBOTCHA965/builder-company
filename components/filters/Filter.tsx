// Filter component: Clean filtering for floor plans and available homes
export default function Filter({ options, onChange }) {
  return (
    <div style={{ marginBottom: 24 }}>
      {options.map(opt => (
        <button key={opt.value} onClick={() => onChange(opt.value)} style={{ marginRight: 8 }}>{opt.label}</button>
      ))}
    </div>
  );
}
