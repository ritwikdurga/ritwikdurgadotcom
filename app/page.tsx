import ShimmerLink from "@/components/ShimmerLink";
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
              <span className="copy-line">
                I&apos;m a software engineer based in Bangalore, currently an
                SDE1 at{" "}
                <ShimmerLink href="https://glance.com">Glance</ShimmerLink>.
              </span>
              <span className="copy-line">
                I completed my Bachelors in CS at{" "}
                <ShimmerLink href="https://www.iitr.ac.in">IIT Roorkee</ShimmerLink>.
              </span>
            </p>

            <p style={{ marginBottom: "22px" }}>
              <span className="copy-line">
                Apart from that, I spent a lot of time making side projects,
              </span>
              <span className="copy-line">
                including my latest <VsslCard />, a private journal app I
                launched on the App Store.
              </span>
            </p>

            <p style={{ marginBottom: "22px" }}>
              I love the craft behind making user interfaces look nice, feel
              great to use, and making them blazingly fast.
            </p>

            <p className="contacts-line">
              Elsewhere:{" "}
              <a
                href="https://x.com/0xRitwik"
                className="contact-text-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </a>,{" "}
              <a
                href="https://github.com/ritwikdurga"
                className="contact-text-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>.
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
