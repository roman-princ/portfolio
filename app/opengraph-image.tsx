import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt =
  "Roman Princ - Full Stack Developer & Software Engineering Student";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background:
            "radial-gradient(80% 90% at 20% 10%, #2e1065 0%, #0b0618 55%), #0b0618",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "90px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontSize: "22px",
            letterSpacing: "6px",
            color: "rgba(255,255,255,0.55)",
            marginBottom: "36px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "999px",
              background: "#34d399",
            }}
          />
          AVAILABLE FOR FREELANCE — PRAGUE
        </div>

        <h1
          style={{
            fontSize: "120px",
            fontWeight: 800,
            margin: "0 0 8px 0",
            letterSpacing: "-4px",
            backgroundImage:
              "linear-gradient(100deg, #22d3ee 0%, #a78bfa 45%, #f472b6 90%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Roman Princ
        </h1>

        <p
          style={{
            fontSize: "40px",
            color: "rgba(255,255,255,0.85)",
            margin: "0 0 44px 0",
            fontWeight: 600,
          }}
        >
          Full-Stack & Mobile Engineer
        </p>

        <div
          style={{
            display: "flex",
            gap: "26px",
            fontSize: "26px",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          <span>React</span>
          <span style={{ color: "#f472b6" }}>✦</span>
          <span>TypeScript</span>
          <span style={{ color: "#f472b6" }}>✦</span>
          <span>Node.js</span>
          <span style={{ color: "#f472b6" }}>✦</span>
          <span>.NET</span>
          <span style={{ color: "#f472b6" }}>✦</span>
          <span>React Native</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
