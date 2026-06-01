import SectionReveal from "@/src/components/ui/SectionReveal";

export default function About() {
  return (
    <section
      id="about"
      className="section-pad scroll-mt-20 bg-bg-secondary/40"
      aria-labelledby="about-heading"
    >
      <div className="container-narrow max-w-3xl">
        <SectionReveal>
          <p className="font-mono text-xs tracking-[0.2em] text-accent-primary uppercase">
            About Me
          </p>
          <h2
            id="about-heading"
            className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Nice to meet you
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-[1.75] text-text-muted">
            <p>
              I'm Phetklao, a developer based in Thailand. My journey didn't start 
              with a rigid plan—it began with pure curiosity. I wanted to understand 
              the mechanics behind keeping servers online and the logic of making 
              game mods behave exactly as intended. That curiosity quickly evolved into 
              countless hours of tinkering, breaking systems, and mastering how to build 
              them back stronger.
            </p>
            <p>
              Today, I freelance in full-stack web development, building applications 
              with React, Next.js, and Firebase. I also manage a self-hosted home server 
              environment utilizing Docker, Immich, local AI models, and secure network tunnels. 
              I thrive on building software that ships to real users and engineering systems 
              that remain resilient when left unattended.
            </p>
            <p>
              I'm applying to study Informatics at YZU to elevate this foundational 
              instinct. I want to merge structural software engineering with advanced systems 
              thinking—moving beyond midnight hotfixes to designing, optimizing, and 
              scaling complex technical architectures.
            </p>
          </div>

          <p className="mt-8 font-mono text-xs tracking-wide text-text-muted/90">
            Based in Thailand · building things that run 24/7
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
