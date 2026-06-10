import type { Publication } from "@/data/publications";

export function PublicationCard({ pub }: { pub: Publication }) {
  return (
    <article className="group rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/40">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-lg font-semibold leading-snug text-foreground group-hover:text-accent">
          {pub.title}
        </h3>
        <span className="shrink-0 text-sm text-muted">{pub.year}</span>
      </div>
      <p className="mt-2 text-sm text-muted">{pub.authors}</p>
      <p className="mt-1 text-sm font-medium text-accent/80 italic">
        {pub.venue}
      </p>
      {pub.abstract && (
        <p className="mt-3 text-sm leading-relaxed text-muted">{pub.abstract}</p>
      )}
      {pub.links && pub.links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-3">
          {pub.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-md border border-border bg-surface-elevated px-3 py-1 text-xs font-medium text-foreground hover:border-accent/50 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
