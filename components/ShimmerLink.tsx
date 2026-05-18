"use client";

import { useRef } from "react";

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function ShimmerLink({ href, children }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  function handleMouseEnter() {
    const el = ref.current;
    if (!el) return;
    // Remove then re-add to restart animation
    el.classList.remove("shimmer-active");
    void el.offsetWidth; // force reflow
    el.classList.add("shimmer-active");
  }

  return (
    <a
      ref={ref}
      href={href}
      className="shimmer-base"
      onMouseEnter={handleMouseEnter}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
