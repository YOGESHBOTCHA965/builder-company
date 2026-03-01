'use client';
import React, { useState } from 'react';

interface Option { label: string; value: string; }
interface Props {
  options: Option[];
  onChange: (val: string) => void;
  defaultValue?: string;
}

export default function FilterBar({ options, onChange, defaultValue = 'all' }: Props) {
  const [active, setActive] = useState(defaultValue);

  const handle = (val: string) => {
    setActive(val);
    onChange(val);
  };

  return (
    <div className="filter-row">
      {options.map(o => (
        <button
          key={o.value}
          className={`filter-pill${active === o.value ? ' active' : ''}`}
          onClick={() => handle(o.value)}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
