import { materials } from "../../data/siteContent";
import { SectionReveal } from "../ui/SectionReveal";

export function MaterialsSection() {
  return (
    <section id="materials" className="section-rule py-[var(--section-space)]">
      <div className="page-grid">
        <div className="grid grid-cols-12 gap-y-8">
          <SectionReveal className="col-span-12 lg:col-span-5">
            <p className="section-kicker">Материалы и узлы</p>
            <h2 className="section-title max-w-[12ch]">
              Дорогой вид начинается с узла, а не с лака.
            </h2>
          </SectionReveal>
          <SectionReveal className="col-span-12 lg:col-span-5 lg:col-start-8 lg:self-end">
            <p className="section-copy max-w-xl">
              Один и тот же шпон, металл или камень может выглядеть по-разному.
              Поэтому мы смотрим на стык, кромку, свет, нагрузку и то, как
              поверхность будет стареть.
            </p>
          </SectionReveal>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {materials.map((material, index) => (
            <SectionReveal
              key={material.id}
              as="article"
              delay={index * 0.07}
              className="technical-card overflow-hidden"
            >
              <div className="media-surface aspect-[4/3]">
                <img
                  src={material.image}
                  alt={material.alt}
                  width="900"
                  height="675"
                  loading="lazy"
                  decoding="async"
                  className="image-monochrome h-full w-full object-cover"
                />
              </div>
              <div className="p-5 md:p-7">
                <p className="technical-label text-[var(--brass-400)]">
                  {material.eyebrow}
                </p>
                <h3 className="mt-5 font-display text-3xl leading-[1.08] tracking-display">
                  {material.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-[var(--stone-muted)]">
                  {material.description}
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {material.checks.map((check) => (
                    <span
                      key={check}
                      className="rounded-sm border border-[var(--line-soft)] px-3 py-2 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[var(--stone-300)]"
                    >
                      {check}
                    </span>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
