"use client";

import { TiltCard } from "@/components/card3D";
import Layout from "@/layout";
import Link from "next/link";
import * as motion from "motion/react-client";
import Image from "next/image";
import portfolio, { PortfolioType } from "@/config/portfolio.config";
import { ArrowUpRight, Code, Link2 } from "lucide-react";
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

const sortedProjects = [...portfolio].sort(
  (a, b) => (a.priority ?? 99) - (b.priority ?? 99)
);
const featuredProjects = sortedProjects.filter((project) => project.featured);
const additionalProjects = sortedProjects.filter((project) => !project.featured);

const projectsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: sortedProjects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SoftwareApplication",
      name: project.title,
      applicationCategory: project.category ?? "WebApplication",
      description: `${project.type}. ${project.shortDescription}`,
      url: project.liveUrl ?? "https://www.furkanilhan.com/projects",
    },
  })),
};

export default function Projects() {
  return (
    <Layout className="font-kode">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />

      <div className="pb-6 flex">
        <section className="w-full">
          <span className="mb-3 inline-flex items-center rounded-md border border-gray-200 px-3 py-1 text-xs uppercase tracking-[0.2em] text-gray-500">
            Projects
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            Featured Projects
          </h1>
          <p className="mt-2 max-w-3xl text-sm text-gray-600">
            Selected work that highlights business-focused web applications,
            dashboards, portals and automation systems.
          </p>
        </section>
        <Link href={"/contact"} className="hidden md:block">
          <TiltCard />
        </Link>
      </div>

      <section
        aria-label="Featured project case studies"
        className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3"
      >
        {featuredProjects.map((project) => (
          <ProjectCard
            project={project}
            variant="featured"
            key={project.title}
          />
        ))}
      </section>

      <section className="mt-12 md:mt-16">
        <div className="mb-5">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
            Additional Projects
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-gray-600">
            Other client work, experiments, product concepts and technical
            projects.
          </p>
        </div>

        <div
          aria-label="Additional projects"
          className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4"
        >
          {additionalProjects.map((project) => (
            <ProjectCard
              project={project}
              variant="additional"
              key={project.title}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}

const cornerVariants = {
  initial: { opacity: 0, scale: 0.5 },
  hover: { opacity: 1, scale: 1.1 },
};

const ProjectCard = ({
  project,
  variant,
}: {
  project: PortfolioType;
  variant: "featured" | "additional";
}) => {
  const isFeatured = variant === "featured";
  const stackPreview = project.stack.slice(0, isFeatured ? 4 : 3);
  const hiddenStackCount = project.stack.length - stackPreview.length;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.button
          type="button"
          whileTap={{ scale: 0.985 }}
          whileHover="hover"
          initial="initial"
          aria-label={`Open ${project.title} ${project.type} project details`}
          className={[
            "group relative flex cursor-[url('/click-cursor.png')_14_12,_pointer] flex-col overflow-hidden rounded-md border border-gray-100 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500",
            isFeatured ? "h-[380px]" : "h-[340px]",
          ].join(" ")}
        >
          <CardCorners />

          <div
            className={[
              "relative w-full overflow-hidden bg-gray-950",
              isFeatured ? "h-[62%]" : "h-[58%]",
            ].join(" ")}
          >
            <Image
              src={project.image}
              alt={`${project.title} ${project.type} project screenshot`}
              fill
              className="object-cover object-center transition duration-500 group-hover:scale-105"
              sizes={
                isFeatured
                  ? "(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  : "(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
              }
              priority={isFeatured}
              fetchPriority={isFeatured ? "high" : "auto"}
            />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/25 to-transparent opacity-70 transition duration-300 group-hover:opacity-90" />
          </div>

          <div className="relative z-20 flex min-w-0 flex-1 flex-col justify-between border-t border-gray-100 bg-white p-4">
            <div className="min-w-0">
              <p className="truncate text-[10px] uppercase tracking-[0.18em] text-gray-500">
                {project.type}
              </p>
              <h2
                className={
                  isFeatured
                    ? "mt-1.5 truncate text-2xl font-semibold leading-tight text-gray-950"
                    : "mt-1.5 truncate text-xl font-semibold leading-tight text-gray-950"
                }
                title={project.title}
              >
                {project.title}
              </h2>
              <p className="mt-1.5 line-clamp-2 text-sm leading-5 text-gray-600">
                {project.shortDescription}
              </p>
            </div>

            <div className="min-w-0">
              <div className="mt-3 flex flex-nowrap gap-1.5 overflow-hidden">
                {stackPreview.map((stack) => (
                  <span
                    className={[
                      "inline-block min-w-0 shrink truncate whitespace-nowrap rounded-md bg-gray-100 px-2 py-1 text-[11px] leading-4 text-gray-700",
                      isFeatured ? "max-w-[190px]" : "max-w-[135px]",
                    ].join(" ")}
                    key={stack}
                    title={stack}
                  >
                    {stack}
                  </span>
                ))}
                {hiddenStackCount > 0 && (
                  <span className="inline-block shrink-0 whitespace-nowrap rounded-md bg-gray-100 px-2 py-1 text-[11px] leading-4 text-gray-700">
                    +{hiddenStackCount}
                  </span>
                )}
              </div>
              <div
                className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-gray-950 opacity-80 transition duration-300 group-hover:opacity-100"
                aria-hidden="true"
              >
                View Case Study
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </div>
              <span className="sr-only">
                Open {project.title} project details
              </span>
            </div>
          </div>
        </motion.button>
      </DialogTrigger>

      <ProjectDialogContent project={project} />
    </Dialog>
  );
};

const ProjectDialogContent = ({ project }: { project: PortfolioType }) => {
  const hasCaseStudyContent =
    project.problem || project.role || project.solution || project.result;

  return (
    <DialogContent className="font-kode max-h-[90vh] overflow-y-auto sm:max-w-2xl">
      <DialogHeader>
        <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
          {project.type}
        </p>
        <DialogTitle className="text-2xl">{project.title}</DialogTitle>
        <DialogDescription className="leading-6">
          {project.shortDescription}
        </DialogDescription>
      </DialogHeader>

      <div className="grid gap-4 text-sm text-gray-600">
        {project.workedOn && project.workedOn.length > 0 && (
          <section>
            <h3 className="mb-2 text-sm font-semibold text-gray-950">
              Worked on
            </h3>
            <ul className="grid gap-2 sm:grid-cols-2">
              {project.workedOn.map((item) => (
                <li
                  className="rounded-md border border-gray-100 bg-gray-50 px-3 py-2 text-xs text-gray-700"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {hasCaseStudyContent ? (
          <>
            {project.problem && (
              <CaseStudySection title="Problem" body={project.problem} />
            )}
            {project.role && (
              <CaseStudySection title="My Role" body={project.role} />
            )}
            {project.solution && (
              <CaseStudySection title="Solution" body={project.solution} />
            )}
          </>
        ) : (
          <CaseStudySection title="Overview" body={project.shortDescription} />
        )}

        <section>
          <h3 className="mb-2 text-sm font-semibold text-gray-950">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((stack) => (
              <span
                className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700"
                key={stack}
              >
                {stack}
              </span>
            ))}
          </div>
        </section>

        {project.infrastructure && (
          <CaseStudySection
            title="Infrastructure"
            body={project.infrastructure}
          />
        )}

        {project.subProjects && project.subProjects.length > 0 && (
          <section>
            <h3 className="mb-2 text-sm font-semibold text-gray-950">
              Related Product Interfaces
            </h3>
            <div className="grid gap-2">
              {project.subProjects.map((subProject) => (
                <article
                  className="rounded-md border border-gray-100 bg-gray-50 p-3"
                  key={subProject.title}
                >
                  <h4 className="text-sm font-semibold text-gray-950">
                    {subProject.title}
                  </h4>
                  <p className="mt-1 leading-6">{subProject.description}</p>
                  {subProject.stack && subProject.stack.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {subProject.stack.map((stack) => (
                        <span
                          className="rounded-md bg-white px-2 py-1 text-[11px] text-gray-700"
                          key={stack}
                        >
                          {stack}
                        </span>
                      ))}
                    </div>
                  )}
                  {subProject.status && (
                    <p className="mt-2 text-xs text-gray-500">
                      {subProject.status}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </section>
        )}

        {project.result && (
          <CaseStudySection title="Result / Status" body={project.result} />
        )}

        {project.status && (
          <p className="rounded-md border border-gray-100 bg-gray-50 px-3 py-2 text-xs text-gray-600">
            {project.status}
          </p>
        )}

        <ProjectLinks project={project} />
      </div>
    </DialogContent>
  );
};

const ProjectLinks = ({ project }: { project: PortfolioType }) => {
  const hasLinks = project.liveUrl || project.caseStudyUrl || project.githubUrl;

  return (
    <section>
      <h3 className="mb-2 text-sm font-semibold text-gray-950">Links</h3>
      <div className="flex flex-wrap gap-2">
        {project.liveUrl && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                target="_blank"
                href={project.liveUrl}
                className="border flex items-center gap-2 rounded-md bg-black px-3 py-2 text-xs font-medium text-white"
              >
                <Link2 className="w-4 h-4" />
                {project.liveLabel ?? "Live Project"}
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Open {project.liveLabel?.toLowerCase() ?? "live project"}</p>
            </TooltipContent>
          </Tooltip>
        )}

        {project.caseStudyUrl && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                target="_blank"
                href={project.caseStudyUrl}
                className="border flex items-center gap-2 rounded-md bg-black px-3 py-2 text-xs font-medium text-white"
              >
                <Link2 className="w-4 h-4" />
                Case Study
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Open case study</p>
            </TooltipContent>
          </Tooltip>
        )}

        {project.githubUrl && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                target="_blank"
                href={project.githubUrl}
                className="border flex items-center gap-2 rounded-md bg-black px-3 py-2 text-xs font-medium text-white"
              >
                <Code className="w-4 h-4" />
                GitHub
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Open source code</p>
            </TooltipContent>
          </Tooltip>
        )}

        {!hasLinks && (
          <span className="rounded-md border border-gray-100 bg-gray-50 px-3 py-2 text-xs text-gray-600">
            Public link is not available for this project.
          </span>
        )}
      </div>
    </section>
  );
};

const CardCorners = () => (
  <>
    <motion.div
      variants={cornerVariants}
      transition={{ duration: 0.3 }}
      className="absolute top-[-4px] left-[-4px] w-6 h-6 border-t-4 border-l-4 border-indigo-500 z-30 rounded-[2px]"
    />
    <motion.div
      variants={cornerVariants}
      transition={{ duration: 0.3 }}
      className="absolute top-[-4px] right-[-4px] w-6 h-6 border-t-4 border-r-4 border-indigo-500 z-30 rounded-[2px]"
    />
    <motion.div
      variants={cornerVariants}
      transition={{ duration: 0.3 }}
      className="absolute bottom-[-4px] left-[-4px] w-6 h-6 border-b-4 border-l-4 border-indigo-500 z-30 rounded-[2px]"
    />
    <motion.div
      variants={cornerVariants}
      transition={{ duration: 0.3 }}
      className="absolute bottom-[-4px] right-[-4px] w-6 h-6 border-b-4 border-r-4 border-indigo-500 z-30 rounded-[2px]"
    />
  </>
);

const CaseStudySection = ({
  title,
  body,
}: {
  title: string;
  body: string;
}) => (
  <section>
    <h3 className="mb-1 text-sm font-semibold text-gray-950">{title}</h3>
    <p className="leading-6">{body}</p>
  </section>
);
