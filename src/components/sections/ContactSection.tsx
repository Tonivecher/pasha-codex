import { ArrowUpRight } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";

import {
  drawingsOptions,
  projectTypeOptions,
  studioContacts,
} from "../../data/siteContent";
import { buildMailtoUrl } from "../../lib/utils";
import { MagneticButton } from "../ui/MagneticButton";
import { SectionReveal } from "../ui/SectionReveal";

interface BriefValues {
  name: string;
  contact: string;
  projectType: string;
  productionScope: string;
  city: string;
  deadline: string;
  hasDrawings: string;
  comment: string;
}

type BriefErrors = Partial<Record<keyof BriefValues, string>>;

const initialValues: BriefValues = {
  name: "",
  contact: "",
  projectType: projectTypeOptions[0].value,
  productionScope: "",
  city: "",
  deadline: "",
  hasDrawings: drawingsOptions[0].value,
  comment: "",
};

const optionLabel = (options: { value: string; label: string }[], value: string) =>
  options.find((option) => option.value === value)?.label ?? value;

export function ContactSection() {
  const [values, setValues] = useState<BriefValues>(initialValues);
  const [errors, setErrors] = useState<BriefErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange =
    (field: keyof BriefValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const nextValue = event.target.value;

      setValues((current) => ({
        ...current,
        [field]: nextValue,
      }));

      setErrors((current) => ({
        ...current,
        [field]: undefined,
      }));
      setIsSubmitted(false);
    };

  const validate = () => {
    const nextErrors: BriefErrors = {};

    if (values.name.trim().length < 2) {
      nextErrors.name = "Укажите имя для связи.";
    }

    const contactValue = values.contact.trim();
    if (contactValue.length < 5 || !(/@/.test(contactValue) || /\d{5,}/.test(contactValue))) {
      nextErrors.contact = "Укажите email или телефон.";
    }

    if (values.productionScope.trim().length < 8) {
      nextErrors.productionScope = "Коротко опишите, что нужно произвести.";
    }

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const subject = `Проект на оценку — ${values.name.trim()}`;
    const mailtoUrl = buildMailtoUrl(studioContacts.email, subject, [
      "Новый проектный бриф с сайта «Инженерия формы»",
      "",
      `Имя: ${values.name.trim()}`,
      `Контакт: ${values.contact.trim()}`,
      `Тип проекта: ${optionLabel(projectTypeOptions, values.projectType)}`,
      `Что нужно произвести: ${values.productionScope.trim()}`,
      `Город / объект: ${values.city.trim() || "не указано"}`,
      `Желаемые сроки: ${values.deadline.trim() || "не указано"}`,
      `Чертежи / визуализации: ${optionLabel(drawingsOptions, values.hasDrawings)}`,
      "",
      "Комментарий:",
      values.comment.trim() || "не указан",
    ]);

    window.location.href = mailtoUrl;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="section-rule py-[var(--section-space)]">
      <div className="page-grid grid grid-cols-12 gap-y-12 lg:gap-x-10">
        <SectionReveal className="col-span-12 lg:col-span-5">
          <p className="section-kicker">Проектный бриф</p>
          <h2 className="section-title max-w-[11ch]">
            Расскажите, что нужно произвести.
          </h2>
          <p className="section-copy mt-8 max-w-xl">
            Форма соберет письмо с ключевыми вводными. Чертежи, визуализации и
            ссылки на папку можно добавить уже в почтовом клиенте.
          </p>

          <div className="mt-12 grid gap-6">
            <div className="border-t border-[var(--line-soft)] pt-5">
              <p className="technical-label">email</p>
              <a
                href={`mailto:${studioContacts.email}`}
                className="mt-3 inline-block break-all font-display text-2xl tracking-display text-[var(--stone-100)] transition hover:text-[var(--brass-400)]"
                data-cursor="interactive"
              >
                {studioContacts.email}
              </a>
            </div>
            <div className="border-t border-[var(--line-soft)] pt-5">
              <p className="technical-label">телефон</p>
              <a
                href={`tel:${studioContacts.phone.replace(/[^\d+]/g, "")}`}
                className="mt-3 inline-block font-display text-2xl tracking-display text-[var(--stone-100)] transition hover:text-[var(--brass-400)]"
                data-cursor="interactive"
              >
                {studioContacts.phone}
              </a>
            </div>
            <div className="border-t border-[var(--line-soft)] pt-5">
              <p className="technical-label">география</p>
              <p className="mt-3 text-base leading-7 text-[var(--stone-muted)]">
                {studioContacts.location}
              </p>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal className="col-span-12 lg:col-span-6 lg:col-start-7" delay={0.08}>
          <form
            onSubmit={handleSubmit}
            className="technical-card grid gap-5 p-4 md:grid-cols-2 md:p-6"
            aria-label="Проектный бриф"
          >
            <label className="grid gap-2">
              <span className="technical-label">Имя</span>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange("name")}
                placeholder="Ваше имя"
                autoComplete="name"
                data-cursor="interactive"
              />
              {errors.name ? <span className="field-error">{errors.name}</span> : null}
            </label>

            <label className="grid gap-2">
              <span className="technical-label">Телефон или email</span>
              <input
                type="text"
                name="contact"
                value={values.contact}
                onChange={handleChange("contact")}
                placeholder="+7 или email"
                inputMode="email"
                autoComplete="email"
                data-cursor="interactive"
              />
              {errors.contact ? <span className="field-error">{errors.contact}</span> : null}
            </label>

            <label className="grid gap-2">
              <span className="technical-label">Тип проекта</span>
              <select
                name="projectType"
                value={values.projectType}
                onChange={handleChange("projectType")}
                data-cursor="interactive"
              >
                {projectTypeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2">
              <span className="technical-label">Город / объект</span>
              <input
                type="text"
                name="city"
                value={values.city}
                onChange={handleChange("city")}
                placeholder="Москва, объект, район"
                autoComplete="address-level2"
                data-cursor="interactive"
              />
            </label>

            <label className="grid gap-2 md:col-span-2">
              <span className="technical-label">Что нужно произвести</span>
              <input
                type="text"
                name="productionScope"
                value={values.productionScope}
                onChange={handleChange("productionScope")}
                placeholder="Кухня, панели, ресепшн, booth-модули, витрины…"
                data-cursor="interactive"
              />
              {errors.productionScope ? (
                <span className="field-error">{errors.productionScope}</span>
              ) : null}
            </label>

            <label className="grid gap-2">
              <span className="technical-label">Желаемые сроки</span>
              <input
                type="text"
                name="deadline"
                value={values.deadline}
                onChange={handleChange("deadline")}
                placeholder="Например: монтаж к сентябрю"
                data-cursor="interactive"
              />
            </label>

            <label className="grid gap-2">
              <span className="technical-label">Чертежи / визуализации</span>
              <select
                name="hasDrawings"
                value={values.hasDrawings}
                onChange={handleChange("hasDrawings")}
                data-cursor="interactive"
              >
                {drawingsOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 md:col-span-2">
              <span className="technical-label">Комментарий</span>
              <textarea
                name="comment"
                value={values.comment}
                onChange={handleChange("comment")}
                placeholder="Материалы, ограничения, что важно учесть, ссылка на папку с файлами."
                data-cursor="interactive"
              />
            </label>

            <div className="grid gap-4 md:col-span-2 md:flex md:items-center md:justify-between">
              <MagneticButton type="submit">
                Отправить проект на оценку
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
              </MagneticButton>
              <p className="max-w-md text-sm leading-7 text-[var(--stone-subtle)]">
                Сейчас откроется почтовый клиент с подготовленным брифом.
                Позже сюда можно подключить отправку через API.
              </p>
            </div>

            {isSubmitted ? (
              <p className="md:col-span-2 text-sm leading-7 text-[var(--stone-300)]">
                Почтовый клиент открыт. Если письмо не появилось, напишите
                напрямую на {studioContacts.email}.
              </p>
            ) : null}
          </form>
        </SectionReveal>
      </div>
    </section>
  );
}
