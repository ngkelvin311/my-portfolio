import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import ProtectedButton from "@/components/ProtectedButton";

export const metadata = {
  title: "Reece — Kelvin Ng",
  description: "UX design work at Reece and reecetech across the maX platform.",
};

const projects = [
  {
    number: "01",
    title: "maX Stock Availability",
    description:
      "Stock availability was invisible to customers placing orders. We surfaced live stock levels across the maX platform across web, iOS, and Android. Fully in-stock orders increased by 280% from launch.",
    tags: ["UX Design", "Research", "iOS", "Android", "Web"],
    href: "/work/reece/max-stock-availability",
  },
  {
    number: "02",
    title: "Add your next case study",
    description: "Substitutions engine, design system work, or another project from your time at Reece.",
    tags: [],
    href: "#",
  },
];

export default function ReecePage() {
  return (
    <main
      id="reece"
      role="main"
      aria-label="Reece work"
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
          <p className="type-tagline">Work</p>
          <div className="type-display-sm">
            <p>Reece / reecetech</p>
          </div>
          <p className="type-body max-w-[560px] opacity-70">
            UX Designer, 2021 to 2024. Led design across the Finding Products
            and Ordering Products teams on the maX platform, working across
            research, design operations, and education.
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
              {project.href !== "#" && (
                <div>
                <ProtectedButton href={project.href}>View case study</ProtectedButton>                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
