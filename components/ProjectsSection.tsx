"use client";

const PROJECTS = [
  {
    title: "vssl",
    meta: "iOS · App Store",
    href: "https://apps.apple.com/us/app/vssl-private-journal-diary/id6758864930",
  },
  {
    title: "ritwikdurga.com",
    meta: "this site · Next.js",
    href: "https://github.com/ritwikdurga/ritwikdurgadotcom",
  },
];

export default function ProjectsSection() {
  return (
    <div className="aside-section" style={{ marginTop: "32px" }}>
      <p className="aside-label">Projects</p>
      {PROJECTS.map((p) => (
        <div key={p.title} className="aside-entry">
          <a
            href={p.href}
            className="aside-title"
            target="_blank"
            rel="noopener noreferrer"
          >
            {p.title}
          </a>
          <span className="aside-meta">{p.meta}</span>
        </div>
      ))}
    </div>
  );
}
