import { useState } from "react";
import { FileText, Radio, X } from "lucide-react";
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
      <Reveal className="surface-card p-7">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-xs tracking-wider text-accent uppercase">
              <Radio className="size-4" aria-hidden="true" />
              {research.subtitle}
            </p>
            <h3 className="mt-3 font-display text-xl leading-snug font-semibold">
              {research.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {research.description}
            </p>
          </div>
        </div>

        <ol className="mt-7 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
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
            href="#research"
            aria-disabled="true"
            title="Paper link placeholder — add the published paper URL when available"
            className="inline-flex items-center gap-2 rounded-md border border-border-strong px-4 py-2 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            <FileText className="size-4" aria-hidden="true" />
            View Paper
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground"
          >
            View Research
          </button>
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
        className="relative my-6 w-full max-w-3xl rounded-lg border border-border-strong bg-card p-7 shadow-elegant"
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
        <h3 className="mt-2 pr-10 font-display text-xl leading-snug font-semibold">
          {research.title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{research.description}</p>

        <h4 className="mt-8 text-sm font-semibold">Technical details</h4>
        <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
          {research.details.map((detail) => (
            <li key={detail} className="flex gap-2">
              <span aria-hidden="true" className="text-accent">
                •
              </span>
              {detail}
            </li>
          ))}
        </ul>

        <h4 className="mt-8 text-sm font-semibold">Selected visuals</h4>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {research.visuals.map((visual) => (
            <figure
              key={visual}
              className="rounded-md border border-border bg-surface p-4 text-center"
            >
              <div className="mb-3 aspect-[4/3] rounded bg-[radial-gradient(circle_at_35%_25%,var(--surface-elevated),var(--surface))]" />
              <figcaption className="text-[11px] leading-relaxed text-muted-foreground">
                {visual}
                <span className="mt-1 block text-foreground/60">image placeholder</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-4 text-[11px] text-muted-foreground">
          Replace these placeholders with the actual figures at{" "}
          <span className="text-foreground/70">public/assets/research/</span>.
        </p>

        <h4 className="mt-8 text-sm font-semibold">Publication</h4>
        <p className="mt-2 text-sm text-muted-foreground">{research.conference}</p>
        <p className="mt-1 text-sm text-muted-foreground">Authors: {research.authors}</p>
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          This is a research and design project intended for biomedical hyperthermia applications. It
          makes no claim of clinical effectiveness or medical treatment approval.
        </p>
      </div>
    </div>
  );
}
