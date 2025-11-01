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
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px",
            textAlign: "center",
          }}>
          <h1
            style={{
              fontSize: "96px",
              fontWeight: "bold",
              color: "white",
              margin: "0 0 30px 0",
              textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
            }}>
            Roman Princ
          </h1>
          <p
            style={{
              fontSize: "42px",
              color: "rgba(255,255,255,0.95)",
              margin: "0 0 20px 0",
              fontWeight: "500",
            }}>
            Full Stack Developer
          </p>
          <p
            style={{
              fontSize: "32px",
              color: "rgba(255,255,255,0.85)",
              margin: "0",
              fontWeight: "400",
            }}>
            Software Engineering Student
          </p>
          <div
            style={{
              display: "flex",
              gap: "30px",
              marginTop: "50px",
              fontSize: "28px",
              color: "rgba(255,255,255,0.9)",
            }}>
            <span>React</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Node.js</span>
            <span>•</span>
            <span>.NET</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
