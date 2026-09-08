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
        description="Please feel free to write regarding research collaborations, academic discussions, or related inquiries."
      />

      <div className="space-y-10">
        <section>
          <h2 className="font-serif text-2xl text-foreground">Email</h2>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-2 inline-block text-accent hover:text-accent-hover"
          >
            {siteConfig.email}
          </a>
          <p className="mt-2 text-sm text-muted">{siteConfig.location}</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-foreground">Profiles</h2>
          <ul className="mt-3 space-y-2">
            {linkEntries.map(([key, href]) => (
              <li key={key}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted capitalize hover:text-accent"
                >
                  {key} →
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-foreground">Office Hours</h2>
          <p className="mt-2 leading-relaxed text-muted">
            I am generally available for meetings on weekdays. The best way to
            schedule a conversation is to send an email with a few times that
            work for you.
          </p>
        </section>
      </div>
    </div>
  );
}
