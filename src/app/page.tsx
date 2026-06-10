import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="relative">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative flex flex-col items-center gap-8 sm:flex-row sm:items-start">
          <div className="shrink-0">
            <Image
              src="/profile.png"
              alt={`${siteConfig.name} profile photo`}
              width={192}
              height={192}
              priority
              className="h-48 w-48 rounded-2xl border border-border object-cover object-top shadow-lg glow"
            />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              {siteConfig.department}
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Hi, I&apos;m{" "}
              <span className="text-gradient">{siteConfig.name}</span>
            </h1>
            <p className="mt-2 text-lg text-muted">
              {siteConfig.title} at {siteConfig.institution}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
              {siteConfig.bio}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 sm:justify-start">
              <Link
                href="/publications"
                className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-hover glow"
              >
                View Publications
              </Link>
              <Link
                href="/cv"
                className="rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground hover:border-accent/50"
              >
                View CV
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted">
          Research Interests
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {siteConfig.interests.map((interest) => (
            <span
              key={interest}
              className="rounded-lg border border-border bg-surface px-4 py-2 text-sm text-foreground"
            >
              {interest}
            </span>
          ))}
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Publications", href: "/publications", count: "1" },
          { label: "Projects", href: "/research", count: "6" },
          { label: "Blog Posts", href: "/blog", count: "2" },
          { label: "Contact", href: "/contact", count: "→" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/40"
          >
            <span className="text-2xl font-bold text-accent">{item.count}</span>
            <p className="mt-1 text-sm font-medium text-foreground group-hover:text-accent">
              {item.label}
            </p>
          </Link>
        ))}
      </section>
    </div>
  );
}
