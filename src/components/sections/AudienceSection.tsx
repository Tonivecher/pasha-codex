import { audienceSegments } from "../../data/siteContent";
import { SectionReveal } from "../ui/SectionReveal";

export function AudienceSection() {
  return (
    <section id="audience" className="section-rule py-[var(--section-space)]">
      <div className="page-grid">
        <div className="grid grid-cols-12 gap-y-8">
          <SectionReveal className="col-span-12 lg:col-span-6">
            <p className="section-kicker">Для кого</p>
            <h2 className="section-title">Производство, которое входит в проектную логику.</h2>
          </SectionReveal>
          <SectionReveal className="col-span-12 lg:col-span-5 lg:col-start-8 lg:self-end">
            <p className="section-copy max-w-xl">
              Мы подключаемся к проектам, где важны пропорция, материал,
              инженерная дисциплина, точный монтаж и спокойная коммуникация
              между автором интерьера, заказчиком и производством.
            </p>
          </SectionReveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-[var(--line-soft)] bg-[var(--line-soft)] md:grid-cols-2 xl:grid-cols-4">
          {audienceSegments.map((segment, index) => (
            <SectionReveal
              key={segment.id}
              as="article"
              delay={index * 0.04}
              className="scroll-fade bg-[rgba(17,17,15,0.78)] p-5 md:p-7"
            >
              <p className="technical-label">0{index + 1}</p>
              <h3 className="mt-6 font-display text-3xl leading-none tracking-display text-[var(--stone-100)]">
                {segment.title}
              </h3>
              <p className="mt-5 text-sm leading-7 text-[var(--stone-muted)]">
                {segment.description}
              </p>
              <ul className="mt-7 grid gap-3">
                {segment.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-6 text-[var(--stone-300)]"
                  >
                    <span className="mt-2 h-px w-5 shrink-0 bg-[var(--brass-400)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
