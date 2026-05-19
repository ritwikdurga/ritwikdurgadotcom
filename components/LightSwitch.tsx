"use client";
import { useState, useEffect } from "react";

export default function LightSwitch() {
  const [isDark, setIsDark] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setIsDark(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  function toggle() {
    if (animating) return;
    setAnimating(true);
    const next = !isDark;
    setIsDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <div
      className="light-switch"
      onClick={toggle}
      title={isDark ? "Switch to light" : "Switch to dark"}
    >
      <div className={`switch-bulb${!isDark ? " bulb-on" : ""}`} />
      <div
        className={`switch-pull${animating ? " spring-pull" : ""}`}
        onAnimationEnd={() => setAnimating(false)}
      >
        <div className="switch-cord" />
        <div className="switch-knob" />
      </div>
    </div>
  );
}
