"use client";
import { useRef, useState, useEffect } from "react";

export default function VsslCard() {
  const ref = useRef<HTMLAnchorElement>(null);
  const [iconUrl, setIconUrl] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://itunes.apple.com/lookup?id=6758864930")
      .then((r) => r.json())
      .then((data) => {
        const url: string | undefined =
          data?.results?.[0]?.artworkUrl512 ?? data?.results?.[0]?.artworkUrl100;
        if (url) setIconUrl(url);
      })
      .catch(() => {});
  }, []);

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
      <span className="vssl-popup">
        {iconUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={iconUrl} alt="vssl" className="vssl-app-icon" />
        ) : (
          <span className="vssl-icon-fallback">v</span>
        )}
        <span className="vssl-app-info">
          <span className="vssl-app-name">vssl</span>
          <span className="vssl-app-sub">Private Journal &amp; Diary</span>
        </span>
      </span>
    </a>
  );
}
