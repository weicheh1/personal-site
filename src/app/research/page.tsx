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
      <PageHeader title="Research" description={siteConfig.major} />

      <section className="mb-12">
        <h2 className="font-serif text-2xl text-foreground">Research Interests</h2>
        <p className="mt-4 leading-relaxed text-foreground/85">
          {siteConfig.researchStatement}
        </p>
        <ul className="mt-5 space-y-1.5 text-[1.02rem] text-foreground/85">
          {siteConfig.interests.map((interest) => (
            <li key={interest} className="flex gap-3">
              <span className="mt-[0.7em] h-px w-4 shrink-0 bg-accent" />
              {interest}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-8">
        <h2 className="font-serif text-2xl text-foreground">Selected Projects</h2>
        {researchProjects.map((project) => (
          <article
            key={project.title}
            className="border-l-2 border-rule pl-5"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-serif text-xl text-foreground">
                {project.title}
              </h3>
              <span className="text-xs tracking-wide text-muted italic">
                {project.status}
              </span>
            </div>
            <p className="mt-2 leading-relaxed text-muted">
              {project.description}
            </p>
            <p className="mt-3 text-sm text-muted/90">
              {project.tags.join(" · ")}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}
