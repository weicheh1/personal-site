import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { cv, type CvBullet, type CvEntry } from "@/data/cv";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "CV",
};

function CvSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8">
      <h2 className="font-serif border-b border-rule pb-1 text-xl text-foreground">
        {title}
      </h2>
      <div className="mt-4 space-y-6">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: CvBullet[] }) {
  return (
    <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted">
      {items.map((item) => {
        if (typeof item === "string") {
          return <li key={item}>{item}</li>;
        }
        return (
          <li key={item.text}>
            {item.text}
            {item.children && item.children.length > 0 && (
              <ul className="mt-1 list-disc space-y-1 pl-5">
                {item.children.map((child) => (
                  <li key={child}>{child}</li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function CvEntryBlock({ entry }: { entry: CvEntry }) {
  return (
    <article>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="font-serif text-[1.05rem] text-foreground">{entry.heading}</h3>
          <p className="text-sm font-medium text-muted">{entry.subheading}</p>
          {entry.location && (
            <p className="text-xs text-muted/80">{entry.location}</p>
          )}
        </div>
        <p className="shrink-0 text-sm text-muted">{entry.period}</p>
      </div>
      {entry.bullets && entry.bullets.length > 0 && (
        <BulletList items={entry.bullets} />
      )}
    </article>
  );
}

export default function CvPage() {
  return (
    <div>
      <PageHeader
        title="Curriculum Vitae"
        description="Download the full PDF or read the web version below."
      />

      <div className="mb-10">
        <a
          href={siteConfig.cvPdf}
          download="CV_WeiCheHsu.pdf"
          className="btn-primary"
        >
          Download CV (PDF)
        </a>
      </div>

      <div className="border border-border bg-surface p-6 sm:p-8">
        <header className="mb-8 border-b border-border pb-6 text-center sm:text-left">
          <h2 className="font-serif text-2xl text-foreground">{siteConfig.name}</h2>
          <p className="mt-1 text-sm text-muted">{siteConfig.title}</p>
          <p className="mt-1 text-sm text-muted">{siteConfig.institution}</p>
          <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-muted sm:justify-start">
            <span>{siteConfig.email}</span>
            <span>{siteConfig.location}</span>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover"
            >
              LinkedIn
            </a>
          </div>
        </header>

        <CvSection title="Education">
          {cv.education.map((item) => (
            <CvEntryBlock key={`${item.heading}-${item.period}`} entry={item} />
          ))}
        </CvSection>

        <CvSection title="Professional Experience">
          {cv.experience.map((item) => (
            <CvEntryBlock
              key={`${item.heading}-${item.period}`}
              entry={item}
            />
          ))}
        </CvSection>

        <CvSection title="Research Experience">
          {cv.research.map((item) => (
            <CvEntryBlock key={item.heading} entry={item} />
          ))}
        </CvSection>

        <CvSection title="Teaching Experience">
          {cv.teaching.map((item) => (
            <CvEntryBlock key={item.heading} entry={item} />
          ))}
        </CvSection>

        <CvSection title="Honors & Awards">
          <ul className="space-y-3">
            {cv.awards.map((award) => (
              <li key={award.title}>
                <p className="font-medium text-foreground">{award.title}</p>
                <p className="text-sm text-muted">
                  {award.org} · {award.period}
                </p>
              </li>
            ))}
          </ul>
        </CvSection>

        <CvSection title="Relevant Coursework">
          <div className="space-y-4">
            {cv.coursework.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-semibold text-foreground">
                  {group.category}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {group.items}
                </p>
              </div>
            ))}
          </div>
        </CvSection>

        <CvSection title="Programming & Analytical Tools">
          <div className="grid gap-4 sm:grid-cols-2">
            {cv.tools.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-semibold text-foreground">
                  {group.category}
                </h3>
                <p className="mt-1 text-sm text-muted">{group.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </CvSection>
      </div>
    </div>
  );
}
