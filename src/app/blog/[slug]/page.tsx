import { MarkdownContent } from "@/components/blog/markdown-content";
import Layout from "@/layout";
import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { ArrowLeft, Clock3 } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const posts = await getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: "Blog | Furkan Ilhan",
    };
  }

  return {
    title: `${post.title} | Furkan Ilhan`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.cover,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <Layout className="font-kode">
      <article className="mx-auto max-w-5xl pb-12">
        <Link
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-gray-950"
          href="/blog"
        >
          <ArrowLeft className="h-4 w-4" />
          Blog
        </Link>

        <header className="mb-7">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-500">
            <span className="rounded-md border border-gray-200 px-3 py-1">
              Blog
            </span>
            <span className="inline-flex items-center gap-2 rounded-md bg-gray-100 px-3 py-1 normal-case tracking-normal text-gray-700">
              <Clock3 className="h-3.5 w-3.5" />
              {post.readingTime}
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            {post.excerpt}
          </p>
        </header>

        <div className="relative mb-10 aspect-[16/10] overflow-hidden rounded-md border border-gray-100 bg-gray-100 md:aspect-[16/7]">
          <Image
            alt={post.title}
            className="object-cover"
            fill
            priority
            sizes="(min-width: 1024px) 960px, 100vw"
            src={post.cover}
          />
        </div>

        <MarkdownContent content={post.content} />
      </article>
    </Layout>
  );
}
