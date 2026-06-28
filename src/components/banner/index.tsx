"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import * as motion from "motion/react-client";
import Image from "next/image";
import { FileDown, FolderOpen, Mail } from "lucide-react";
import { LettersPullUp } from "../letterPullUp";

function Banner() {
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowName(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const animatedHeading = showName ? "I am Furkan" : "Hello";

  return (
    <div className="relative h-[71vh] md:h-[65vh] w-full overflow-hidden rounded-xl mb-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="w-full h-full absolute z-0"
      >
        <Image
          className="dark:invert object-cover"
          src="/banner_pattern3.png"
          alt="Abstract portfolio background pattern"
          fill
          priority
          fetchPriority="high"
        />
      </motion.div>

      <motion.section className="w-full h-full flex justify-center items-center flex-col gap-6 md:gap-8 absolute z-1 px-4">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-md border border-black/10 bg-white/70 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-gray-700 backdrop-blur"
        >
          FRONTEND-HEAVY PRODUCT ENGINEER
        </motion.p>

        <h1
          aria-label={animatedHeading}
          aria-live="polite"
          className="text-center text-gray-950"
        >
          <span className="sr-only">{animatedHeading}</span>
          <span aria-hidden="true">
            <LettersPullUp
              key={animatedHeading}
              text={animatedHeading}
              className="!font-bold !tracking-normal !leading-none text-4xl md:!text-8xl"
            />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full max-w-3xl text-center text-sm leading-6 text-gray-800 md:text-base"
        >
          I build frontend-heavy business systems, dashboards and client-facing
          web applications with React, Next.js and TypeScript.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="w-full max-w-2xl text-center text-xs leading-5 text-gray-600 md:text-sm"
        >
          Experienced in admin panels, Web3 interfaces, QR-based systems, media
          workflows and automation-focused products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium uppercase text-white transition hover:bg-gray-800"
          >
            <FolderOpen className="h-4 w-4" />
            View Projects
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-black/10 bg-white/80 px-4 py-2 text-sm font-medium uppercase text-gray-950 backdrop-blur transition hover:bg-white"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </Link>
          <Link
            href="/FURKAN-ILHAN-CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-black/10 bg-white/80 px-4 py-2 text-sm font-medium uppercase text-gray-950 backdrop-blur transition hover:bg-white"
          >
            <FileDown className="h-4 w-4" />
            Resume
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
}

export { Banner };
