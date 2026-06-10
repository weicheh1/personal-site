import { siteConfig } from "@/data/site";

const linkEntries = Object.entries(siteConfig.links);

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/60">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <div className="flex flex-wrap gap-4">
          {linkEntries.map(([key, href]) => (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm capitalize text-muted hover:text-accent"
            >
              {key}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
