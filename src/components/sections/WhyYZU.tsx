import SectionReveal from "@/src/components/ui/SectionReveal";

export default function WhyYZU() {
  return (
    <section
      id="why"
      className="section-pad scroll-mt-20 border-t border-white/5"
      aria-labelledby="why-heading"
    >
      <div className="container-narrow">
        <SectionReveal className="relative max-w-3xl">
          <span
            className="pointer-events-none absolute -top-6 -left-1 font-serif text-[5.5rem] leading-none text-accent-primary/25 select-none sm:-left-2 sm:text-[7rem]"
            aria-hidden
          >
            &ldquo;
          </span>

          <h2
            id="why-heading"
            className="text-balance text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl"
          >
            Why Informatics. Why YZU.
          </h2>

          <div className="relative mt-10 space-y-7 pl-6 sm:pl-8">
            <div
              className="absolute top-0 bottom-0 left-0 w-px bg-accent-primary/40"
              aria-hidden
            />

            <p className="text-lg leading-[1.8] text-text-muted">
              It started with curiosity—Minecraft mods, a home network that
              needed fixing, a server I wanted to stay up without babysitting. I
              wasn&apos;t trying to become a developer yet; I just wanted to know
              how things worked underneath. Each problem pulled me one layer
              deeper.
            </p>

            <p className="text-lg leading-[1.8] text-text-muted">
              Informatics is what that path grew into. I&apos;m not only
              interested in writing code, but in how systems fit together:
              infrastructure, data, interfaces, and increasingly AI running close
              to the apps I build. Self-hosting and local models taught me that
              software matters most when it runs somewhere real, with real
              constraints.
            </p>

            <p className="text-lg leading-[1.8] text-text-muted">
              YZU&apos;s international program is where I want that growth to
              happen—with peers from different backgrounds, in Taiwan&apos;s tech
              ecosystem, on a structured path forward. I&apos;m applying because
              I&apos;m ready to move from hobby-level building to disciplined
              engineering, and because YZU feels like the right place to do that
              honestly.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
