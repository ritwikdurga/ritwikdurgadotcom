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
            I&apos;m a software engineer in Bangalore — SDE1 at{" "}
            <ShimmerLink href="https://glance.com">Glance</ShimmerLink>, building
            for hundreds of millions of lock screen users. CS from{" "}
            <ShimmerLink href="https://www.iitr.ac.in">IIT Roorkee</ShimmerLink>.
          </p>

          <p style={{ marginBottom: "20px" }}>
            I obsess over the small things: the spring on a dismiss gesture, the
            easing on a state change, the moment an animation makes something feel
            inevitable. I also play too much Valorant.
          </p>

          <p style={{ marginBottom: "20px" }}>
            On the side, I built and shipped <VsslCard /> — a private journal app
            now on the App Store.
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
            , check out my code on{" "}
            <GitHubCard username="ritwikdurga" bio="building things" />
            , and catch me on{" "}
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
