import { processSteps } from "../../data/siteContent";
import { SectionReveal } from "../ui/SectionReveal";

export function ProcessSection() {
  return (
    <section id="process" className="section-rule py-[var(--section-space)]">
      <div className="page-grid grid grid-cols-12 gap-y-10 lg:gap-x-10">
        <SectionReveal className="col-span-12 lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <p className="section-kicker">Процесс</p>
          <h2 className="section-title max-w-[10ch]">
            От идеи или чертежей до монтажа на объекте.
          </h2>
          <p className="section-copy mt-8 max-w-lg">
            Мы подключаемся на этапе идеи, дизайн-проекта или готовой рабочей
            документации. Проверяем конструктив, согласуем материалы и ведем
            изделие до установки.
          </p>
          <div
            aria-hidden="true"
            className="mt-10 h-1 overflow-hidden rounded-full bg-[var(--line-soft)]"
          >
            <div className="h-full w-2/3 bg-[var(--lime-accent)]" />
          </div>
        </SectionReveal>

        <div className="col-span-12 lg:col-span-7 lg:col-start-6">
          <ol className="relative grid gap-4 before:absolute before:left-4 before:top-0 before:hidden before:h-full before:w-px before:bg-[var(--line-soft)] md:before:block">
            {processSteps.map((step, index) => (
              <SectionReveal
                key={step.id}
                as="article"
                delay={Math.min(index * 0.035, 0.2)}
                className="technical-card relative p-5 md:ml-12 md:p-7"
              >
                <span className="absolute -left-[3.25rem] top-7 hidden h-8 w-8 place-items-center rounded-full border border-[var(--line-soft)] bg-[var(--graphite-950)] text-[0.62rem] font-bold text-[var(--lime-accent)] md:grid">
                  {index + 1}
                </span>
                <p className="technical-label">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 font-display text-3xl leading-none tracking-display">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--stone-muted)] md:text-base md:leading-8">
                  {step.description}
                </p>
              </SectionReveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
