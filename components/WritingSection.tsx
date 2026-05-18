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
  const visible = expanded ? POSTS : POSTS.slice(0, INITIAL);
  const hasMore = POSTS.length > INITIAL;

  return (
    <div style={{ marginTop: "48px" }}>
      <p style={{ color: "#888", fontSize: "14px", marginBottom: "10px" }}>Writing</p>
      <div className="inline-list">
        {visible.map((post) => (
          <div key={post.title} className="inline-list-entry">
            <a href={post.href} className="inline-list-title">{post.title}</a>
            <span className="inline-list-meta">{post.date}</span>
          </div>
        ))}
      </div>
      {hasMore && (
        <button className="expand-btn" onClick={() => setExpanded((e) => !e)}>
          {expanded ? "show less" : `${POSTS.length - INITIAL} more`}
        </button>
      )}
    </div>
  );
}
