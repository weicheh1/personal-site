"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-baseline justify-between gap-6 px-6 py-5">
        <Link href="/" className="group min-w-0">
          <span className="font-serif text-lg text-foreground group-hover:text-accent">
            {siteConfig.name}
          </span>
          <span className="mt-0.5 block text-xs tracking-wide text-muted">
            {siteConfig.title}
          </span>
        </Link>

        <nav className="hidden items-center gap-5 sm:flex">
          {siteConfig.nav.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "border-b pb-0.5 text-[0.8rem] tracking-wide",
                  isActive
                    ? "border-accent text-accent"
                    : "border-transparent text-muted hover:border-rule hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <MobileNav pathname={pathname} />
      </div>
    </header>
  );
}

function MobileNav({ pathname }: { pathname: string }) {
  return (
    <nav className="flex flex-wrap justify-end gap-x-3 gap-y-1 sm:hidden">
      {siteConfig.nav.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-[0.7rem] tracking-wide",
              isActive ? "text-accent" : "text-muted hover:text-foreground",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
