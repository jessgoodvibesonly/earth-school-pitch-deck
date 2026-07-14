import type { ReactNode } from "react";
import "./styles.css";

export const metadata = {
  title: "EARTH SCHOOL | A Temporary Human Experience",
  description:
    "A cinematic investor presentation for EARTH SCHOOL, a cooperative 1980s East Coast Canadian adventure where awareness, perspective and human growth become gameplay.",
  icons: {
    icon: "/peacefavicon.png",
    shortcut: "/peacefavicon.png",
    apple: "/peacefavicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
