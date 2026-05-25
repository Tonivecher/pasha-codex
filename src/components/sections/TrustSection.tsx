import { trustItems } from "../../data/siteContent";
import { SectionReveal } from "../ui/SectionReveal";

export function TrustSection() {
  return (
    <section className="section-rule py-[var(--section-space)]">
      <div className="page-grid">
        <SectionReveal className="max-w-5xl">
          <p className="section-kicker">Почему доверяют</p>
          <h2 className="section-title max-w-[15ch]">
            Без громких цифр, только рабочие принципы производства.
          </h2>
        </SectionReveal>
        <div className="mt-14 grid gap-px overflow-hidden border border-[var(--line-soft)] bg-[var(--line-soft)] md:grid-cols-2 xl:grid-cols-4">
          {trustItems.map((item, index) => (
            <SectionReveal
              key={item.title}
              as="article"
              delay={index * 0.05}
              className="bg-[rgba(17,17,15,0.76)] p-5 md:p-7"
            >
              <p className="technical-label">0{index + 1}</p>
              <h3 className="mt-6 font-display text-3xl leading-none tracking-display">
                {item.title}
              </h3>
              <p className="mt-5 text-sm leading-7 text-[var(--stone-muted)]">
                {item.description}
              </p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
