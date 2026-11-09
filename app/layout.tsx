import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anagh Bajpai — Software Engineer",
  description:
    "Anagh Bajpai (@Anagh1010) — Software Engineering student at DTU. I build production-grade web applications and applied ML pipelines.",
  authors: [{ name: "Anagh Bajpai", url: "https://github.com/Anagh1010" }],
  keywords: [
    "Anagh Bajpai",
    "Software Engineer",
    "DTU",
    "Delhi Technological University",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Machine Learning",
    "PyTorch",
  ],
  openGraph: {
    title: "Anagh Bajpai — Software Engineer",
    description:
      "Software Engineering student at DTU. Full-stack developer & ML systems builder.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#09090b] text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
