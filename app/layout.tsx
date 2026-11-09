import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anagh Bajpai — Software Engineer",
  description: "Portfolio of Anagh Bajpai, Software Engineering student at Delhi Technological University.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
