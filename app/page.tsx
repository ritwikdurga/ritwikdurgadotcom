import GitHubCard from "@/components/GitHubCard";
import ShimmerLink from "@/components/ShimmerLink";
import InstagramCard from "@/components/InstagramCard";
import VsslCard from "@/components/VsslCard";
import WritingSection from "@/components/WritingSection";
import ProjectsSection from "@/components/ProjectsSection";
import LightSwitch from "@/components/LightSwitch";

export default function Home() {
  return (
    <>
      <LightSwitch />
    <main
      style={{
        minHeight: "100vh",
        paddingTop: "clamp(48px, 6vw, 80px)",
        paddingLeft: "clamp(24px, 8vw, 120px)",
        paddingRight: "clamp(24px, 5vw, 72px)",
        paddingBottom: "80px",
      }}
    >
      <div className="page-layout">
        {/* ── Left: bio ── */}
        <div>
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

          <p style={{ marginBottom: "20px" }}>
            I&apos;m a software engineer based out of Bangalore. Currently an SDE1
            at{" "}
            <ShimmerLink href="https://glance.com">Glance</ShimmerLink>, and
            studied computer science at{" "}
            <ShimmerLink href="https://www.iitr.ac.in">IIT Roorkee</ShimmerLink>.
          </p>

          <p style={{ marginBottom: "20px" }}>
            Before that, I built cool projects and launched my own app{" "}
            <VsslCard />, now live on the App Store.
          </p>

          <p style={{ marginBottom: "20px" }}>
            I care about the feel of things: the spring on a dismiss gesture,
            the easing on a state change, the moment something clicks. I also
            play way too much Valorant, which I&apos;m calling research.
          </p>

          <p>
            Find me on{" "}
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
        </div>

        {/* ── Right: sections ── */}
        <div>
          <WritingSection />
          <ProjectsSection />
        </div>
      </div>
    </main>
    </>
  );
}
