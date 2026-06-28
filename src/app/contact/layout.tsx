import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Open to remote frontend roles, product-focused web applications, dashboard projects and freelance collaborations.",
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
