"use client";
import { useEffect, useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  window.addEventListener("themechange", callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener("themechange", callback);
    window.removeEventListener("storage", callback);
  };
}

function getThemeSnapshot() {
  return localStorage.getItem("theme") === "dark";
}

function getServerThemeSnapshot() {
  return false;
}

export default function ThemeToggle() {
  const isDark = useSyncExternalStore(
    subscribe,
    getThemeSnapshot,
    getServerThemeSnapshot
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  function toggle(e: React.MouseEvent) {
    const next = !isDark;
    const x = e.clientX;
    const y = e.clientY;

    document.documentElement.style.setProperty("--clip-x", `${x}px`);
    document.documentElement.style.setProperty("--clip-y", `${y}px`);

    const apply = () => {
      document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
      localStorage.setItem("theme", next ? "dark" : "light");
      window.dispatchEvent(new Event("themechange"));
    };

    if (!("startViewTransition" in document)) {
      apply();
      return;
    }

    (document as Document & { startViewTransition: (fn: () => void) => void })
      .startViewTransition(apply);
  }

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      title={isDark ? "switch to light" : "switch to dark"}
      aria-label="Toggle theme"
    >
      {isDark ? "light" : "dark"}
    </button>
  );
}
