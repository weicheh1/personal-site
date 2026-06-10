import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { BlogPostCard } from "@/components/BlogPostCard";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div>
      <PageHeader
        title="Blog"
        description="Notes on research, graduate school, and things I'm learning along the way."
      />

      <div className="space-y-6">
        {sorted.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
