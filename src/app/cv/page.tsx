import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { cv } from "@/data/cv";

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
