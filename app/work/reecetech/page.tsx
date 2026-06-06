import Reveal from "@/components/Reveal";
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
      "Customers were placing orders their branch couldn't fulfil. We surfaced live stock levels across every touchpoint in the maX shopping flow and built a smart sourcing engine to resolve the gap in one tap. Fully in-stock orders increased 280% from launch.",
    tags: ["UX Design", "Research", "iOS", "Android", "Web"],
    href: "/work/reecetech/stock-availability",
  },
  {
    number: "02",
    title: "maX Product Lists",
    description:
      "Trade customers were searching for the same products on every single order. We designed a saved lists feature backed by a predictive model that built template orders from real purchase behaviour and surfaced them before customers went looking. Zero searches required to place a repeat order.",
    tags: ["UX Design", "Research", "iOS", "Android", "Web"],
    href: "/work/reecetech/product-lists",
  },
  {
    number: "03",
    title: "maX Smart Recommendations",
    description:
      "Tradespeople use slang. Reece catalogues use technical names. That gap was causing search failures for products that existed and were in stock. We designed a proactive recommendation engine that surfaced complementary products while customers shopped, without requiring them to find the right words. The model predicts customer choices at 80% accuracy.",
    tags: ["UX Design", "Research", "iOS", "Android"],
    href: "/work/reecetech/smart-recommendations",
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
                  <ProtectedButton href={project.href}>
                    View case study
                  </ProtectedButton>
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
