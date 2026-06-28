import Layout from "@/layout";
import { getBlogPosts } from "@/lib/blog";
import { ArrowUpRight, BookOpenText } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Furkan Ilhan",
  description:
    "Technical notes in Turkish about frontend development, Next.js, security, tooling and real-world development problems.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <Layout className="font-kode">
      <div className="flex flex-col gap-6 pb-6 md:flex-row md:items-end md:justify-between">
        <section className="w-full">
          <span className="mb-3 inline-flex items-center rounded-md border border-gray-200 px-3 py-1 text-xs uppercase tracking-[0.2em] text-gray-500">
            Blog
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            Blog
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-gray-600">
            Technical notes in Turkish about frontend development, Next.js,
            security, tooling and real-world development problems.
          </p>
        </section>

        <div className="hidden min-w-56 rounded-md border border-gray-100 bg-gray-50 p-5 md:block">
          <BookOpenText className="mb-4 h-7 w-7 text-gray-900" />
          <p className="text-sm text-gray-600">
            Practical notes kept concise for scanning and real-world use.
          </p>
        </div>
      </div>

      {posts.length > 0 ? (
        <section className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <Link
              className="group block cursor-[url('/click-cursor.png')_14_12,_pointer]"
              href={`/blog/${post.slug}`}
              key={post.slug}
            >
              <article className="h-full overflow-hidden rounded-md border border-gray-100 bg-white transition duration-300 group-hover:-translate-y-1 group-hover:border-indigo-200 group-hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
                <div className="relative h-52 overflow-hidden bg-gray-100 md:h-60">
                  <Image
                    alt={post.title}
                    className="object-cover transition duration-500 group-hover:scale-105"
                    fill
                    priority
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    src={post.cover}
                  />
                  <div className="absolute left-3 top-3 z-30 rounded-md bg-white/90 px-3 py-1 text-xs font-medium text-gray-800 backdrop-blur">
                    {post.readingTime}
                  </div>
                </div>

                <div className="flex min-h-56 flex-col justify-between p-4 md:p-5">
                  <div>
                    <div className="mb-3 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600"
                          key={tag}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-gray-950">
                      {post.title}
                    </h3>
                    <p className="mt-3 line-clamp-4 text-sm leading-6 text-gray-600">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center gap-2 text-sm font-medium text-gray-950">
                    Read article
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </section>
      ) : (
        <div className="rounded-md border border-dashed border-gray-300 p-8 text-sm text-gray-600">
          Blog yazısı bulunamadı.
        </div>
      )}
    </Layout>
  );
}
