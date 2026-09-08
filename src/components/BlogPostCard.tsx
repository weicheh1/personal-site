import Link from "next/link";
import type { BlogPost } from "@/data/blog";
import { formatDate } from "@/lib/utils";

export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <article className="border-b border-border pb-6 last:border-0">
      <time className="text-xs tracking-wide text-muted">
        {formatDate(post.date)}
      </time>
      <h3 className="mt-1 font-serif text-xl text-foreground">
        <Link href={`/blog/${post.slug}`} className="hover:text-accent">
          {post.title}
        </Link>
      </h3>
      <p className="mt-2 leading-relaxed text-muted">{post.summary}</p>
      <p className="mt-3 text-sm text-muted/90">{post.tags.join(" · ")}</p>
    </article>
  );
}
