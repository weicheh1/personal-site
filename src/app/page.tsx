import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function HomePage() {
  return (
    <div className="space-y-14">
      <section className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-10">
        <div className="shrink-0">
          <Image
            src="/profile.png"
            alt={`${siteConfig.name} profile photo`}
            width={176}
            height={176}
            priority
            className="h-44 w-44 border border-border object-cover object-top"
          />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <p className="section-kicker">{siteConfig.department}</p>
          <h1 className="mt-3 font-serif text-4xl text-foreground sm:text-[2.6rem]">
            {siteConfig.name}
          </h1>
          <p className="mt-2 text-base text-muted italic">
            {siteConfig.role}
          </p>
          <p className="mt-1 text-sm text-muted">
            {siteConfig.title}, {siteConfig.institution}
          </p>
          <div className="mt-6 max-w-2xl space-y-4 text-[1.02rem] leading-[1.75] text-foreground/85">
            {siteConfig.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:justify-start">
            <Link href="/publications" className="btn-primary">
              Publications
            </Link>
            <a
              href={siteConfig.cvPdf}
              download="CV_WeiCheHsu.pdf"
              className="btn-primary"
            >
              Download CV
            </a>
            <Link href="/cv" className="btn-secondary">
              Curriculum Vitae
            </Link>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-kicker">Major / Specialty</h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-foreground/85">
          {siteConfig.major}
        </p>
      </section>

      <section>
        <h2 className="section-kicker">Research Interests</h2>
        <ul className="mt-4 space-y-1.5 text-[1.02rem] text-foreground/85">
          {siteConfig.interests.map((interest) => (
            <li key={interest} className="flex gap-3">
              <span className="mt-[0.7em] h-px w-4 shrink-0 bg-accent" />
              {interest}
            </li>
          ))}
        </ul>
      </section>

      <nav className="flex flex-wrap gap-x-8 gap-y-2 border-t border-border pt-6 text-sm">
        {[
          { label: "Publications", href: "/publications" },
          { label: "Research", href: "/research" },
          { label: "Contact", href: "/contact" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-muted hover:text-accent"
          >
            {item.label} →
          </Link>
        ))}
      </nav>
    </div>
  );
}
