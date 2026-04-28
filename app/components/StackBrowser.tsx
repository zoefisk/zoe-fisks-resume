"use client";

import { startTransition, useDeferredValue, useEffect, useRef, useState } from "react";

import type { TechStackItem } from "@/app/resume-data";

type StackBrowserProps = {
  items: TechStackItem[];
  timelineCeiling: number;
  timelineFloor: number;
};

function normalizeValue(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function fuzzyMatch(source: string, query: string) {
  if (!query) {
    return true;
  }

  const normalizedSource = normalizeValue(source);
  const normalizedQuery = normalizeValue(query);

  if (!normalizedQuery) {
    return true;
  }

  if (normalizedSource.includes(normalizedQuery)) {
    return true;
  }

  let queryIndex = 0;
  for (const character of normalizedSource) {
    if (character === normalizedQuery[queryIndex]) {
      queryIndex += 1;
      if (queryIndex === normalizedQuery.length) {
        return true;
      }
    }
  }

  return false;
}

export function StackBrowser({
  items,
  timelineCeiling,
  timelineFloor,
}: StackBrowserProps) {
  const [controlsOpen, setControlsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const deferredQuery = useDeferredValue(query);
  const hasActiveFilters = query.trim() !== "" || activeCategory !== "All";
  const controlsRef = useRef<HTMLDivElement | null>(null);

  const categories = ["All", ...new Set(items.map((item) => item.category))];

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!controlsRef.current?.contains(event.target as Node)) {
        setControlsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setControlsOpen(false);
      }
    }

    if (controlsOpen) {
      document.addEventListener("pointerdown", handlePointerDown);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [controlsOpen]);

  const visibleItems = items.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesQuery = fuzzyMatch(
      `${item.label} ${item.category} ${item.phase}`,
      deferredQuery,
    );

    return matchesCategory && matchesQuery;
  });

  return (
    <div className="stack-rail">
      <div className="stack-controls-anchor" ref={controlsRef}>
        <button
          aria-controls="stack-controls-menu"
          aria-expanded={controlsOpen}
          className="stack-controls-button"
          onClick={() => setControlsOpen((open) => !open)}
          type="button"
        >
          <span>{controlsOpen ? "Close search and filters" : "Open search and filters"}</span>
          <span
            aria-hidden="true"
            className="stack-controls-button-caret"
            data-open={controlsOpen}
          >
            ▾
          </span>
        </button>

        {hasActiveFilters ? (
          <button
            className="stack-controls-clear"
            onClick={() => {
              startTransition(() => {
                setQuery("");
                setActiveCategory("All");
              });
            }}
            type="button"
          >
            Clear filters
          </button>
        ) : null}

        {controlsOpen ? (
          <div className="stack-controls-menu" id="stack-controls-menu">
            <div className="stack-controls">
              <label className="stack-search-shell">
                <span className="sr-only">Search stack items</span>
                <input
                  className="stack-search-input"
                  onChange={(event) => {
                    const value = event.target.value;
                    startTransition(() => setQuery(value));
                  }}
                  placeholder="Search..."
                  type="search"
                  value={query}
                />
              </label>

              <div className="stack-filter-row" aria-label="Filter stack by category">
                {categories.map((category) => (
                  <button
                    className="stack-filter-chip"
                    data-active={category === activeCategory}
                    key={category}
                    onClick={() => {
                      startTransition(() => setActiveCategory(category));
                    }}
                    type="button"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <div className="stack-rail-meta">
        <p className="stack-rail-status">
          {visibleItems.length} of {items.length} stack items
        </p>
        <p className="stack-rail-hint">Scroll to browse</p>
      </div>

      <div className="stack-scroll-shell">
        {visibleItems.length ? (
          <div className="stack-grid" aria-label="Filtered tech stack">
            {visibleItems.map((item, index) => (
              <article className="stack-card" data-accent={item.accent} key={item.label}>
                <div className="stack-card-topline">
                  <p className="stack-card-index">{String(index + 1).padStart(2, "0")}</p>
                  <span className="stack-card-chip">{item.category}</span>
                </div>

                <div className="stack-card-copy">
                  <h3>{item.label}</h3>
                </div>

                <div className="stack-card-timeline" aria-hidden="true">
                  <span>{timelineFloor}</span>
                  <div className="stack-card-track">
                    <span
                      className="stack-card-track-fill"
                      style={{
                        left: `${((item.startYear - timelineFloor) / (timelineCeiling - timelineFloor)) * 100}%`,
                        width: `${((item.endYear - item.startYear) / (timelineCeiling - timelineFloor)) * 100}%`,
                      }}
                    />
                  </div>
                  <span>{timelineCeiling}</span>
                </div>

                <p className="stack-card-range">
                  {item.startYear} - {item.endYear}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <div className="stack-empty-state">
            <p>No stack items match that search/filter yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
