import GitHubCard from "@/components/GitHubCard";
import ShimmerLink from "@/components/ShimmerLink";
import CompanyCard from "@/components/CompanyCard";
import InstagramCard from "@/components/InstagramCard";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
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

        <p style={{ marginBottom: "22px" }}>
          I&apos;m a software engineer based out of Bangalore. Currently a
          product engineer at{" "}
          <CompanyCard
            href="https://glance.com"
            name="Glance"
            role="Product Engineer"
            sub="Glance · InMobi Group"
            initial="G"
          />
          , and studied computer science at{" "}
          <ShimmerLink href="https://www.iitr.ac.in">
            IIT Roorkee
          </ShimmerLink>
          .
        </p>

        <p style={{ marginBottom: "22px" }}>
          Before that, I built cool projects and launched my own app called{" "}
          <strong style={{ fontWeight: 600 }}>vssl</strong> on the App Store.
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
            Twitter
            <svg className="strike-svg" viewBox="0 0 80 14" preserveAspectRatio="none">
              <path className="strike-path" d="M 0 7 Q 20 3 40 7 Q 60 11 80 7" />
            </svg>
          </a>
          , see my work on{" "}
          <GitHubCard username="ritwikdurga" bio="building things" />
          , and find me on{" "}
          <InstagramCard username="ritwikdurga" />
          .
        </p>
      </div>
    </main>
  );
}
