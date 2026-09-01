import { useEffect, useState } from "react";
import { Menu, X, FileText } from "lucide-react";
import { navLinks, profile } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-border bg-background/85 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        <a href="#top" className="font-display text-sm font-semibold tracking-tight sm:text-base">
          {profile.shortName}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume}
            download
            className="hidden items-center gap-2 rounded-md border border-border-strong px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent sm:inline-flex"
          >
            <FileText className="size-4" aria-hidden="true" />
            Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-10 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:border-border-strong lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto max-w-6xl px-6 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border py-3 text-sm text-muted-foreground transition-colors last:border-0 hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3 pb-1">
              <a
                href={profile.resume}
                download
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-md border border-border-strong px-4 py-2 text-sm font-medium hover:border-accent hover:text-accent"
              >
                <FileText className="size-4" aria-hidden="true" />
                Resume
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
