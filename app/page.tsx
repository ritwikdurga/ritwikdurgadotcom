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

            <p style={{ marginBottom: "22px" }}>
              I&apos;m a software engineer based in Bangalore, currently an SDE1
              at{" "}
              <ShimmerLink href="https://glance.com">Glance</ShimmerLink>, where
              I work on software for lock screen experiences. I studied computer
              science at{" "}
              <ShimmerLink href="https://www.iitr.ac.in">IIT Roorkee</ShimmerLink>.
            </p>

            <p style={{ marginBottom: "22px" }}>
              Before that, I spent a lot of time making side projects, including{" "}
              <VsslCard />, a private journal app I launched on the App Store.
            </p>

            <p style={{ marginBottom: "22px" }}>
              I care about interfaces that feel calm, fast, and considered:
              clean layouts, smooth motion, and the small details that make
              software feel good to use.
            </p>

            <p>
              Reach out about work, product ideas, or anything you think I should
              see at{" "}
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

          <div>
            <WritingSection />
            <ProjectsSection />
          </div>
        </div>
      </main>
    </>
  );
}
