import type { PropsWithChildren } from "react";

import { AnimatedBackground } from "../AnimatedBackground";

export function PageShell({ children }: PropsWithChildren) {
  return (
    <div className="relative isolate min-h-dvh overflow-x-clip bg-[var(--graphite-950)] text-[var(--stone-100)]">
      <AnimatedBackground />
      {children}
    </div>
  );
}
