import { useState } from "react";
import { ExternalLink, Radio, X } from "lucide-react";
import { research } from "@/lib/portfolio-data";
import { Reveal, Section } from "./Reveal";

export function Research() {
  const [open, setOpen] = useState(false);

  return (
    <Section
      id="research"
      eyebrow="Research & Engineering"
      title="Research & Engineering"
      description="My engineering background — a published conference paper from my B.Tech in Electronics & Communication Engineering."
    >
      <Reveal className="surface-card p-6 sm:p-7">
        <div className="grid gap-7 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
          <div>
            <p className="inline-flex items-center gap-2 text-xs tracking-wider text-accent uppercase">
              <Radio className="size-4" aria-hidden="true" />
              {research.subtitle}
            </p>
            <h3 className="mt-3 font-display text-xl leading-snug font-semibold text-foreground">
              {research.title}
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/80">
              {research.description}
            </p>

            <ol className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-2 text-xs text-foreground/75">
              {research.story.map((step, i) => (
                <li key={step} className="flex items-center gap-2">
                  <span className="rounded border border-border bg-surface px-2.5 py-1">{step}</span>
                  {i < research.story.length - 1 ? (
                    <span aria-hidden="true" className="text-border-strong">
                      →
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={research.paperUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border-strong px-4 py-2 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
              >
                View Published Paper
                <ExternalLink className="size-4" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground"
              >
                View Research
              </button>
            </div>
          </div>

          <figure className="overflow-hidden rounded-lg border border-border-strong bg-surface">
            <img
              src={research.heroImage}
              alt="Fabricated flexible dual-band microstrip patch antenna on jeans substrate"
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
            <figcaption className="border-t border-border px-3 py-2 text-center text-xs text-foreground/70">
              Fabricated antenna prototype
            </figcaption>
          </figure>
        </div>
      </Reveal>

      {open ? <ResearchDialog onClose={() => setOpen(false)} /> : null}
    </Section>
  );
}

function ResearchDialog({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-60 flex items-start justify-center overflow-y-auto bg-background/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Research project details"
      onClick={onClose}
    >
      <div
        className="relative my-6 w-full max-w-3xl rounded-lg border border-border-strong bg-card p-5 shadow-elegant sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close research details"
          className="absolute top-4 right-4 inline-flex size-9 items-center justify-center rounded-md border border-border transition-colors hover:border-accent hover:text-accent"
        >
          <X className="size-4" aria-hidden="true" />
        </button>
        <p className="text-xs tracking-wider text-accent uppercase">{research.subtitle}</p>
        <h3 className="mt-2 pr-10 font-display text-xl leading-snug font-semibold text-foreground">
          {research.title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-foreground/80">{research.description}</p>

        <h4 className="mt-8 text-sm font-semibold text-foreground">Technical details</h4>
        <ul className="mt-3 grid gap-2 text-sm text-foreground/80 sm:grid-cols-2">
          {research.details.map((detail) => (
            <li key={detail} className="flex gap-2">
              <span aria-hidden="true" className="text-accent">
                •
              </span>
              {detail}
            </li>
          ))}
        </ul>

        <h4 className="mt-8 text-sm font-semibold text-foreground">Selected visuals</h4>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {research.gallery.map((item) => (
            <figure
              key={item.caption}
              className="overflow-hidden rounded-md border border-border bg-surface"
            >
              <img
                src={item.src}
                alt={item.caption}
                loading="lazy"
                className="block w-full object-contain"
              />
              <figcaption className="border-t border-border px-3 py-2 text-xs text-foreground/75">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <h4 className="mt-8 text-sm font-semibold text-foreground">Publication</h4>
        <p className="mt-2 text-sm text-foreground/80">{research.conference}</p>
        <p className="mt-1 text-sm text-foreground/80">Authors: {research.authors}</p>
        <p className="mt-1 text-sm text-foreground/80">
          DOI:{" "}
          <a
            href={research.doiUrl}
            target="_blank"
            rel="noreferrer"
            className="text-accent underline-offset-4 hover:underline"
          >
            {research.doi}
          </a>
        </p>
        <a
          href={research.paperUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-md border border-border-strong px-4 py-2 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
        >
          View Published Paper
          <ExternalLink className="size-4" aria-hidden="true" />
        </a>
        <p className="mt-5 text-xs leading-relaxed text-foreground/70">
          This is an academic engineering research project. It makes no claim of clinical
          effectiveness or medical treatment approval.
        </p>
      </div>
    </div>
  );
}
