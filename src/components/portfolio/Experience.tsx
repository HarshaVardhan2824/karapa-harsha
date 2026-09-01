import { Briefcase } from "lucide-react";
import { experience } from "@/lib/portfolio-data";
import { Reveal, Section } from "./Reveal";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Work Experience"
      description="Hands-on internship experience across data analytics and data science."
    >
      <ol className="relative border-l border-border pl-8 sm:pl-10">
        {experience.map((role, i) => (
          <Reveal
            as="li"
            key={role.role}
            delay={i * 90}
            className={i === experience.length - 1 ? "" : "pb-12"}
          >
            <span
              aria-hidden="true"
              className="absolute -left-[9px] mt-1.5 flex size-[18px] items-center justify-center rounded-full border border-border-strong bg-surface"
            >
              <span className="size-1.5 rounded-full bg-accent" />
            </span>
            <div className="surface-card p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold">{role.role}</h3>
                <p className="font-mono text-xs text-muted-foreground">{role.period}</p>
              </div>
              <p className="mt-1.5 inline-flex items-center gap-2 text-sm text-accent">
                <Briefcase className="size-4" aria-hidden="true" />
                {role.company}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {role.description}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
