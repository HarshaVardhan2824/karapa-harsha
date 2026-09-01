import { highlights, whatIDo } from "@/lib/portfolio-data";
import { Reveal, Section } from "./Reveal";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="About Me">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            I work across the full analytics workflow — from cleaning and validating raw data to
            delivering dashboards and models that answer business questions. My internship experience
            at AI Variant covered both sides of that work: analytics and business intelligence on
            sales and delivery data, and applied data science on a large recommendation problem.
          </p>
          <p>
            Day to day, that means SQL analysis and Excel validation, Power BI and Tableau dashboard
            development with Power Query and DAX, and Python-based analysis and machine learning with
            Pandas, Scikit-learn and gradient-boosting libraries.
          </p>
          <p>
            I care about clear definitions, trustworthy numbers, and reporting that a stakeholder can
            act on without a walkthrough.
          </p>
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2">
          {highlights.map((item, i) => (
            <Reveal as="li" key={item.label} delay={i * 70} className="surface-card p-5">
              <p className="text-xs tracking-wider text-muted-foreground uppercase">{item.label}</p>
              <p className="mt-2 font-display text-base font-semibold text-foreground">
                {item.value}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>

      <div className="mt-16">
        <Reveal>
          <h3 className="text-xl font-semibold">What I Do</h3>
        </Reveal>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {whatIDo.map((card, i) => (
            <Reveal as="article" key={card.title} delay={i * 90} className="surface-card p-6">
              <h4 className="font-display text-lg font-semibold">{card.title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {card.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {card.tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded border border-border px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
