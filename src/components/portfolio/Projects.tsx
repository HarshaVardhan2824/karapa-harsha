import { useState } from "react";
import { ArrowUpRight, ExternalLink, Github, X } from "lucide-react";
import { otherProjects, projects, type Project } from "@/lib/portfolio-data";
import { Reveal, Section } from "./Reveal";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <Section
      id="projects"
      eyebrow="Featured Work"
      title="Featured Projects"
      description="Analytics, business intelligence and machine learning projects built end to end — from raw data to dashboards and deployed models."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal
            as="article"
            key={project.id}
            delay={i * 70}
            className={
              "surface-card flex flex-col overflow-hidden" + (i === 0 ? " md:col-span-2" : "")
            }
          >
            <ProjectVisual project={project} />
            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs tracking-wider text-accent uppercase">{project.category}</p>
              <h3 className="mt-2 font-display text-lg font-semibold">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded border border-border px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border-strong px-3.5 py-2 text-xs font-semibold transition-colors hover:border-accent hover:text-accent"
                >
                  <Github className="size-4" aria-hidden="true" />
                  GitHub
                </a>
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-border-strong px-3.5 py-2 text-xs font-semibold transition-colors hover:border-accent hover:text-accent"
                  >
                    <ExternalLink className="size-4" aria-hidden="true" />
                    Live Demo
                  </a>
                ) : null}
                <button
                  type="button"
                  onClick={() => setActive(project)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-accent transition-colors hover:text-foreground"
                >
                  Project details
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-12">
        <Reveal>
          <h3 className="text-base font-semibold">Other Work</h3>
        </Reveal>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {otherProjects.map((item) => (
            <Reveal key={item.title} className="surface-card flex items-center gap-4 p-4">
              <div className="min-w-0">
                <p className="truncate font-display text-sm font-semibold">{item.title}</p>
                <p className="mt-1 truncate text-xs text-muted-foreground">{item.description}</p>
              </div>
              <a
                href={item.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${item.title} on GitHub`}
                className="ml-auto inline-flex size-9 shrink-0 items-center justify-center rounded-md border border-border transition-colors hover:border-accent hover:text-accent"
              >
                <Github className="size-4" aria-hidden="true" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectDialog project={active} onClose={() => setActive(null)} />
    </Section>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className="relative aspect-[16/9] max-h-72 overflow-hidden border-b border-border bg-surface">
      <img
        src={project.image}
        alt={project.imageAlt}
        loading="lazy"
        className="h-full w-full object-cover object-top"
      />
    </div>
  );
}

function ProjectDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  if (!project) return null;
  return (
    <div
      className="fixed inset-0 z-60 flex items-start justify-center overflow-y-auto bg-background/80 p-4 backdrop-blur-sm sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-lg border border-border-strong bg-card p-7 shadow-elegant"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-4 right-4 inline-flex size-9 items-center justify-center rounded-md border border-border transition-colors hover:border-accent hover:text-accent"
        >
          <X className="size-4" aria-hidden="true" />
        </button>
        <p className="text-xs tracking-wider text-accent uppercase">{project.category}</p>
        <h3 className="mt-2 pr-10 font-display text-xl font-semibold">{project.title}</h3>
        <dl className="mt-6 space-y-5 text-sm">
          <div>
            <dt className="text-xs tracking-wider text-muted-foreground uppercase">Problem</dt>
            <dd className="mt-1.5 leading-relaxed text-foreground/90">{project.problem}</dd>
          </div>
          <div>
            <dt className="text-xs tracking-wider text-muted-foreground uppercase">Approach</dt>
            <dd className="mt-1.5 leading-relaxed text-foreground/90">{project.approach}</dd>
          </div>
          <div>
            <dt className="text-xs tracking-wider text-muted-foreground uppercase">Tools</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-border px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </dd>
          </div>
          <div>
            <dt className="text-xs tracking-wider text-muted-foreground uppercase">Key outcome</dt>
            <dd className="mt-1.5 leading-relaxed text-foreground/90">{project.outcome}</dd>
          </div>
        </dl>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground"
          >
            <Github className="size-4" aria-hidden="true" />
            View on GitHub
          </a>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border-strong px-4 py-2 text-sm font-semibold hover:border-accent hover:text-accent"
            >
              <ExternalLink className="size-4" aria-hidden="true" />
              Live demo / dashboard
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
