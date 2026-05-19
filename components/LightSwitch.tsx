"use client";
import { useState, useEffect } from "react";
import { flushSync } from "react-dom";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setIsDark(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  function toggle(e: React.MouseEvent) {
    const next = !isDark;
    const x = e.clientX;
    const y = e.clientY;

    document.documentElement.style.setProperty("--clip-x", `${x}px`);
    document.documentElement.style.setProperty("--clip-y", `${y}px`);

    const apply = () => {
      flushSync(() => setIsDark(next));
      document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
      localStorage.setItem("theme", next ? "dark" : "light");
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
      {isDark ? "○" : "●"}
    </button>
  );
}
