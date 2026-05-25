import { ArrowDownRight, ArrowUpRight, FileText } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { heroImage, heroProofs } from "../../data/siteContent";
import { useSmoothScroll } from "../../hooks/useSmoothScroll";
import { MagneticButton } from "../ui/MagneticButton";
import { SectionReveal } from "../ui/SectionReveal";

export function HeroSection() {
  const mediaRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollTo } = useSmoothScroll();
  const { scrollYProgress } = useScroll({
    target: mediaRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section className="relative isolate flex min-h-[100dvh] items-end overflow-hidden pb-8 pt-28 md:pt-32">
      <div ref={mediaRef} className="absolute inset-0 -z-10 overflow-hidden">
        <motion.img
          src={heroImage}
          alt="Архитектурная мебельная система в общественном интерьере"
          className="h-full w-full object-cover object-center image-monochrome"
          fetchPriority="high"
          decoding="sync"
          width="1600"
          height="1100"
          initial={
            shouldReduceMotion
              ? { opacity: 0.92 }
              : { opacity: 0, clipPath: "inset(18% 18% 18% 18%)" }
          }
          animate={{ opacity: 0.92, clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={shouldReduceMotion ? undefined : { y, scale }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,7,6,0.88)_0%,rgba(7,7,6,0.45)_48%,rgba(7,7,6,0.78)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,6,0.12)_0%,rgba(7,7,6,0.52)_54%,var(--graphite-950)_100%)]" />
      </div>

      <div aria-hidden="true" className="absolute inset-x-4 top-28 hidden border-t border-[var(--line-soft)] md:block" />
      <div aria-hidden="true" className="absolute right-6 top-32 hidden text-[0.62rem] uppercase tracking-[0.3em] text-[var(--stone-subtle)] md:block">
        x: 55.7558 / y: 37.6173
      </div>

      <div className="page-grid relative z-10 grid min-h-[calc(100dvh-8rem)] grid-cols-12 content-end gap-x-6 gap-y-10">
        <SectionReveal className="col-span-12 lg:col-span-8 xl:col-span-7">
          <p className="section-kicker text-[var(--brass-400)]">
            Architectural furniture production
          </p>
          <h1 className="mt-5 max-w-[12ch] overflow-wrap-anywhere font-display text-[clamp(2.65rem,1.55rem+5.8vw,8.6rem)] leading-[0.96] tracking-display">
            Мебель на заказ, которая встает в интерьер как архитектура
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-[1.62] text-[var(--stone-muted)] md:text-[1.45rem]">
            Производим встроенные системы, кухни, панели, стойки, витрины и
            мебель для HoReCa и retail — с инженерной проработкой, понятной
            сметой и монтажом на объекте.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <MagneticButton
              type="button"
              onClick={() => scrollTo("#contact", { offset: -72 })}
            >
              Обсудить проект
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
            </MagneticButton>
            <button
              type="button"
              onClick={() => scrollTo("#projects", { offset: -72 })}
              className="section-link"
              data-cursor="interactive"
            >
              Смотреть объекты
              <ArrowDownRight className="h-4 w-4" strokeWidth={1.8} />
            </button>
            <button
              type="button"
              onClick={() => scrollTo("#contact", { offset: -72 })}
              className="section-link text-[var(--brass-400)]"
              data-cursor="interactive"
            >
              <FileText className="h-4 w-4" strokeWidth={1.8} />
              Отправить чертежи
            </button>
          </div>
        </SectionReveal>

        <SectionReveal
          className="col-span-12 self-end lg:col-span-4 lg:col-start-9"
          delay={0.1}
          y={24}
        >
          <div className="technical-card grid gap-5 p-4 sm:grid-cols-2 lg:grid-cols-1 lg:p-5">
            {heroProofs.map((proof, index) => (
              <div
                key={proof.title}
                className="border-t border-[var(--line-soft)] pt-4 first:border-t-0 first:pt-0 sm:first:border-t sm:first:pt-4 lg:first:border-t-0 lg:first:pt-0"
              >
                <p className="technical-label">0{index + 1}</p>
                <h2 className="mt-2 font-display text-xl leading-[1.08] tracking-display text-[var(--stone-100)]">
                  {proof.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[var(--stone-muted)]">
                  {proof.text}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
