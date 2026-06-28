import { Banner } from "@/components/banner";
import Layout from "@/layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend-heavy Product Engineer",
  description:
    "I build frontend-heavy business systems, dashboards and client-facing web applications with React, Next.js and TypeScript.",
};

export default function Home() {
  return (
    <Layout className="font-kode">
      <Banner />
    </Layout>
  );
}
