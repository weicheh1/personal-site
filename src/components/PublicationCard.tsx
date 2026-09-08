import type { Publication } from "@/data/publications";

export function PublicationCard({ pub }: { pub: Publication }) {
  return (
    <article className="border-l-2 border-rule pl-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-serif text-xl leading-snug text-foreground">
          {pub.title}
        </h3>
        <span className="shrink-0 text-sm text-muted">{pub.year}</span>
      </div>
      <p className="mt-2 text-sm text-muted">{pub.authors}</p>
      <p className="mt-1 text-sm italic text-accent">{pub.venue}</p>
      {pub.abstract && (
        <p className="mt-3 leading-relaxed text-muted">{pub.abstract}</p>
      )}
      {pub.links && pub.links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-4">
          {pub.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-accent hover:text-accent-hover"
            >
              {link.label} →
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
