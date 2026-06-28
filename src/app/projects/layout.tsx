import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Business-focused web applications, dashboards, portals and automation systems built with React, Next.js and TypeScript.",
};

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return children;
}
