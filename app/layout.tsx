import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Anagh Bajpai — Software Engineer",
  description:
    "Full-Stack Developer & ML Engineer. B.Tech Software Engineering student at DTU, New Delhi. Building production-grade web apps and AI pipelines.",
  keywords: ["Anagh Bajpai", "Software Engineer", "Full-Stack", "Next.js", "React", "Machine Learning", "DTU"],
  authors: [{ name: "Anagh Bajpai" }],
  openGraph: {
    title: "Anagh Bajpai — Software Engineer",
    description: "Full-Stack Developer & ML Engineer based in New Delhi.",
    type: "website",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.cdnfonts.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
