"use client";
import { TiltCard } from "@/components/card3D";
import Layout from "@/layout";
import Link from "next/link";
import * as motion from "motion/react-client";
import Image from "next/image";
import portfolio, { PortfolioType } from "@/config/protfolio.config";
import { Code, Link2, LinkIcon, MousePointerClickIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Projects() {
  return (
    <Layout className="font-kode">
      <div className="pb-4 flex">
        <section className=" w-full">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            Projects
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Every project is a journey of learning.
          </p>
        </section>
        <Link href={"/contact"} className="hidden md:block">
          <TiltCard />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {portfolio.map((project, i) => (
          <Card project={project} className="w-full h-64 md:h-96" key={i} />
        ))}
      </div>
    </Layout>
  );
}

const cornerVariants = {
  initial: { opacity: 0, scale: 0.5 },
  hover: { opacity: 1, scale: 1.2 },
};
const clickVariants = {
  initial: { opacity: 0, scale: 1.1 },
  hover: { opacity: 1, scale: 0.95 },
};

const Card = ({
  className,
  project,
}: {
  className?: string;
  project: PortfolioType;
}) => {
  const paramArray = project.params.split(",").map((item) => item.trim());

  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      whileHover="hover"
      initial="initial"
      className={
        "relative border-1 border-gray-100 border-solid rounded-md cursor-pointer" +
        (className ? ` ${className}` : "")
      }
    >
      {/* Corner top-left */}
      <motion.div
        variants={cornerVariants}
        transition={{ duration: 0.3 }}
        className="absolute top-[-4px] left-[-4px] w-6 h-6 border-t-4 border-l-4 border-indigo-500 z-30 rounded-[2px]"
      />
      {/* Corner top-right */}
      <motion.div
        variants={cornerVariants}
        transition={{ duration: 0.3 }}
        className="absolute top-[-4px] right-[-4px] w-6 h-6 border-t-4 border-r-4 border-indigo-500 z-30 rounded-[2px]"
      />
      {/* Corner bottom-left */}
      <motion.div
        variants={cornerVariants}
        transition={{ duration: 0.3 }}
        className="absolute bottom-[-4px] left-[-4px] w-6 h-6 border-b-4 border-l-4 border-indigo-500 z-30 rounded-[2px]"
      />
      {/* Corner bottom-right */}
      <motion.div
        variants={cornerVariants}
        transition={{ duration: 0.3 }}
        className="absolute bottom-[-4px] right-[-4px] w-6 h-6 border-b-4 border-r-4 border-indigo-500 z-30 rounded-[2px]"
      />

      <Dialog>
        <DialogTrigger>
          <motion.div
            variants={clickVariants}
            transition={{ duration: 0.3 }}
            className="absolute cursor-pointer z-10 h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center flex-col bg-black/50 rounded-sm text-white text-2xl select-none"
          >
            <MousePointerClickIcon className="w-10 h-10" />
            <span>Click</span>
          </motion.div>
        </DialogTrigger>
        <DialogContent className="font-kode">
          <DialogHeader>
            <DialogTitle className="text-2xl">{project.title}</DialogTitle>
            <DialogDescription>{project.desc}</DialogDescription>
            <DialogDescription className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
              {paramArray.map((param, i) => (
                <span
                  className="bg-gray-200 px-2 py-1 w-36 rounded-4xl text-xs flex-1 text-center"
                  key={i}
                >
                  {param}
                </span>
              ))}
            </DialogDescription>
            <DialogDescription className="flex gap-2 justify-end mt-2">
              {project.visit && (
                <Tooltip>
                  <TooltipTrigger className="w-20">
                    <Link
                      target="_blank"
                      href={project.link}
                      className="border flex justify-center items-center p-2 bg-black rounded-md cursor-pointer !w-full"
                    >
                      <Link2 className="w-5 h-5 text-white" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Website Link</p>
                  </TooltipContent>
                </Tooltip>
              )}
              {project.githubLink && (
                <Tooltip>
                  <TooltipTrigger className="w-20">
                    <Link
                      target="_blank"
                      href={project.githubLink}
                      className="border flex justify-center items-center p-2 bg-black rounded-md cursor-pointer"
                    >
                      <Code className="w-5 h-5 text-white" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Github Link</p>
                  </TooltipContent>
                </Tooltip>
              )}
              {!project.visit && !project.githubLink && (
                <div className="text-center ">
                  Due to legal reasons, the source code and content cannot be
                  shared.
                </div>
              )}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <motion.div className="absolute z-0 top-0 h-full w-full rounded-md overflow-hidden">
        <Image
          src={project.img}
          alt="Project Screenshot"
          fill
          objectFit="cover"
          priority
        />
      </motion.div>
    </motion.div>
  );
};
