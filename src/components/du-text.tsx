import type { ReactNode } from "react";

interface DUTextProps {
  kicker?: string;
  title?: ReactNode;
  description?: string;
}

export function DUText({
  kicker,
  title = <>DupersUnited</>,
  description,
}: DUTextProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      {kicker && (
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          {kicker}
        </p>
      )}
      <h1 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="max-w-xl text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
