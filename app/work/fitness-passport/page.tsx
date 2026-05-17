import Reveal from "@/components/Reveal";
import Button from "@/components/Button";


export const metadata = {
  title: "Fitness Passport — Kelvin Ng",
  description: "Senior product design work at Fitness Passport.",
};

const projects = [
  {
    number: "01",
    title: "Design system from zero to adoption",
    description:
      "Built and shipped a design system from scratch across product and tech, ensuring adoption by the entire team to enable reliable speed and consistency.",
    tags: ["Design Systems", "Component Library", "Tokens", "Documentation"],
    href: "/work/fitness-passport/design-system",
  },
  {
    number: "02",
    title: "Signup and onboarding flow",
    description:
      "Redesigned the end to end signup and onboarding experience to optimise member conversion, ensure compliance, and reduce legal risk.",
    tags: ["UX Design", "Research", "Conversion", "Compliance"],
    href: "/work/fitness-passport/new-member-conversion"
  },
  {
  number: "03",
  title: "Employer Reporting Dashboard",
  description:
    "Discovery led to a pivot from a customer dashboard to an internal tool now used daily by customer facing teams, saving over $20k a year in manual reporting for our main stakeholders alone.",
  tags: ["Discovery", "Internal Tool", "Data Design", "Stakeholder Research"],
  href: "/work/fitness-passport/employer-reporting",
},
];

export default function FitnessPassportPage() {
  return (
    <main
      id="fitness-passport"
      role="main"
      aria-label="Fitness Passport work"
      className="mx-auto w-full max-w-[1200px] px-6 sm:px-10 lg:px-16 pt-16 pb-32 flex flex-col gap-0"
    >
      <Reveal immediate delay={100}>
        <a
          href="/#experience"
          className="type-meta inline-flex items-center gap-2 mb-12 opacity-60 hover:opacity-100 transition-opacity"
        >
          ← Back
        </a>
      </Reveal>

      <Reveal immediate delay={200}>
        <div
          className="flex flex-col gap-6 pb-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <div className="type-display-sm">
            <p>Fitness Passport</p>
          </div>
          <p className="type-body max-w-[560px] opacity-70">
            Senior Product Designer, 2025 to present. Leading product design
            for the employer experience, owning the design system end to end
            and shipping measurable improvements across the platform.
          </p>
        </div>
      </Reveal>

      <div className="flex flex-col">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 100}>
            <div
              className="flex flex-col gap-6 py-16 border-b border-dashed"
              style={{ borderColor: "rgb(var(--border))" }}
            >
              <p className="type-meta opacity-40">Project {project.number}</p>
              <p className="type-body-emphasis text-xl">{project.title}</p>
              <p className="type-body max-w-[560px] opacity-80">
                {project.description}
              </p>
              {project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="type-meta px-3 py-1 rounded-full"
                      style={{
                        border: "1px solid rgb(var(--border))",
                        opacity: 0.6,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              {project.href && (
                <div>
                  <Button href={project.href}>View case study</Button>
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
