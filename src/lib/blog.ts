import { promises as fs } from "fs";
import path from "path";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  cover: string;
  readingTime: string;
  tags: string[];
};

type BlogFrontmatter = {
  title?: string;
  description?: string;
  cover?: string;
  tags?: string[];
};

const BLOG_DIR = path.join(process.cwd(), "public", "blog");
const PUBLIC_DIR = path.join(process.cwd(), "public");
const DEFAULT_COVER = "/blog-1-banner.webp";

export async function getBlogPosts() {
  const files = await getBlogFiles();
  const posts = await Promise.all(
    files.map((file, index) => getBlogPost(file.replace(/\.md$/, ""), index))
  );

  return posts
    .filter((post): post is BlogPost => Boolean(post))
    .sort((a, b) => a.title.localeCompare(b.title));
}

export async function getBlogPost(slug: string, coverIndex?: number) {
  if (!/^[a-z0-9-]+$/i.test(slug)) {
    return null;
  }

  try {
    const filePath = path.join(BLOG_DIR, `${slug}.md`);
    const raw = await fs.readFile(filePath, "utf8");
    const { frontmatter, content } = parseFrontmatter(raw);
    const title = frontmatter.title ?? extractTitle(content) ?? titleFromSlug(slug);
    const body = removeFirstTitle(content);
    const excerpt =
      frontmatter.description ?? extractExcerpt(content) ?? "Frontend notes.";
    const cover = await resolveCover(frontmatter.cover, slug, coverIndex);

    return {
      slug,
      title,
      excerpt,
      content: body,
      cover,
      readingTime: getReadingTime(content),
      tags: frontmatter.tags ?? inferTags(title),
    };
  } catch {
    return null;
  }
}

async function getBlogFiles() {
  try {
    const files = await fs.readdir(BLOG_DIR);
    return files.filter((file) => file.endsWith(".md")).sort();
  } catch {
    return [];
  }
}

async function resolveCover(
  frontmatterCover: string | undefined,
  slug: string,
  coverIndex: number | undefined
) {
  if (frontmatterCover) {
    return normalizeCoverPath(frontmatterCover);
  }

  const blogIndex = coverIndex ?? (await getBlogIndex(slug));
  const candidates = [
    `/${slug}-banner.webp`,
    `/${slug}.webp`,
    blogIndex >= 0 ? `/blog-${blogIndex + 1}-banner.webp` : "",
    DEFAULT_COVER,
  ].filter(Boolean);

  for (const candidate of candidates) {
    if (await publicFileExists(candidate)) {
      return candidate;
    }
  }

  return DEFAULT_COVER;
}

async function getBlogIndex(slug: string) {
  const files = await getBlogFiles();
  return files.findIndex((file) => file.replace(/\.md$/, "") === slug);
}

async function publicFileExists(publicPath: string) {
  try {
    await fs.access(path.join(PUBLIC_DIR, publicPath.replace(/^\//, "")));
    return true;
  } catch {
    return false;
  }
}

function normalizeCoverPath(cover: string) {
  if (cover.startsWith("/") || cover.startsWith("http")) {
    return cover;
  }

  return `/${cover}`;
}

function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);

  if (!match) {
    return { frontmatter: {}, content: raw.trim() };
  }

  const frontmatter = match[1].split("\n").reduce<BlogFrontmatter>(
    (acc, line) => {
      const [key, ...valueParts] = line.split(":");
      const value = valueParts.join(":").trim();

      if (!key || !value) {
        return acc;
      }

      const cleanKey = key.trim() as keyof BlogFrontmatter;

      if (cleanKey === "tags") {
        acc.tags = value
          .replace(/^\[|\]$/g, "")
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean);
        return acc;
      }

      if (cleanKey === "title" || cleanKey === "description" || cleanKey === "cover") {
        acc[cleanKey] = value.replace(/^["']|["']$/g, "");
      }

      return acc;
    },
    {}
  );

  return {
    frontmatter,
    content: raw.slice(match[0].length).trim(),
  };
}

function extractTitle(content: string) {
  const match = content.match(/^#\s+(.+)$/m);
  return match?.[1]?.trim();
}

function removeFirstTitle(content: string) {
  return content.replace(/^\s*#\s+.+\n+/, "").trim();
}

function extractExcerpt(content: string) {
  const withoutTitle = removeFirstTitle(content);
  const paragraph = withoutTitle
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .find((block) => block && !block.startsWith("#") && !block.startsWith("```"));

  return paragraph ? stripMarkdown(paragraph) : null;
}

function stripMarkdown(value: string) {
  return value
    .replace(/```[\s\S]*?```/g, "")
    .replace(/[#>*_`-]/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .map((word) => {
      if (word.toLowerCase() === "nextjs") {
        return "Next.js";
      }

      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function getReadingTime(content: string) {
  const words = stripMarkdown(content).split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 180))} dk okuma`;
}

function inferTags(title: string) {
  const tags = [];

  if (/next\.?js/i.test(title)) {
    tags.push("Next.js");
  }

  return tags.length ? tags : ["Blog"];
}
