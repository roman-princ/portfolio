"use client";

interface TechMarqueeProps {
  items: string[];
  reverse?: boolean;
}

export default function TechMarquee({ items, reverse = false }: TechMarqueeProps) {
  const row = [...items, ...items];

  return (
    <div
      aria-hidden
      className="relative z-10 overflow-hidden border-y border-white/[0.07] bg-white/[0.02] backdrop-blur-sm py-4 select-none"
    >
      <div
        className={`marquee-track flex items-center gap-10 whitespace-nowrap ${
          reverse ? "marquee-reverse" : ""
        }`}
      >
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-display text-lg md:text-2xl font-bold uppercase tracking-[0.2em] text-white/30"
          >
            {item}
            <span className="text-fuchsia-400/60 text-base">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
