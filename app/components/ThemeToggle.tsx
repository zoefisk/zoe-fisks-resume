"use client";

import { useState } from "react";

const THEME_STORAGE_KEY = "zf-theme";

type Theme = "dark" | "light";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;

  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {}
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document === "undefined") {
      return "dark";
    }

    return document.documentElement.dataset.theme === "light" ? "light" : "dark";
  });

  const nextTheme = theme === "light" ? "dark" : "light";

  return (
    <button
      aria-label="Toggle color mode"
      className="theme-toggle"
      onClick={() => {
        const updatedTheme = nextTheme;
        setTheme(updatedTheme);
        applyTheme(updatedTheme);
      }}
      title="Toggle color mode"
      type="button"
    >
      <span className="sr-only">Toggle color mode</span>
      <span className="theme-toggle-icon" aria-hidden="true">
        <svg fill="none" viewBox="0 0 24 24">
          <path
            d="M12 3.5v2.2M12 18.3v2.2M5.99 5.99l1.56 1.56M16.45 16.45l1.56 1.56M3.5 12h2.2M18.3 12h2.2M5.99 18.01l1.56-1.56M16.45 7.55l1.56-1.56"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
          <circle cx="12" cy="12" fill="currentColor" r="3.2" />
        </svg>
      </span>
      <span className="theme-toggle-text">{theme === "light" ? "Dark" : "Light"}</span>
    </button>
  );
}
