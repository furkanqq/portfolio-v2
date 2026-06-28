"use client";
import ResponsiveContainer from "@/components/container";
import education from "@/config/education.config";
import experience from "@/config/experience.config";
import Layout from "@/layout";
import Image from "next/image";
import * as motion from "motion/react-client";
import Marquee from "@/components/marquee";
import Link from "next/link";

const skillGroups = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "SCSS",
      "Framer Motion",
      "GSAP",
      "Jotai",
      "Zustand",
      "Redux Toolkit",
    ],
  },
  {
    title: "Backend & Data",
    items: [
      "Node.js",
      "NestJS",
      "REST APIs",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Supabase",
      "Directus",
      "MS SQL",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    items: [
      "AWS S3",
      "Cloudflare R2",
      "Queue/Worker Flows",
      "VPS Deployment",
      "Railway",
    ],
  },
  {
    title: "Product Experience",
    items: [
      "Dashboards",
      "Admin Panels",
      "Client Portals",
      "QR Systems",
      "Media Upload Workflows",
      "Crypto Exchange",
      "NFT Marketplace",
    ],
  },
  {
    title: "Integrations",
    items: [
      "Web3",
      "Email Automation",
      "Analytics",
      "Salesforce",
      "WorkOS",
      "Stripe",
    ],
  },
  {
    title: "Familiar With",
    items: ["C#", "ASP.NET Core MVC", "Solidity", "Shopify Liquid", "Astro"],
  },
];

export default function About() {
  return (
    <Layout className="font-kode relative">
      <ResponsiveContainer size="xl" className="mb-20 md:mb-40">
        <section className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10 md:mb-20">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-52 h-52 overflow-hidden rounded-full"
          >
            <Image
              src={"/me.jpeg"}
              alt="me"
              fill
              className="object-cover"
              fetchPriority="high"
              priority
            />
          </motion.div>
          <div className="w-full md:w-2/3 flex flex-col gap-4 md:gap-10 justify-between">
            <div>
              <motion.h1
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="font-bold text-3xl md:text-5xl mb-3"
              >
                I am Furkan Ilhan.
              </motion.h1>
              <motion.p
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.7 }}
                className="text-gray-600"
              >
                I&apos;m a frontend-heavy product engineer based in Istanbul,
                building dashboards, portals, automation flows and client-facing
                web applications with React, Next.js and TypeScript.
              </motion.p>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.9 }}
            >
              <p className="text-gray-600">
                My experience includes admin panels, partner portals, Web3
                interfaces, QR-based systems, media upload workflows and small
                backend integrations. I use AI tools to move faster, but I stay
                responsible for architecture, code review, edge cases and
                product quality.
              </p>
            </motion.div>
          </div>
        </section>
        <div className="flex flex-col gap-5 mb-12 md:mb-16">
          <motion.h2
            whileInView={{ opacity: [0, 0.5, 1] }}
            className="font-bold text-2xl md:text-3xl"
          >
            My Skills
          </motion.h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {skillGroups.map((group, index) => (
              <motion.section
                initial={{ opacity: 0, translateY: "40%" }}
                animate={{ opacity: 1, translateY: "0%" }}
                transition={{ delay: 0.2 + index / 10 }}
                key={group.title}
                className="rounded-md border border-gray-100 bg-gray-50 p-4"
              >
                <h3 className="mb-3 text-base font-semibold text-gray-950">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      className="rounded-md bg-white px-2 py-1 text-xs text-gray-700 shadow-xs"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>
        </div>

        <section className="flex flex-col gap-5 mb-4 md:mb-16">
          <motion.h2
            whileInView={{ opacity: [0, 0.5, 1] }}
            className="font-bold text-2xl md:text-3xl"
          >
            Education
          </motion.h2>

          <ol className="items-center sm:flex md:gap-3">
            {education.map((edu, index) => (
              <motion.li
                whileInView={{ opacity: [0, 0.5, 1] }}
                transition={{ duration: 1 + index / 5 }}
                className=" md:w-1/3 h-[160px] relative mb-2 sm:mb-0"
                key={index}
              >
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <svg
                      className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <article className="mt-3 sm:pe-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {edu.title}
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {edu.date}
                  </time>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    {edu.name}
                  </p>
                </article>
              </motion.li>
            ))}
          </ol>
        </section>

        <section className="flex flex-col gap-5 mb-16">
          <motion.h2
            whileInView={{ opacity: [0, 0.5, 1] }}
            transition={{ duration: 1 }}
            className="font-bold text-2xl md:text-3xl"
          >
            Professional Experience
          </motion.h2>

          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            {experience.map((exp, index) => (
              <motion.li
                whileInView={{ opacity: [0, 0.5, 1] }}
                transition={{ duration: 1 + index }}
                className="mb-10 ms-6"
                key={index}
              >
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <article>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    {exp.title}
                    {/* <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">
                    Latest
                  </span> */}
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {exp.date}
                  </time>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    {exp.info}
                  </p>
                </article>
              </motion.li>
            ))}
          </ol>
        </section>
      </ResponsiveContainer>
      <motion.div
        className="absolute w-full left-0 bottom-20 md:bottom-30 border-[4px] border-double scale-[1] bg-black"
        whileHover={{ scale: 1.22, rotate: "-2deg" }}
      >
        <Link href={"/projects"}>
          <Marquee speed={100}>
            <div className="text-2xl md:text-6xl uppercase text-white">
              <span>Click for my projects</span>
              <span className="mx-4">-</span>
            </div>
          </Marquee>
        </Link>
      </motion.div>
    </Layout>
  );
}
