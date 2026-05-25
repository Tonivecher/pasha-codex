import { motion, useReducedMotion } from "framer-motion";
import type { PropsWithChildren } from "react";

import { cn } from "../../lib/utils";

interface SectionRevealProps extends PropsWithChildren {
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "article";
}

export function SectionReveal({
  children,
  className,
  delay = 0,
  y = 34,
  as = "div",
}: SectionRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      className={cn(className)}
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
