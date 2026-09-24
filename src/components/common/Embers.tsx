import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

// Deterministic pseudo-random so the sparks are stable between renders.
function seeded(index: number, salt: number) {
  const x = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

const sparks = Array.from({ length: 28 }, (_, i) => ({
  left: `${seeded(i, 1) * 100}%`,
  size: 2 + seeded(i, 2) * 4,
  duration: `${7 + seeded(i, 3) * 9}s`,
  delay: `${-seeded(i, 4) * 16}s`,
  drift: `${(seeded(i, 5) - 0.5) * 160}px`,
}));

/** Glowing sparks drifting upward, like embers from a chimney. */
export function Embers({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {sparks.map((spark, i) => (
        <span
          key={i}
          className="absolute -bottom-4 animate-rise rounded-full bg-flame"
          style={
            {
              left: spark.left,
              width: spark.size,
              height: spark.size,
              animationDelay: spark.delay,
              "--rise-duration": spark.duration,
              "--drift": spark.drift,
              boxShadow: `0 0 ${spark.size * 3}px ${spark.size}px oklch(0.74 0.17 55 / 0.6)`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
