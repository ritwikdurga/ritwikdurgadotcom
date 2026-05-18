"use client";
import { useRef } from "react";

export default function VsslCard() {
  const ref = useRef<HTMLAnchorElement>(null);

  function handleMouseEnter() {
    const el = ref.current;
    if (!el) return;
    el.classList.remove("shimmer-active");
    void el.offsetWidth;
    el.classList.add("shimmer-active");
  }

  return (
    <a
      ref={ref}
      href="https://apps.apple.com/us/app/vssl-private-journal-diary/id6758864930"
      className="shimmer-base vssl-shimmer"
      onMouseEnter={handleMouseEnter}
      target="_blank"
      rel="noopener noreferrer"
    >
      vssl
      <span className="vssl-text-tip">Private Journal &amp; Diary</span>
    </a>
  );
}
