import { skillCategories } from "@/lib/portfolio-data";
import { Reveal, Section } from "./Reveal";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technical Skills"
      description="Tools and techniques I use across analytics, business intelligence, and data science work."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {skillCategories.map((category, i) => (
          <Reveal key={category.title} delay={i * 60} className="surface-card p-6">
            <h3 className="font-display text-base font-semibold">{category.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded border border-border bg-surface px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
