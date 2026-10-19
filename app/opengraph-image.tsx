import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Roman Princ — Full-stack engineer in Prague";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// The link preview, as the site looks: black, white type, grey for the rest
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 90px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "#f5f5f7",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "26px", color: "#86868b" }}>
          <div style={{ width: "12px", height: "12px", borderRadius: "999px", background: "#fff" }} />
          <span style={{ color: "#f5f5f7" }}>Available for freelance</span>
          <span>· Prague</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "168px", fontWeight: 600, letterSpacing: "-8px", lineHeight: 0.95 }}>Roman</div>
          <div style={{ fontSize: "168px", fontWeight: 600, letterSpacing: "-8px", lineHeight: 0.95 }}>Princ.</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "30px", color: "#86868b" }}>
          <span>Full-stack engineer. Web, mobile, backends.</span>
          <span>portfolio.princdev.com</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
