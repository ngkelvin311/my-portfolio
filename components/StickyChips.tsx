"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import ThemeToolbar from "./ThemeToolbar";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

type IndicatorStyle = { left: number; width: number };

/* ── Theme-aware shadow alphas (lighter = softer) ────────── */
const shadowAlpha: Record<string, number> = {
  lighter: 0.04,
  light:   0.08,
  dark:    0.2,
  darker:  0.35,
};

function getThemeShadow(): string {
  if (typeof document === "undefined") return "none";
  const theme = document.documentElement.dataset.theme ?? "light";
  const alpha = shadowAlpha[theme] ?? 0.08;
  return `0px 2px 8px 0px rgba(0, 0, 0, ${alpha})`;
}

export default function StickyChips() {
  const pathname = usePathname();
  const router = useRouter();

  // Detect if we are on a work/case study page
  const isWorkPage = pathname.startsWith("/work");

  const [activeSection, setActiveSection] = useState(
    isWorkPage ? "experience" : "home"
  );
  const [indicator, setIndicator] = useState<IndicatorStyle>({ left: 0, width: 0 });
  const [scrolled, setScrolled] = useState(false);
  const [navShadow, setNavShadow] = useState("none");
  const navRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());
  const isClickScrolling = useRef(false);
  const clickScrollTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const [toolbarHeight, setToolbarHeight] = useState(0);
  const toolbarRef = useRef<HTMLDivElement>(null);

  /* ── Desktop nav refs & indicator ── */
  const desktopNavRef = useRef<HTMLElement>(null);
  const desktopChipRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());
  const [desktopIndicator, setDesktopIndicator] = useState<IndicatorStyle>({ left: 0, width: 0 });
  const desktopBarRef = useRef<HTMLDivElement>(null);

  /* ── Lock to experience on work pages ── */
  useEffect(() => {
    if (isWorkPage) {
      setActiveSection("experience");
    }
  }, [isWorkPage, pathname]);

  /* ── Re-compute shadow when scrolled state or theme changes ── */
  useEffect(() => {
    setNavShadow(scrolled ? getThemeShadow() : "none");
  }, [scrolled]);

  /* ── Watch for theme attribute changes to update shadow ─── */
  useEffect(() => {
    const observer = new MutationObserver(() => {
      if (scrolled) setNavShadow(getThemeShadow());
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, [scrolled]);

  /* ── Auto-scroll desktop bar to right (nav chips) on page scroll ── */
  const hasAutoScrolledDesktop = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      const threshold = toolbarHeight > 0 ? toolbarHeight : 10;
      const nowScrolled = window.scrollY >= threshold;
      setScrolled(nowScrolled);

      const bar = desktopBarRef.current;
      if (bar) {
        if (nowScrolled && !hasAutoScrolledDesktop.current) {
          bar.scrollTo({ left: bar.scrollWidth, behavior: "smooth" });
          hasAutoScrolledDesktop.current = true;
        } else if (!nowScrolled) {
          hasAutoScrolledDesktop.current = false;
          bar.scrollTo({ left: 0, behavior: "smooth" });
        }
      }

      // Only update active section on home page
      if (!isWorkPage) {
        if (!isClickScrolling.current && window.scrollY < 100) {
          setActiveSection("home");
        }

        if (!isClickScrolling.current) {
          const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 100;
          if (atBottom) {
            setActiveSection("steal");
          }
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [toolbarHeight, isWorkPage]);

  /* ── Measure & position the sliding indicator ──────────── */
  const updateIndicator = useCallback((sectionId: string) => {
    const chip = chipRefs.current.get(sectionId);
    const nav = navRef.current;
    if (chip && nav) {
      const navRect = nav.getBoundingClientRect();
      const chipRect = chip.getBoundingClientRect();
      setIndicator({
        left: chipRect.left - navRect.left + nav.scrollLeft,
        width: chipRect.width,
      });
    }

    const dChip = desktopChipRefs.current.get(sectionId);
    const dNav = desktopNavRef.current;
    if (dChip && dNav) {
      const dNavRect = dNav.getBoundingClientRect();
      const dChipRect = dChip.getBoundingClientRect();
      setDesktopIndicator({
        left: dChipRect.left - dNavRect.left + dNav.scrollLeft,
        width: dChipRect.width,
      });
    }
  }, []);

  /* ── Ensure the active chip is visible in the scroll container ── */
  const centerActiveChip = useCallback((sectionId: string) => {
    const chip = chipRefs.current.get(sectionId);
    const container = scrollContainerRef.current;
    if (!chip || !container) return;

    const containerRect = container.getBoundingClientRect();
    const chipRect = chip.getBoundingClientRect();

    const overflowLeft = containerRect.left - chipRect.left;
    const overflowRight = chipRect.right - containerRect.right;

    if (overflowLeft > 0) {
      container.scrollTo({ left: container.scrollLeft - overflowLeft - 16, behavior: "smooth" });
    } else if (overflowRight > 0) {
      container.scrollTo({ left: container.scrollLeft + overflowRight + 16, behavior: "smooth" });
    }
  }, []);

  /* ── Intersection Observer (home page only) ── */
  useEffect(() => {
    if (isWorkPage) return;

    const ids = navItems.map((i) => i.href.slice(1)).filter((id) => id !== "home");
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;
        if (window.scrollY < 100) return;

        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isWorkPage]);

  /* ── Move indicator & center chip when active section changes */
  useEffect(() => {
    updateIndicator(activeSection);
    centerActiveChip(activeSection);
  }, [activeSection, updateIndicator, centerActiveChip]);

  /* ── Recalculate on resize or nav scroll ────────────────── */
  useEffect(() => {
    const onResize = () => updateIndicator(activeSection);
    window.addEventListener("resize", onResize);

    const nav = navRef.current;
    const onNavScroll = () => updateIndicator(activeSection);
    nav?.addEventListener("scroll", onNavScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", onResize);
      nav?.removeEventListener("scroll", onNavScroll);
    };
  }, [activeSection, updateIndicator]);

  /* ── Initial measurement after mount ───────────────────── */
  useEffect(() => {
    const t = setTimeout(() => updateIndicator(activeSection), 50);
    return () => clearTimeout(t);
  }, [activeSection, updateIndicator]);

  /* ── Handle click: on work pages, navigate to home + section ── */
  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const id = href.slice(1);

    if (isWorkPage) {
      // Navigate back to home page with hash so it scrolls to the right section
      if (id === "home") {
        router.push("/");
      } else {
        router.push(`/#${id}`);
      }
      return;
    }

    // Home page behaviour — smooth scroll
    const el = document.getElementById(id);
    if (el) {
      isClickScrolling.current = true;
      setActiveSection(id);
      centerActiveChip(id);

      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }

      if (clickScrollTimer.current) clearTimeout(clickScrollTimer.current);
      clickScrollTimer.current = setTimeout(() => {
        isClickScrolling.current = false;
      }, 800);
    }
  };

  /* ── Measure toolbar ── */
  useEffect(() => {
    const el = toolbarRef.current;
    if (!el) return;
    const measure = () => setToolbarHeight(el.offsetHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  /* ── Fade-in on mount ── */
  const [headerVisible, setHeaderVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHeaderVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  const fadeStyle: React.CSSProperties = {
    opacity: headerVisible ? 1 : 0,
    transition: "opacity 1.4s cubic-bezier(0.16,1,0.3,1)",
  };

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          MOBILE layout
          ═══════════════════════════════════════════════════════ */}
      <div
        className="z-50 flex w-full flex-col tablet:hidden"
        style={{
          position: "sticky",
          top: toolbarHeight > 0 ? -toolbarHeight : -200,
          ...fadeStyle,
        }}
      >
        <div
          ref={toolbarRef}
          className="flex w-full items-center justify-center"
          style={{
            padding: "64px 16px 36px",
            backgroundColor: "rgb(var(--bg))",
          }}
        >
          <ThemeToolbar />
        </div>

        <div
          className="flex w-full flex-col backdrop-blur-md"
          style={{
            backgroundColor: "rgb(var(--bg) / 0.95)",
            boxShadow: navShadow,
            transition: "box-shadow 200ms ease",
          }}
        >
          <div ref={scrollContainerRef} className="flex w-full items-center overflow-x-auto scrollbar-none" style={{ height: 64, padding: "8px 16px" }}>
          <nav
            ref={navRef}
            aria-label="Main navigation"
            className="relative mx-auto flex w-fit shrink-0 items-center"
            style={{
              height: 48,
              gap: 8,
              padding: 4,
              borderRadius: 9999,
              backgroundColor: "rgb(var(--text) / 0.08)",
            }}
          >
            <span
              className="pointer-events-none absolute"
              style={{
                top: 4,
                bottom: 4,
                left: indicator.left,
                width: indicator.width,
                borderRadius: 9999,
                backgroundColor: "rgb(var(--text))",
                boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.16)",
                transition: "left 300ms ease, width 300ms ease",
              }}
            />

            {navItems.map((item) => {
              const id = item.href.slice(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={id}
                  ref={(el) => {
                    if (el) chipRefs.current.set(id, el);
                  }}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="relative z-10 flex shrink-0 items-center justify-center whitespace-nowrap transition-colors duration-300"
                  style={{
                    minWidth: 80,
                    padding: "12px 16px",
                    borderRadius: 9999,
                    fontSize: 16,
                    lineHeight: 1,
                    fontFamily: "var(--font-body, 'Roboto', sans-serif)",
                    color: isActive ? "rgb(var(--chip-active-text))" : "rgb(var(--text))",
                  }}
                >
                  {item.label}
                </a>
              );
            })}

            
        </nav>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          DESKTOP layout
          ═══════════════════════════════════════════════════════ */}
      <div
        ref={desktopBarRef}
        className="z-50 hidden w-full tablet:flex items-start laptop:justify-between sticky top-0 backdrop-blur-md overflow-x-auto scrollbar-none"
        style={{
          backgroundColor: "rgb(var(--bg) / 0.95)",
          boxShadow: navShadow,
          transition: "box-shadow 200ms ease, opacity 1.4s cubic-bezier(0.16,1,0.3,1)",
          padding: "12px 16px",
          gap: 32,
          opacity: headerVisible ? 1 : 0,
        }}
      >
        <div className="flex items-center shrink-0" style={{ gap: 4 }}>
          <ThemeToolbar compact />
        </div>

        <nav
          ref={desktopNavRef}
          aria-label="Main navigation"
          className="relative flex w-fit shrink-0 items-center"
          style={{
            height: 48,
            gap: 8,
            padding: 4,
            borderRadius: 9999,
            backgroundColor: "rgb(var(--text) / 0.08)",
          }}
        >
          <span
            className="pointer-events-none absolute"
            style={{
              top: 4,
              bottom: 4,
              left: desktopIndicator.left,
              width: desktopIndicator.width,
              borderRadius: 9999,
              backgroundColor: "rgb(var(--text))",
              boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.16)",
              transition: "left 300ms ease, width 300ms ease",
            }}
          />

          {navItems.map((item) => {
            const id = item.href.slice(1);
            const isActive = activeSection === id;
            return (
              <a
                key={`desktop-${id}`}
                ref={(el) => {
                  if (el) desktopChipRefs.current.set(id, el);
                }}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="relative z-10 flex shrink-0 items-center justify-center whitespace-nowrap transition-colors duration-300"
                style={{
                  minWidth: 80,
                  padding: "12px 16px",
                  borderRadius: 9999,
                  fontSize: 16,
                  lineHeight: 1,
                  fontFamily: "var(--font-body, 'Roboto', sans-serif)",
                  color: isActive ? "rgb(var(--chip-active-text))" : "rgb(var(--text))",
                }}
              >
                {item.label}
              </a>
            );
          })}

          
        </nav>
      </div>
    </>
  );
}
