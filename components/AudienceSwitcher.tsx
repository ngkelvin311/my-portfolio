"use client";

import { useState } from "react";

const audiences = [
  {
  label: "For anyone",
  text: "I build products people actually use and systems teams can rely on. Whatever is needed: research, design, ops, delivery, I'm here to deliver results.",
},
  {
    label: "Recruiters",
    text: "With experience across tech and built environment design, currently a Senior Product Designer at Fitness Passport. I have shipped systems, delivered results, led research, and mentored teams. Always open to the right opportunity.",
  },
  {
    label: "Design Directors",
    text: "I build the foundations that enable teams to move fast without breaking things. Systems thinking, research operations, and a high bar for craft.",
  },
  {
    label: "Product Designers",
    text: "Systems thinker, research practitioner, and someone who cares about the work that makes other designers' work better.",
  },
  {
    label: "Product Managers",
    text: "Impact is the goal. Partnering with you on strategy, research, delivery, we'll get the job done and deliver results.",
  },
  {
    label: "Engineers",
    text: "I build design systems engineers can actually use. Token-based, documented, and built collaboratively with implementation in mind from day one.",
  },
];

export default function AudienceSwitcher() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-6">
      {/* Tabs */}
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {audiences.map((audience, i) => (
          <button
            key={audience.label}
            onClick={() => setActive(i)}
            className="type-meta transition-opacity"
            style={{
              opacity: active === i ? 1 : 0.35,
              fontWeight: active === i ? 600 : 400,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              color: "rgb(var(--foreground))",
            }}
          >
            {audience.label}
          </button>
        ))}
      </div>

     {/* Text */}
<div className="type-display-sm" style={{ fontSize: "2.5rem", lineHeight: "1.75", fontWeight: 400 }}>  <p
    key={active}
    style={{
      animation: "fadeIn 0.25s ease",
    }}
  >
    {audiences[active].text}
  </p>
</div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
