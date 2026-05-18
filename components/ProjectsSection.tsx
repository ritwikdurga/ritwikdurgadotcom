"use client";
import { useState } from "react";

const PROJECTS = [
  {
    title: "vssl — Private Journal & Diary",
    meta: "iOS · App Store",
    href: "https://apps.apple.com/us/app/vssl-private-journal-diary/id6758864930",
  },
  {
    title: "ritwikdurga.com",
    meta: "Next.js",
    href: "https://github.com/ritwikdurga/ritwikdurgadotcom",
  },
  {
    title: "Some side project",
    meta: "React · TypeScript",
    href: "#",
  },
  {
    title: "Another thing I built",
    meta: "Swift",
    href: "#",
  },
];

const INITIAL = 3;

export default function ProjectsSection() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? PROJECTS : PROJECTS.slice(0, INITIAL);
  const hasMore = PROJECTS.length > INITIAL;

  return (
    <div style={{ marginTop: "36px" }}>
      <p style={{ color: "#888", fontSize: "14px", marginBottom: "10px" }}>Projects</p>
      <div className="inline-list">
        {visible.map((p) => (
          <div key={p.title} className="inline-list-entry">
            <a
              href={p.href}
              className="inline-list-title"
              target="_blank"
              rel="noopener noreferrer"
            >
              {p.title}
            </a>
            <span className="inline-list-meta">{p.meta}</span>
          </div>
        ))}
      </div>
      {hasMore && (
        <button className="expand-btn" onClick={() => setExpanded((e) => !e)}>
          {expanded ? "show less" : `${PROJECTS.length - INITIAL} more`}
        </button>
      )}
    </div>
  );
}
