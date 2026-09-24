import { useEffect, useRef, type ComponentProps, type CSSProperties } from "react";

type RevealProps = ComponentProps<"div"> & {
  delay?: number;
};

/** Fades its children up into view the first time they scroll into the viewport. */
export function Reveal({ delay = 0, style, ...props }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        node.dataset.reveal = "visible";
        observer.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal=""
      style={{ "--reveal-delay": `${delay}ms`, ...style } as CSSProperties}
      {...props}
    />
  );
}
