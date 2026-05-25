import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";

import { navItems, studioName } from "../../data/siteContent";
import { useSmoothScroll } from "../../hooks/useSmoothScroll";
import { cn } from "../../lib/utils";
import { MagneticButton } from "../ui/MagneticButton";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const handleNavigate = (target: string | number, offset = -80) => {
    setIsMenuOpen(false);
    scrollTo(target, typeof target === "number" ? { immediate: true } : { offset });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition duration-500",
        isScrolled || isMenuOpen
          ? "border-b border-[var(--line-soft)] bg-[rgba(7,7,6,0.82)] backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="page-grid flex min-h-20 items-center justify-between gap-4 py-4">
        <button
          type="button"
          onClick={() => handleNavigate(0)}
          className="group min-h-11 min-w-0 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--lime-accent)]"
          aria-label="Вернуться к началу страницы"
          data-cursor="interactive"
        >
          <span className="block text-[0.58rem] font-bold uppercase tracking-[0.34em] text-[var(--stone-muted)]">
            architectural production
          </span>
          <span className="mt-1 block truncate font-brand text-xl tracking-[-0.055em] text-[var(--stone-100)] transition group-hover:text-[var(--brass-400)] md:text-2xl">
            {studioName}
          </span>
        </button>

        <nav
          className="hidden items-center gap-7 lg:flex xl:gap-9"
          aria-label="Основная навигация"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavigate(`#${item.id}`)}
              className="min-h-11 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[var(--stone-muted)] transition hover:text-[var(--stone-100)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--lime-accent)]"
              data-cursor="interactive"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden justify-end lg:flex">
          <MagneticButton
            type="button"
            onClick={() => handleNavigate("#contact", -72)}
            className="px-4"
          >
            Обсудить проект
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
          </MagneticButton>
        </div>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm border border-[var(--line-soft)] text-[var(--stone-100)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--lime-accent)] lg:hidden"
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMenuOpen}
          aria-controls={menuId}
          onClick={() => setIsMenuOpen((current) => !current)}
          data-cursor="interactive"
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {isMenuOpen ? (
        <div
          id={menuId}
          className="grid overflow-hidden border-t border-[var(--line-soft)] lg:hidden"
        >
          <nav className="min-h-0 overflow-hidden" aria-label="Мобильная навигация">
            <div className="page-grid grid gap-2 py-4 pb-[calc(1rem+env(safe-area-inset-bottom))]">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavigate(`#${item.id}`)}
                  className="flex min-h-12 items-center justify-between border-b border-[var(--line-soft)] py-3 text-left text-sm font-bold uppercase tracking-[0.12em] text-[var(--stone-100)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--lime-accent)]"
                  data-cursor="interactive"
                >
                  {item.label}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </button>
              ))}
              <MagneticButton
                type="button"
                onClick={() => handleNavigate("#contact", -72)}
                className="mt-4 w-full"
              >
                Отправить проект
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
              </MagneticButton>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
