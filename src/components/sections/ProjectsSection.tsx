import { useMemo, useState } from "react";

import { projectFilters, projects } from "../../data/siteContent";
import type { ProjectCategory, ProjectItem } from "../../types/site";
import { SectionReveal } from "../ui/SectionReveal";

const spanClassMap: Record<ProjectItem["span"], string> = {
  feature: "md:col-span-2 xl:col-span-7 xl:row-span-4",
  portrait: "xl:col-span-5 xl:row-span-4",
  landscape: "xl:col-span-5 xl:row-span-3",
  square: "xl:col-span-4 xl:row-span-3",
};

const aspectClassMap: Record<ProjectItem["span"], string> = {
  feature: "aspect-[5/4] xl:aspect-auto",
  portrait: "aspect-[3/4] xl:aspect-auto",
  landscape: "aspect-[16/10] xl:aspect-auto",
  square: "aspect-square xl:aspect-auto",
};

const minHeightMap: Record<ProjectItem["span"], string> = {
  feature: "min-h-[29rem]",
  portrait: "min-h-[29rem]",
  landscape: "min-h-[22rem]",
  square: "min-h-[22rem]",
};

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectCategory>("all");
  const visibleProjects = useMemo(
    () =>
      activeFilter === "all"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  return (
    <section id="projects" className="section-rule py-[var(--section-space)]">
      <div className="page-grid">
        <div className="grid grid-cols-12 gap-y-8">
          <SectionReveal className="col-span-12 lg:col-span-6">
            <p className="section-kicker">Избранные объекты</p>
            <h2 className="section-title max-w-[12ch]">
              Показываем не картинки, а задачи и решения.
            </h2>
          </SectionReveal>
          <SectionReveal className="col-span-12 lg:col-span-5 lg:col-start-8 lg:self-end">
            <p className="section-copy max-w-xl">
              В каждом проекте важен не только вид. Важно, что изделие должно
              выдержать, как оно монтируется и какую роль играет в пространстве.
            </p>
          </SectionReveal>
        </div>

        <div className="mt-10 flex gap-2 overflow-x-auto pb-2" aria-label="Фильтры объектов">
          {projectFilters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              aria-pressed={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className="min-h-11 shrink-0 rounded-sm border border-[var(--line-soft)] px-4 text-[0.66rem] font-bold uppercase tracking-[0.22em] text-[var(--stone-muted)] transition hover:border-[var(--stone-300)] hover:text-[var(--stone-100)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--lime-accent)] aria-pressed:border-[var(--lime-accent)] aria-pressed:text-[var(--lime-accent)]"
              data-cursor="interactive"
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-12 xl:auto-rows-[7.25rem]">
          {visibleProjects.map((project, index) => (
            <SectionReveal
              as="article"
              key={project.id}
              delay={Math.min(index * 0.05, 0.22)}
              className={`group relative isolate overflow-hidden rounded-sm ${spanClassMap[project.span]}`}
            >
              <div
                className={`media-surface relative h-full w-full ${aspectClassMap[project.span]} ${minHeightMap[project.span]}`}
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  width="1200"
                  height="900"
                  loading="lazy"
                  decoding="async"
                  className="image-monochrome h-full w-full object-cover transition duration-700 ease-editorial group-hover:scale-[1.05] group-hover:brightness-[0.92]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,6,0.08)_0%,rgba(7,7,6,0.18)_34%,rgba(7,7,6,0.88)_100%)]" />
                <div className="absolute left-4 top-4 rounded-sm border border-[var(--line-soft)] bg-[rgba(7,7,6,0.62)] px-3 py-2 text-[0.58rem] font-bold uppercase tracking-[0.22em] text-[var(--stone-300)] backdrop-blur">
                  {project.type}
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                  <h3 className="max-w-[15ch] font-display text-[clamp(1.75rem,1.1rem+2.4vw,3.2rem)] leading-[1.04] tracking-display">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--stone-muted)] md:text-base md:leading-8">
                    {project.result}
                  </p>
                </div>

                <div className="absolute inset-x-3 bottom-3 top-auto translate-y-0 rounded-sm border border-[var(--line-soft)] bg-[rgba(7,7,6,0.86)] p-4 opacity-100 backdrop-blur-md transition duration-300 md:inset-auto md:right-4 md:top-4 md:w-80 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  <dl className="grid gap-3 text-xs leading-5">
                    <div>
                      <dt className="technical-label">Задача</dt>
                      <dd className="mt-1 text-[var(--stone-muted)]">{project.task}</dd>
                    </div>
                    <div>
                      <dt className="technical-label">Материалы</dt>
                      <dd className="mt-1 text-[var(--stone-muted)]">{project.materials}</dd>
                    </div>
                    <div>
                      <dt className="technical-label">Scope</dt>
                      <dd className="mt-1 text-[var(--stone-muted)]">{project.scope}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
