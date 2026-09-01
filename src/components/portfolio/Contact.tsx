import { Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative border-t border-border py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-64 max-w-3xl bg-accent/8 blur-[120px]"
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Let&apos;s connect.</h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
            Interested in data, analytics, or solving real-world problems with data? I&apos;d be happy
            to connect.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              <Mail className="size-4" aria-hidden="true" />
              Email Me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border-strong px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              <Linkedin className="size-4" aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border-strong px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              <Github className="size-4" aria-hidden="true" />
              GitHub
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-md border border-border-strong px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              <Download className="size-4" aria-hidden="true" />
              Download Resume
            </a>
          </div>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-8 font-mono text-sm text-muted-foreground">{profile.email}</p>
        </Reveal>
      </div>
    </section>
  );
}
