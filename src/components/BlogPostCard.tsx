import Link from "next/link";
import type { BlogPost } from "@/data/blog";
import { formatDate } from "@/lib/utils";

export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <article className="group rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/40">
      <time className="text-xs text-muted">{formatDate(post.date)}</time>
      <h3 className="mt-2 text-lg font-semibold text-foreground group-hover:text-accent">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{post.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-surface-elevated px-2.5 py-0.5 text-xs text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
