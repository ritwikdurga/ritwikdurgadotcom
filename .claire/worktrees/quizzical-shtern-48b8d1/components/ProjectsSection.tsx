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
          <div className="aside-title-wrap">
            <a
              href={p.href}
              className="aside-title"
              target="_blank"
              rel="noopener noreferrer"
            >
              {p.title}
            </a>
            <svg className="aside-line" viewBox="0 0 100 8" preserveAspectRatio="none">
              <path className="aside-line-path" d="M 0 4 Q 25 1 50 4 Q 75 7 100 4" />
            </svg>
          </div>
          <span className="aside-meta">{p.meta}</span>
        </div>
      ))}
    </div>
  );
}
