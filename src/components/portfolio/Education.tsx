import { Award, GraduationCap } from "lucide-react";
import { certifications, education } from "@/lib/portfolio-data";
import { Reveal, Section } from "./Reveal";

export function Education() {
  const primary = education[0]!;
  const rest = education.slice(1);


  return (
    <Section id="education" eyebrow="Education" title="Education & Certifications">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <Reveal className="surface-card p-6">
            <p className="inline-flex items-center gap-2 text-xs tracking-wider text-accent uppercase">
              <GraduationCap className="size-4" aria-hidden="true" />
              {primary.period}
            </p>
            <h3 className="mt-3 font-display text-lg leading-snug font-semibold">
              {primary.degree}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{primary.institution}</p>
            <p className="mt-3 font-mono text-sm text-foreground">{primary.meta}</p>
          </Reveal>

          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {rest.map((item, i) => (
              <Reveal as="li" key={item.degree} delay={i * 70} className="surface-card p-4">
                <p className="font-display text-sm font-semibold">{item.degree}</p>
                <p className="mt-1 text-xs text-muted-foreground">{item.institution}</p>
              </Reveal>
            ))}
          </ul>
        </div>

        <div>
          <Reveal>
            <h3 className="text-base font-semibold">Certifications</h3>
          </Reveal>
          <ul className="mt-4 grid gap-3">
            {certifications.map((cert, i) => (
              <Reveal
                as="li"
                key={cert.title}
                delay={i * 50}
                className="surface-card flex items-start gap-3 p-4"
              >
                <Award className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-foreground">{cert.title}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{cert.issuer}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
