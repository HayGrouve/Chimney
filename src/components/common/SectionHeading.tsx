import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl space-y-4",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p
        className={cn(
          "inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-primary uppercase",
          align === "center" && "justify-center",
        )}
      >
        <span className="h-px w-8 bg-primary/60" />
        {eyebrow}
      </p>
      <h2 className="text-3xl leading-[1.1] font-semibold tracking-tight md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
