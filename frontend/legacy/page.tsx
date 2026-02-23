export const metadata = {
  title: "Legacy HTML | WashXpress",
  description: "Embedded legacy HTML page for incremental migration into Next.js.",
};

export default function LegacyPage() {
  return (
    <main style={{ height: "calc(100vh - 80px)" }}>
      <div style={{ padding: "16px 16px 0", maxWidth: 1200, margin: "0 auto" }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>Legacy HTML (Embedded)</h1>
        <p style={{ marginTop: 8, color: "#6b7280" }}>
          This route embeds <code>/public/legacy/index.html</code> in an iframe so you can merge HTML into
          the Next.js app without rewriting it immediately.
        </p>
      </div>

      <div style={{ height: "100%", padding: "0 16px 16px" }}>
        <iframe
          src="/legacy/index.html"
          title="Legacy HTML"
          style={{
            width: "100%",
            height: "100%",
            border: "1px solid #e5e7eb",
            borderRadius: 12,
            background: "white",
          }}
        />
      </div>
    </main>
  );
}
