"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

const STATS = [
  { value: 240, suffix: "+", label: "Properties placed" },
  { value: 11, suffix: " yrs", label: "In Port Harcourt real estate" },
  { value: 98, suffix: "%", label: "Clients who refer a friend" },
  { value: 14, suffix: " days", label: "Average time to close" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      // ease-out cubic, feels less mechanical than linear
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="border-y border-ink/10 bg-cream-dim">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-6 py-16 md:grid-cols-4 md:px-10">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-center md:text-left"
          >
            <div className="text-4xl font-extrabold md:text-5xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-2 text-sm text-ink/60">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}