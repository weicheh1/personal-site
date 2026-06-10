export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "first-year-reflections",
    title: "Reflections on Starting a PhD in Industrial Engineering",
    date: "2025-09-15",
    summary:
      "Lessons learned about research, mentorship, and maintaining balance during the first year of graduate school.",
    tags: ["phd-life", "advice"],
    content: `Starting a PhD is equal parts exciting and overwhelming. Here are a few things I wish I had known earlier.

## Find your research rhythm

Reading papers, coding experiments, and writing don't happen in neat blocks. Experiment with different schedules until you find what works.

## Build relationships early

Your cohort and labmates are invaluable. Regular coffee chats and paper discussions accelerate learning more than solo grinding.

## Embrace uncertainty

Not every week will feel productive. Progress in research is rarely linear — trust the process.`,
  },
  {
    slug: "reproducible-research-tips",
    title: "Working with High-Dimensional Data: Practical Tips",
    date: "2025-11-02",
    summary:
      "Notes on preprocessing, variable selection, and avoiding common pitfalls when analyzing datasets with many features.",
    tags: ["research", "high-dimensional data"],
    content: `High-dimensional datasets introduce unique challenges. Here are a few practices that have helped in my work.

## Understand your structure

Before fitting models, explore correlation structure, missingness patterns, and whether sparsity assumptions are reasonable.

## Regularization is your friend

When p >> n, classical methods break down. Penalized regression, screening, and cross-validation are essential tools.

## Validate carefully

With many variables, overfitting is easy. Use rigorous hold-out validation and report uncertainty, not just point estimates.`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
