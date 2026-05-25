import { seoKeywords } from "../../data/siteContent";
import { SectionReveal } from "../ui/SectionReveal";

export function SeoTextSection() {
  return (
    <section className="section-rule py-[var(--section-space)]">
      <div className="page-grid grid grid-cols-12 gap-y-8">
        <SectionReveal className="col-span-12 lg:col-span-5">
          <p className="section-kicker">Москва / производство</p>
          <h2 className="section-title max-w-[13ch]">
            Мебель на заказ для архитектурных интерьеров в Москве
          </h2>
        </SectionReveal>
        <SectionReveal className="col-span-12 lg:col-span-6 lg:col-start-7">
          <p className="section-copy">
            «Инженерия формы» производит мебель на заказ для частных и
            коммерческих интерьеров: встроенные системы, кухни, гардеробные,
            стеновые панели, стойки ресепшн, витрины, мебель для ресторанов,
            кафе, отелей, шоурумов и офисов. Мы работаем с архитекторами,
            дизайнерами и владельцами объектов, которым важны точность
            исполнения, спокойная эстетика, надежный конструктив и аккуратный
            монтаж.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {seoKeywords.map((keyword) => (
              <span
                key={keyword}
                className="rounded-sm border border-[var(--line-soft)] px-3 py-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[var(--stone-subtle)]"
              >
                {keyword}
              </span>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
