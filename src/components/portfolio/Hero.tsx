import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <p className="eyebrow">Data Analyst • Data Science • Business Intelligence</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 text-4xl leading-[1.08] font-semibold sm:text-5xl lg:text-[3.4rem]">
              Hi, I&apos;m Harsha Vardhan Raju Karapa.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-xl text-lg text-foreground/90 sm:text-xl">
              I turn data into meaningful insights, dashboards, and analytical solutions.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              Data professional with hands-on experience in data analytics and data science, working
              with Python, SQL, Excel, Power BI, Tableau, and machine learning.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                View My Work
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={profile.resume}
                download
                className="inline-flex items-center gap-2 rounded-md border border-border-strong px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
              >
                <Download className="size-4" />
                Download Resume
              </a>
            </div>
          </Reveal>
          <Reveal delay={340}>
            <div className="mt-9 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4 text-accent" aria-hidden="true" />
                {profile.location}
              </span>
              <span className="hidden h-4 w-px bg-border sm:block" />
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Linkedin className="size-4" aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Github className="size-4" aria-hidden="true" />
                GitHub
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Mail className="size-4" aria-hidden="true" />
                Email
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="justify-self-center lg:justify-self-end">
          <ProfilePortrait />
        </Reveal>
      </div>
    </section>
  );
}

function ProfilePortrait() {
  return (
    <figure className="relative w-[280px] sm:w-[330px]">
      <div
        aria-hidden="true"
        className="absolute -inset-3 rounded-xl border border-border/70"
        style={{ transform: "rotate(-2deg)" }}
      />
      <div className="relative overflow-hidden rounded-lg border border-border-strong bg-surface">
        <div className="aspect-[4/5] w-full">
          {/*
            Replace this placeholder with the professional photo:
            1. Save the photo as: public/assets/harsha-profile.jpg
            2. Swap the block below for:
               <img src="/assets/harsha-profile.jpg" alt="Harsha Vardhan Raju Karapa" className="h-full w-full object-cover" />
          */}
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[radial-gradient(circle_at_30%_20%,var(--surface-elevated),var(--surface))]">
            <span className="font-display text-5xl font-semibold tracking-tight text-foreground/80">
              HK
            </span>
            <p className="max-w-[80%] text-center text-xs leading-relaxed text-muted-foreground">
              Professional photo placeholder — add
              <span className="text-foreground/80"> public/assets/harsha-profile.jpg</span> and
              replace this block in <span className="text-foreground/80">Hero.tsx</span>.
            </p>
          </div>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-xs text-muted-foreground">
        Harsha Vardhan Raju Karapa — Data Analyst
      </figcaption>
    </figure>
  );
}
