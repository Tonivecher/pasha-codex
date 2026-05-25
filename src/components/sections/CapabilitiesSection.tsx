import { ArrowUpRight } from "lucide-react";

import { capabilities } from "../../data/siteContent";
import { useSmoothScroll } from "../../hooks/useSmoothScroll";
import { SectionReveal } from "../ui/SectionReveal";

export function CapabilitiesSection() {
  const { scrollTo } = useSmoothScroll();

  return (
    <section id="capabilities" className="section-rule py-[var(--section-space)]">
      <div className="page-grid">
        <SectionReveal className="max-w-5xl">
          <p className="section-kicker">Что производим</p>
          <h2 className="section-title max-w-[15ch]">
            Архитектурная мебель, встроенные системы и изделия вне каталога.
          </h2>
        </SectionReveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((item, index) => (
            <SectionReveal
              key={item.id}
              as="article"
              delay={index * 0.035}
              className="technical-card group flex min-h-[23rem] flex-col p-5 transition duration-300 hover:border-[rgba(197,164,109,0.46)] md:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="technical-label">{String(index + 1).padStart(2, "0")}</p>
                <ArrowUpRight
                  className="h-4 w-4 text-[var(--stone-subtle)] transition group-hover:text-[var(--lime-accent)]"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-8 font-display text-3xl leading-none tracking-display">
                {item.title}
              </h3>
              <p className="mt-5 text-sm leading-7 text-[var(--stone-muted)]">
                {item.description}
              </p>
              <dl className="mt-auto grid gap-4 pt-8">
                <div>
                  <dt className="technical-label">Материалы</dt>
                  <dd className="mt-2 text-sm leading-6 text-[var(--stone-300)]">
                    {item.materials}
                  </dd>
                </div>
                <div>
                  <dt className="technical-label">Задачи</dt>
                  <dd className="mt-2 text-sm leading-6 text-[var(--stone-300)]">
                    {item.tasks}
                  </dd>
                </div>
              </dl>
              <button
                type="button"
                className="section-link mt-7 justify-start"
                onClick={() => scrollTo("#contact", { offset: -72 })}
                data-cursor="interactive"
              >
                Оценить проект
              </button>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
