import GitHubCard from "@/components/GitHubCard";
import ShimmerLink from "@/components/ShimmerLink";
import InstagramCard from "@/components/InstagramCard";
import VsslCard from "@/components/VsslCard";
import WritingSection from "@/components/WritingSection";
import ProjectsSection from "@/components/ProjectsSection";

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

        <WritingSection />
        <ProjectsSection />
      </div>
    </main>
  );
}
