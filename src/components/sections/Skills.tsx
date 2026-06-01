import SectionReveal from "@/src/components/ui/SectionReveal";

const skillGroups = [
  {
    label: "Infrastructure",
    skills: [
      "Docker",
      "Cloudflare Tunnel",
      "Self-hosting",
      "LM Studio",
      "Immich",
    ],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "Backend & data",
    skills: ["Firebase", "Firestore", "Node.js", "Gemini API"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-pad scroll-mt-20"
      aria-labelledby="skills-heading"
    >
      <div className="container-narrow">
        <SectionReveal>
          <p className="font-mono text-xs tracking-[0.2em] text-accent-primary uppercase">
            Skills
          </p>
          <h2
            id="skills-heading"
            className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Stack I use to ship end to end
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <h3 className="font-mono text-xs tracking-widest text-text-muted uppercase">
                  {group.label}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <span className="inline-block rounded border border-white/5 bg-bg-tertiary px-2.5 py-1 font-mono text-xs text-text-muted">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
