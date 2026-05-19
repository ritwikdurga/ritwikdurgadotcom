"use client";
import { useState } from "react";

const POSTS = [
  { title: "Building vssl: notes on shipping a solo app", date: "May 2025", href: "#" },
  { title: "Why fast UIs feel alive", date: "Mar 2025", href: "#" },
  { title: "Getting more out of React Server Components", date: "Jan 2025", href: "#" },
  { title: "On making things that last", date: "Nov 2024", href: "#" },
  { title: "Notes on building at Glance", date: "Sep 2024", href: "#" },
];

const INITIAL = 3;

export default function WritingSection() {
  const [expanded, setExpanded] = useState(false);
  const shown = POSTS.slice(0, INITIAL);
  const hidden = POSTS.slice(INITIAL);

  return (
    <div className="aside-section">
      <p className="aside-label">Writing</p>
      {shown.map((post) => (
        <div key={post.title} className="aside-entry">
          <a href={post.href} className="aside-title">{post.title}</a>
          <span className="aside-meta">{post.date}</span>
        </div>
      ))}

      {/* smooth height animation via grid-template-rows trick */}
      <div className={`expand-anim${expanded ? " open" : ""}`}>
        <div>
          {hidden.map((post) => (
            <div key={post.title} className="aside-entry">
              <a href={post.href} className="aside-title">{post.title}</a>
              <span className="aside-meta">{post.date}</span>
            </div>
          ))}
        </div>
      </div>

      {hidden.length > 0 && (
        <button className="expand-btn" onClick={() => setExpanded((e) => !e)}>
          {expanded ? "show less" : `${hidden.length} more`}
        </button>
      )}
    </div>
  );
}
