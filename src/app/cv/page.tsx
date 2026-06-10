import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { cv } from "@/data/cv";
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
    <section className="mb-10">
      <h2 className="border-b border-border pb-2 text-lg font-semibold text-foreground">
        {title}
      </h2>
      <div className="mt-4 space-y-5">{children}</div>
    </section>
  );
}

function CvEntry({
  heading,
  subheading,
  period,
  details,
}: {
  heading: string;
  subheading: string;
  period: string;
  details: string;
}) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
      <div>
        <h3 className="font-medium text-foreground">{heading}</h3>
        <p className="text-sm text-accent/80">{subheading}</p>
        <p className="mt-1 text-sm text-muted">{details}</p>
      </div>
      <p className="shrink-0 text-sm text-muted">{period}</p>
    </div>
  );
}

export default function CvPage() {
  return (
    <div>
      <PageHeader
        title="Curriculum Vitae"
        description="A summary of my education, experience, and skills."
      />

      <div className="mb-10 flex flex-wrap gap-3">
        <a
          href={siteConfig.cvPdf}
          download="CV_WeiCheHsu.pdf"
          className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-hover glow"
        >
          Download PDF
        </a>
        <a
          href={siteConfig.cvPdf}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground hover:border-accent/50"
        >
          Open in new tab
        </a>
      </div>

      <div className="mb-12 overflow-hidden rounded-xl border border-border bg-surface">
        <iframe
          src={siteConfig.cvPdf}
          title="CV — Wei-Che Hsu"
          className="h-[80vh] w-full"
        />
      </div>

      <CvSection title="Education">
        {cv.education.map((item) => (
          <CvEntry
            key={item.degree}
            heading={item.degree}
            subheading={item.institution}
            period={item.period}
            details={item.details}
          />
        ))}
      </CvSection>

      <CvSection title="Experience">
        {cv.experience.map((item) => (
          <CvEntry
            key={`${item.role}-${item.period}`}
            heading={item.role}
            subheading={item.org}
            period={item.period}
            details={item.details}
          />
        ))}
      </CvSection>

      <CvSection title="Skills">
        <ul className="grid gap-2 sm:grid-cols-2">
          {cv.skills.map((skill) => (
            <li key={skill} className="text-sm text-muted">
              • {skill}
            </li>
          ))}
        </ul>
      </CvSection>

      <CvSection title="Awards">
        <ul className="space-y-2">
          {cv.awards.map((award) => (
            <li key={award} className="text-sm text-muted">
              • {award}
            </li>
          ))}
        </ul>
      </CvSection>
    </div>
  );
}
