"use client";
import { useState } from "react";

const POSTS = [
  { title: "On shipping vssl alone", date: "May 2025", href: "#" },
  { title: "Why fast UIs feel alive", date: "Mar 2025", href: "#" },
  { title: "Valorant and feedback loops", date: "Jan 2025", href: "#" },
  { title: "What lock screens taught me", date: "Nov 2024", href: "#" },
  { title: "The spring on a dismiss gesture", date: "Sep 2024", href: "#" },
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
