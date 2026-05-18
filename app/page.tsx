import GitHubCard from "@/components/GitHubCard";
import ShimmerLink from "@/components/ShimmerLink";
import InstagramCard from "@/components/InstagramCard";
import VsslCard from "@/components/VsslCard";

const BLOGS = [
  { title: "Building vssl: notes on shipping a solo app", date: "May 2025", href: "#" },
  { title: "Why fast UIs feel alive", date: "Mar 2025", href: "#" },
  { title: "Getting more out of React Server Components", date: "Jan 2025", href: "#" },
];

const PROJECTS = [
  { title: "vssl — Private Journal & Diary", meta: "iOS · App Store", href: "https://apps.apple.com/us/app/vssl-private-journal-diary/id6758864930" },
  { title: "ritwikdurga.com — this site", meta: "Next.js", href: "https://github.com/ritwikdurga/ritwikdurgadotcom" },
];

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        paddingTop: "clamp(80px, 12vw, 160px)",
        paddingLeft: "clamp(24px, 10vw, 148px)",
        paddingRight: "clamp(24px, 10vw, 148px)",
        paddingBottom: "100px",
      }}
    >
      <div style={{ maxWidth: "640px", width: "100%" }}>
        <h1
          style={{
            fontSize: "17px",
            fontWeight: 700,
            marginBottom: "28px",
            letterSpacing: "-0.01em",
          }}
        >
          Ritwik Durga
        </h1>

        <p style={{ marginBottom: "22px" }}>
          I&apos;m a software engineer based out of Bangalore. Currently an SDE1
          at <ShimmerLink href="https://glance.com">Glance</ShimmerLink>, and
          studied computer science at{" "}
          <ShimmerLink href="https://www.iitr.ac.in">IIT Roorkee</ShimmerLink>.
        </p>

        <p style={{ marginBottom: "22px" }}>
          Before that, I built cool projects and launched my own app called{" "}
          <VsslCard /> on the App Store.
        </p>

        <p style={{ marginBottom: "22px" }}>
          I love the craft behind making user interfaces look nice, feel great
          to use, and making them blazingly fast.
        </p>

        <p>
          Reach out to me at{" "}
          <a
            href="https://x.com/0xRitwik"
            className="twitter-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="x-icon">𝕏</span>
            X
            <svg className="strike-svg" viewBox="0 0 80 14" preserveAspectRatio="none">
              <path className="strike-path" d="M 0 7 Q 20 3 40 7 Q 60 11 80 7" />
            </svg>
          </a>
          , see my work on{" "}
          <GitHubCard username="ritwikdurga" bio="building things" />
          , and find me on{" "}
          <InstagramCard username="ritwikdurga" />.
        </p>

        {/* Writing */}
        <div style={{ marginTop: "48px" }}>
          <p style={{ color: "#888", fontSize: "15px" }}>Writing</p>
          <div className="inline-list">
            {BLOGS.map((post) => (
              <div key={post.title} className="inline-list-entry">
                <a href={post.href} className="inline-list-title">{post.title}</a>
                <span className="inline-list-meta">{post.date}</span>
              </div>
            ))}
          </div>
          <a href="/blog" className="see-all-link">See all →</a>
        </div>

        {/* Projects */}
        <div style={{ marginTop: "40px" }}>
          <p style={{ color: "#888", fontSize: "15px" }}>Projects</p>
          <div className="inline-list">
            {PROJECTS.map((p) => (
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
        </div>
      </div>
    </main>
  );
}
