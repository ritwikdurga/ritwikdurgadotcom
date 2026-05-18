import GitHubCard from "@/components/GitHubCard";
import ShimmerLink from "@/components/ShimmerLink";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
        paddingTop: "clamp(80px, 12vw, 160px)",
        paddingLeft: "clamp(24px, 10vw, 148px)",
        paddingRight: "clamp(24px, 10vw, 148px)",
        paddingBottom: "80px",
      }}
    >
      <div style={{ maxWidth: "680px", width: "100%" }}>
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

        <p style={{ marginBottom: "20px", color: "#1a1a1a" }}>
          I&apos;m a software engineer based out of Hyderabad. Currently
          building things at{" "}
          <strong style={{ fontWeight: 600 }}>your company</strong>, and
          studying computer science at the{" "}
          <ShimmerLink href="https://www.university.edu">
            University of Example
          </ShimmerLink>
          .
        </p>

        <p style={{ marginBottom: "20px", color: "#1a1a1a" }}>
          Before that, I shipped products from the ground up and built some
          cool data visualizations.
        </p>

        <p style={{ marginBottom: "20px", color: "#1a1a1a" }}>
          I love the craft behind making user interfaces look nice, feel great
          to use, and making them blazingly fast.
        </p>

        <p style={{ color: "#1a1a1a" }}>
          Reach out to me at{" "}
          <a
            href="https://x.com/yourhandle"
            className="twitter-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="x-icon">𝕏</span>
            Twitter
            <svg className="strike-svg" viewBox="0 0 80 14" preserveAspectRatio="none">
              <path
                className="strike-path"
                d="M 0 7 Q 20 3 40 7 Q 60 11 80 7"
              />
            </svg>
          </a>{" "}
          and see my work on{" "}
          <GitHubCard username="ritwikdurga" displayName="ritwikdurga" bio="building things" />
          .
        </p>
      </div>
    </main>
  );
}
