import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "YDYL | Real-time infrastructure for global initiatives",
  description:
    "YDYL provides a unified digital infrastructure layer for cross-border initiatives, delivering real-time data, collaboration, and governance tooling.",
  icons: [
    {
      rel: "icon",
      url: "/favicon.svg",
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

