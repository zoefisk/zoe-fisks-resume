"use client";

import { useEffect, useRef, useState } from "react";

type PageSection = {
  id: string;
  label: string;
};

type PageSidebarProps = {
  sections: PageSection[];
};

export function PageSidebar({ sections }: PageSidebarProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pendingSectionRef = useRef<string | null>(null);
  const activeSectionLabel =
    sections.find((section) => section.id === activeSection)?.label ?? sections[0]?.label ?? "Start";

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!elements.length) {
      return;
    }

    let frame = 0;

    const updateActiveSection = () => {
      frame = 0;

      const markerY = Math.min(180, window.innerHeight * 0.28);
      const isNearPageBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 16;
      const pendingSection = pendingSectionRef.current;
      const sectionRects = elements.map((element) => {
        const rect = element.getBoundingClientRect();

        return {
          id: element.id,
          top: rect.top,
        };
      });

      if (pendingSection) {
        const targetSection = sectionRects.find((section) => section.id === pendingSection);

        if (targetSection && targetSection.top <= markerY) {
          setActiveSection(pendingSection);
          pendingSectionRef.current = null;
          return;
        }

        return;
      }

      if (isNearPageBottom) {
        setActiveSection(sectionRects[sectionRects.length - 1]?.id ?? "");
        return;
      }

      const closestSection = sectionRects.reduce((closest, section) => {
        if (!closest) {
          return section;
        }

        return Math.abs(section.top - markerY) < Math.abs(closest.top - markerY)
          ? section
          : closest;
      }, sectionRects[0]);

      if (closestSection?.id) {
        setActiveSection(closestSection.id);
        return;
      }

      const passedSections = sectionRects.filter((section) => section.top <= markerY);

      if (passedSections.length) {
        setActiveSection(passedSections[passedSections.length - 1].id);
        return;
      }

      setActiveSection(sectionRects[0]?.id ?? "");
    };

    const requestUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [sections]);

  return (
    <nav className="page-sidebar" aria-label="Page sections">
      <button
        aria-expanded={mobileMenuOpen}
        aria-label="Toggle section navigation"
        className="page-sidebar-toggle"
        onClick={() => setMobileMenuOpen((open) => !open)}
        type="button"
      >
        <span className="page-sidebar-toggle-kicker">Sections</span>
        <span className="page-sidebar-toggle-current">{activeSectionLabel}</span>
      </button>

      <div className="page-sidebar-shell" data-open={mobileMenuOpen}>
        {sections.map((section) => (
          <a
            className="page-sidebar-link"
            data-active={section.id === activeSection}
            href={`#${section.id}`}
            key={section.id}
            onClick={() => {
              pendingSectionRef.current = section.id;
              setActiveSection(section.id);
              setMobileMenuOpen(false);
            }}
          >
            <span className="page-sidebar-dot" aria-hidden="true" />
            <span className="page-sidebar-text">{section.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
