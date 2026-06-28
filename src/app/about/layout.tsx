import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Frontend-heavy product engineer based in Istanbul, building dashboards, portals, automation flows and client-facing web applications.",
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
