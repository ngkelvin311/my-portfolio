"use client";

export default function Marquee({ text }: { text: string }) {
  // Repeat the text enough times to fill the screen seamlessly
  const repeated = Array(6).fill(text);

  return (
    <div
  className="w-full overflow-hidden"
  style={{ background: "rgb(var(--text))" }}
>
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "marquee 12s linear infinite" }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="type-tagline shrink-0 px-8"
            style={{
  color: "rgb(var(--bg))",
  fontSize: "0.75rem",
  lineHeight: "2.5rem",
}}
          >
            {item}
            <span className="mx-6 opacity-40">·</span>
          </span>
        ))}
      </div>

      <style>{`
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
      `}</style>
    </div>
  );
}
