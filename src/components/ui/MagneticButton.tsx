import {
  useEffect,
  useRef,
  type ButtonHTMLAttributes,
  type PropsWithChildren,
} from "react";
import { useReducedMotion } from "framer-motion";

import { cn } from "../../lib/utils";

type MagneticButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
>;

export function MagneticButton({
  children,
  className,
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const button = buttonRef.current;

    if (!button || typeof window === "undefined" || shouldReduceMotion) {
      return;
    }

    const finePointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    if (!finePointerQuery.matches) {
      return;
    }

    let frame = 0;
    let x = 0;
    let y = 0;

    const applyTransform = () => {
      button.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      frame = 0;
    };

    const schedule = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(applyTransform);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = button.getBoundingClientRect();
      const offsetX = event.clientX - (bounds.left + bounds.width / 2);
      const offsetY = event.clientY - (bounds.top + bounds.height / 2);

      x = offsetX * 0.14;
      y = offsetY * 0.14;
      schedule();
    };

    const reset = () => {
      x = 0;
      y = 0;
      schedule();
    };

    button.addEventListener("pointermove", handlePointerMove);
    button.addEventListener("pointerleave", reset);
    button.addEventListener("blur", reset);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      button.style.transform = "";
      button.removeEventListener("pointermove", handlePointerMove);
      button.removeEventListener("pointerleave", reset);
      button.removeEventListener("blur", reset);
    };
  }, [shouldReduceMotion]);

  return (
    <button
      ref={buttonRef}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-3 rounded-sm bg-[var(--stone-100)] px-5 py-3 text-[0.68rem] font-bold uppercase tracking-[0.26em] text-[var(--graphite-950)] transition-[transform,background-color,color,border-color] duration-300 ease-editorial hover:bg-[var(--stone-300)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--lime-accent)] disabled:pointer-events-none disabled:opacity-45 md:min-h-[3.25rem] md:px-6",
        className,
      )}
      data-cursor="interactive"
      {...props}
    >
      {children}
    </button>
  );
}
