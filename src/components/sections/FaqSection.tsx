import { ChevronDown } from "lucide-react";

import { faqItems } from "../../data/siteContent";
import { jsonLdItems } from "../../data/seo";
import { SectionReveal } from "../ui/SectionReveal";

export function FaqSection() {
  return (
    <section id="faq" className="section-rule py-[var(--section-space)]">
      {jsonLdItems.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
      <div className="page-grid grid grid-cols-12 gap-y-10 lg:gap-x-10">
        <SectionReveal className="col-span-12 lg:col-span-4">
          <p className="section-kicker">FAQ</p>
          <h2 className="section-title max-w-[8ch]">Коротко о расчете и производстве.</h2>
        </SectionReveal>
        <div className="col-span-12 lg:col-span-7 lg:col-start-6">
          <div className="grid gap-3">
            {faqItems.map((item, index) => (
              <SectionReveal key={item.question} delay={Math.min(index * 0.025, 0.18)}>
                <details className="group technical-card p-5 open:border-[rgba(197,164,109,0.42)] md:p-6">
                  <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-left font-display text-2xl leading-tight tracking-display marker:hidden">
                    <span>{item.question}</span>
                    <ChevronDown
                      className="h-5 w-5 shrink-0 text-[var(--brass-400)] transition group-open:rotate-180"
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="mt-5 text-sm leading-7 text-[var(--stone-muted)] md:text-base md:leading-8">
                    {item.answer}
                  </p>
                </details>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
