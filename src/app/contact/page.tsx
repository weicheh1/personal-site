import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
};

const linkEntries = Object.entries(siteConfig.links);

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Contact"
        description="Feel free to reach out about research collaborations, speaking opportunities, or just to say hello."
      />

      <div className="space-y-8">
        <section className="rounded-xl border border-border bg-surface p-6">
          <h2 className="text-lg font-semibold text-foreground">Email</h2>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-2 inline-block text-accent hover:text-accent-hover"
          >
            {siteConfig.email}
          </a>
          <p className="mt-2 text-sm text-muted">{siteConfig.location}</p>
        </section>

        <section className="rounded-xl border border-border bg-surface p-6">
          <h2 className="text-lg font-semibold text-foreground">Profiles</h2>
          <ul className="mt-4 space-y-3">
            {linkEntries.map(([key, href]) => (
              <li key={key}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-sm text-muted hover:text-accent"
                >
                  <span className="capitalize">{key}</span>
                  <span className="text-xs">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-border bg-surface p-6">
          <h2 className="text-lg font-semibold text-foreground">Office Hours</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            I&apos;m generally available for meetings on weekdays. The best way
            to schedule a chat is to send me an email with a few times that work
            for you.
          </p>
        </section>
      </div>
    </div>
  );
}
