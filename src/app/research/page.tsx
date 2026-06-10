import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { researchProjects } from "@/data/research";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Research",
};

export default function ResearchPage() {
  return (
    <div>
      <PageHeader
        title="Research"
        description="Simulation-optimization, stochastic modeling, and data-driven decision-making for manufacturing and large-scale operational systems."
      />

      <section className="mb-10">
        <h2 className="text-lg font-semibold text-foreground">Interests</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {siteConfig.interests.map((interest) => (
            <span
              key={interest}
              className="rounded-lg border border-border bg-surface px-4 py-2 text-sm"
            >
              {interest}
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-lg font-semibold text-foreground">Projects</h2>
        {researchProjects.map((project) => (
          <article
            key={project.title}
            className="rounded-xl border border-border bg-surface p-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg font-semibold text-foreground">
                {project.title}
              </h3>
              <span className="rounded-full bg-accent/15 px-3 py-0.5 text-xs font-medium text-accent">
                {project.status}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-surface-elevated px-2.5 py-0.5 text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
