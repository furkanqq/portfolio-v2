import type { ReactNode } from "react";
import Image from "next/image";

type MarkdownBlock =
  | { type: "heading"; level: number; text: string }
  | { type: "paragraph"; text: string }
  | { type: "code"; language: string; code: string }
  | { type: "image"; alt: string; src: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "hr" };

export function MarkdownContent({ content }: { content: string }) {
  const blocks = parseMarkdown(content);

  return (
    <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700 md:text-lg md:leading-8">
      {blocks.map((block, index) => renderBlock(block, index))}
    </div>
  );
}

function parseMarkdown(markdown: string) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: MarkdownBlock[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed) {
      index += 1;
      continue;
    }

    if (trimmed.startsWith("```")) {
      const language = trimmed.slice(3).trim();
      const codeLines = [];
      index += 1;

      while (index < lines.length && !lines[index].trim().startsWith("```")) {
        codeLines.push(lines[index]);
        index += 1;
      }

      blocks.push({
        type: "code",
        language,
        code: codeLines.join("\n"),
      });
      index += 1;
      continue;
    }

    const heading = trimmed.match(/^(#{1,6})\s+(.+)$/);

    if (heading) {
      blocks.push({
        type: "heading",
        level: heading[1].length,
        text: heading[2].trim(),
      });
      index += 1;
      continue;
    }

    if (/^-{3,}$/.test(trimmed)) {
      blocks.push({ type: "hr" });
      index += 1;
      continue;
    }

    const image = trimmed.match(/^!\[([^\]]*)\]\((\/[^)\s]+)\)$/);

    if (image) {
      blocks.push({
        type: "image",
        alt: image[1].trim(),
        src: image[2].trim(),
      });
      index += 1;
      continue;
    }

    if (/^>\s?/.test(trimmed)) {
      const quoteLines = [];

      while (index < lines.length && /^>\s?/.test(lines[index].trim())) {
        quoteLines.push(lines[index].trim().replace(/^>\s?/, ""));
        index += 1;
      }

      blocks.push({ type: "quote", text: quoteLines.join(" ") });
      continue;
    }

    if (/^[-*+]\s+/.test(trimmed)) {
      const items = [];

      while (index < lines.length && /^[-*+]\s+/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^[-*+]\s+/, ""));
        index += 1;
      }

      blocks.push({ type: "list", items });
      continue;
    }

    const paragraph = [trimmed];
    index += 1;

    while (
      index < lines.length &&
      lines[index].trim() &&
      !isSpecialLine(lines[index].trim())
    ) {
      paragraph.push(lines[index].trim());
      index += 1;
    }

    blocks.push({ type: "paragraph", text: paragraph.join(" ") });
  }

  return blocks;
}

function isSpecialLine(line: string) {
  return (
    line.startsWith("```") ||
    /^#{1,6}\s+/.test(line) ||
    /^[-*+]\s+/.test(line) ||
    /^!\[[^\]]*\]\(\/[^)\s]+\)$/.test(line) ||
    /^>\s?/.test(line) ||
    /^-{3,}$/.test(line)
  );
}

function renderBlock(block: MarkdownBlock, index: number) {
  switch (block.type) {
    case "heading":
      return renderHeading(block.level, block.text, index);
    case "paragraph":
      return (
        <p className="my-5 text-gray-700" key={index}>
          {renderInline(block.text)}
        </p>
      );
    case "code":
      return (
        <pre
          className="my-6 overflow-x-auto rounded-md border border-gray-200 bg-black p-4 text-sm leading-6 text-white"
          key={index}
        >
          {block.language && (
            <span className="mb-3 block text-xs uppercase tracking-[0.2em] text-gray-400">
              {block.language}
            </span>
          )}
          <code>{block.code}</code>
        </pre>
      );
    case "image":
      return (
        <figure className="my-8" key={index}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-gray-200 bg-gray-50">
            <Image
              alt={block.alt}
              className="object-contain"
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              src={block.src}
            />
          </div>
          {block.alt && (
            <figcaption className="mt-3 text-center text-sm text-gray-500">
              {block.alt}
            </figcaption>
          )}
        </figure>
      );
    case "list":
      return (
        <ul className="my-5 list-disc space-y-2 pl-5 text-gray-700 marker:text-indigo-500" key={index}>
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex}>{renderInline(item)}</li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote
          className="my-6 border-l-4 border-indigo-500 bg-gray-50 px-4 py-3 text-gray-800"
          key={index}
        >
          {renderInline(block.text)}
        </blockquote>
      );
    case "hr":
      return <hr className="my-8 border-gray-200" key={index} />;
  }
}

function renderHeading(level: number, text: string, key: number) {
  const content = renderInline(text);

  if (level <= 1) {
    return (
      <h2 className="mb-3 mt-10 text-2xl font-semibold tracking-tight text-gray-950 md:text-3xl" key={key}>
        {content}
      </h2>
    );
  }

  if (level === 2) {
    return (
      <h3 className="mb-3 mt-8 text-xl font-semibold tracking-tight text-gray-950 md:text-2xl" key={key}>
        {content}
      </h3>
    );
  }

  return (
    <h4 className="mb-2 mt-6 text-lg font-semibold tracking-tight text-gray-950" key={key}>
      {content}
    </h4>
  );
}

function renderInline(text: string) {
  const nodes: ReactNode[] = [];
  const pattern = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const value = match[0];
    const key = `${match.index}-${value}`;

    if (value.startsWith("**")) {
      nodes.push(
        <strong className="font-semibold text-gray-950" key={key}>
          {value.slice(2, -2)}
        </strong>
      );
    } else if (value.startsWith("`")) {
      nodes.push(
        <code className="rounded bg-gray-100 px-1.5 py-0.5 text-[0.9em] text-gray-950" key={key}>
          {value.slice(1, -1)}
        </code>
      );
    } else {
      const link = value.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      const href = link?.[2] ?? "";
      const isSafeLink = href.startsWith("/") || href.startsWith("http://") || href.startsWith("https://");

      nodes.push(
        isSafeLink ? (
          <a
            className="font-semibold text-indigo-600 underline-offset-4 hover:underline"
            href={href}
            key={key}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            target={href.startsWith("http") ? "_blank" : undefined}
          >
            {link?.[1]}
          </a>
        ) : (
          value
        )
      );
    }

    lastIndex = match.index + value.length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}
