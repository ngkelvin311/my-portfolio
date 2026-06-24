import Reveal from "@/components/Reveal";
import { EmployerReportingUsageCharts } from "@/components/EmployerReportingUsageCharts"

export const metadata = {
  title: "Employer Reporting Dashboard — Kelvin Ng",
  description:
    "How discovery led to a pivot from a customer-facing dashboard to an internal tool that saves the team over $20k a year.",
};

export default function EmployerReportingPage() {
  return (
    <main
      id="case-study"
      role="main"
      aria-label="Employer Reporting Dashboard case study"
      className="mx-auto w-full max-w-[1200px] px-6 sm:px-10 lg:px-16 pt-16 pb-32 flex flex-col gap-0"
    >
      {/* Back link */}
      <Reveal immediate delay={100}>
        <a
          href="/work/fitness-passport"
          className="type-meta inline-flex items-center gap-2 mb-12 opacity-60 hover:opacity-100 transition-opacity"
        >
          ← Back to Fitness Passport
        </a>
      </Reveal>

      {/* Header */}
      <Reveal immediate delay={200}>
        <div
          className="flex flex-col gap-6 pb-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="type-tagline">Case study — Fitness Passport</p>
          <div className="type-display-sm">
            <p>Employer Reporting Dashboard</p>
          </div>
          <p className="type-body">
            The roadmap said build a customer-facing dashboard. Discovery said
            otherwise. We pivoted to an internal tool used by the entire team
            daily, saving over $20k a year in manual reporting and giving the
            business control over how data is presented to employers.
          </p>

          {/* Meta grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
            {[
              { label: "Company", value: "Fitness Passport" },
              { label: "Role", value: "Senior Product Designer" },
              { label: "Type", value: "Discovery + Internal Tool" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <p className="type-meta opacity-50">{item.label}</p>
                <p className="type-body font-medium">{item.value}</p>
              </div>
            ))}

            {/* Status pill */}
            <div className="flex flex-col gap-1">
              <p className="type-meta opacity-50">Status</p>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full w-fit type-body"
                style={{ background: "rgb(var(--surface))" }}
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: "#22c55e" }}
                />
                Saving over $20k/year
              </div>
            </div>
          </div>
          <div className="w-full rounded-lg overflow-hidden">
            <img
              src="/work/Employer-reporting/employer-report.jpg"
              alt="The existing manual employer report used as the design anchor for the first version of the dashboard"
              className="w-full h-auto"
            />
          </div>
        </div>
      </Reveal>

      {/* Results up front */}
      <Reveal delay={100}>
        <section
          className="flex flex-col gap-8 py-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="type-tagline">Results</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                stat: "$20k+",
                desc: "Estimated reduction in annual operational cost from reporting alone",
              },
              {
                stat: "Daily",
                desc: "Usage across the entire team, consistently from launch",
              },
              {
                stat: "6 hrs",
                desc: "Saved per large corporate report, per team member",
              },
            ].map((item) => (
              <div
                key={item.stat}
                className="flex flex-col gap-2 p-6 rounded-lg"
                style={{ background: "rgb(var(--surface))" }}
              >
                <p className="type-display-sm leading-none">{item.stat}</p>
                <p className="type-body opacity-60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 mt-2">
            {[
              {
                quote: "Saves me 6 hours to do all the calculations.",
                name: "Account Manager 1",
              },
              {
                quote: "Incredibly useful tool for large corporate going forwards.",
                name: "Account Manager 2",
              },
              {
                quote: "Gives us clarity and leverage.",
                name: "Account Manager 3",
              },
              {
                quote: "I refuse to do manual spreadsheets anymore.",
                name: "Account Manager 4",
              },
            ].map((item) => (
              <blockquote
                key={item.quote}
                className="type-body border-l-2 pl-5 italic opacity-80"
                style={{ borderColor: "rgb(var(--foreground))" }}
              >
                "{item.quote}"
                <footer className="type-meta not-italic opacity-50 mt-1">
                  {item.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      </Reveal>

      {/* My Role */}
      <Reveal delay={100}>
        <section
          className="flex flex-col gap-6 py-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="type-tagline">My role</p>
          <h2 className="type-body font-medium text-xl">What I owned</h2>
          <p className="type-body">
            I led discovery alongside product: 11 interviews across B to A+
            employers over three weeks. I synthesised the findings, made the
            case to pivot, and led design of the dashboard from that foundation.
          </p>
          <div className="w-full rounded-lg overflow-hidden">
            <img
              src="/work/Employer-Reporting/team-structure.png"
              alt="Team structure and my role in it"
              className="w-full h-auto"
            />
          </div>
        </section>
      </Reveal>

      {/* The Problem */}
      <Reveal delay={100}>
        <section
          className="flex flex-col gap-6 py-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="type-tagline">The problem</p>
          <h2 className="type-body font-medium text-xl">
            40 hours a month. No standard format. No consistency.
          </h2>
          <p className="type-body">
            Every report was built from scratch. Each partnership manager had
            their own format, their own style, their own level of spreadsheet
            literacy. A and A+ employers got reports on a regular cadence.
            Everyone else got one on request, if they asked at all.
          </p>
          <p className="type-body">
            Across the team: 40 hours a month, $20,160 a year. To maintain a
            process that was already delivering inconsistent output.
          </p>
          <ul className="flex flex-col gap-2 type-body opacity-70">
            {[
              "No standardised format across the team",
              "Reports limited to A and A+ employers regularly, B tier on request",
              "Output quality varied significantly by individual tech literacy",
              "Partnership managers spending time on admin rather than relationships",
              "No control over how sensitive data was presented externally",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="opacity-40 mt-1">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <blockquote
            className="type-body border-l-2 pl-5 italic opacity-80"
            style={{ borderColor: "rgb(var(--foreground))" }}
          >
            "Just my A's and A pluses, or B pluses. Takes me ages to do all
            those quarterly reports."
            <footer className="type-meta not-italic opacity-50 mt-1">
              Partnership Manager
            </footer>
          </blockquote>
        </section>
      </Reveal>

      {/* Research */}
      <Reveal delay={100}>
        <section
          className="flex flex-col gap-6 py-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="type-tagline">Research</p>
          <h2 className="type-body font-medium text-xl">
            11 interviews. Two sides of the same relationship.
          </h2>
          <p className="type-body">
            Before designing anything, I led 45 to 60 minute discovery
            interviews over three weeks with product and engineering alongside.
            Three questions anchored the research: what data employers actually
            use, what the partnership process looks like, and where there was
            room to help both sides do their jobs better.
          </p>

          {/* Methodology stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { stat: "11", label: "participants" },
              { stat: "3 weeks", label: "interview period" },
              { stat: "B to A+", label: "employer range" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-1 p-5 rounded-lg"
                style={{ background: "rgb(var(--surface))" }}
              >
                <p className="type-display-sm leading-none">{item.stat}</p>
                <p className="type-body opacity-60 text-sm">{item.label}</p>
              </div>
            ))}
          </div>

          {/* 3 findings */}
          <div className="flex flex-col gap-8 mt-2">
            {[
              {
                number: "01",
                finding: "40 hours a month, no standard format",
                detail:
                  "Self-reported time confirmed the scale. But the variance between individuals mattered more. Different tech literacy levels, different processes, one fragmented output.",
              },
              {
                number: "02",
                finding: "Employers do not pay, so the data is not a priority",
                detail:
                  "Employers value FP, but they do not fund it. Reporting was a small section in a broader HR update, lumped in with EAP and health insurance. A self-serve dashboard would be solving a problem they did not have.",
              },
              {
                number: "03",
                finding: "Quarterly meetings are about relationships, not reports",
                detail:
                  "Regular contact was about planning and relationship building. Data supported those conversations but did not drive them. The team needed better tools to walk in prepared, not more data to hand over.",
              },
            ].map((item) => (
              <div key={item.number} className="flex gap-6">
                <p className="type-meta opacity-30 pt-1 shrink-0">{item.number}</p>
                <div className="flex flex-col gap-2">
                  <p className="type-body font-medium">{item.finding}</p>
                  <p className="type-body opacity-70">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* The Pivot */}
      <Reveal delay={100}>
        <section
          className="flex flex-col gap-6 py-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="type-tagline">The pivot</p>
          <h2 className="type-body font-medium text-xl">
            Building for employers would have been solving the wrong problem
          </h2>
          <p className="type-body">
            The original roadmap initiative was a customer-facing dashboard.
            Three weeks of research made it hard to justify.
          </p>
          <p className="type-body">
            Employers were clear: FP costs them nothing, so there is no
            pressure to measure it. Reporting was minimal, often just a
            paragraph. The quotes below say the rest.
          </p>
          <p className="type-body">
            A self-serve dashboard would be shipping a feature for a job
            employers were not trying to do. The real job was inside. Give the
            team the tools to use data better themselves.
          </p>

          <div className="flex flex-col gap-4 mt-2">
            {[
              {
                quote:
                  "If it was something we paid for, there'd be a lot more scrutiny around the numbers. But because there's no real financial risk attached to it, from a priority list of the data that execs see, it's not really on their radar.",
                role: "A Grade Employer",
              },
              {
                quote:
                  "Its a very small section. Basically just a paragraph saying we're now up to this much [membership count].",
                role: "A Grade Employer",
              },
              {
                quote:
                  "[FP is] more of an optional extra. It's definitely one of our main leading benefits that people love. But not in terms of obtaining data or metrics from.",
                role: "A+ Grade Employer",
              },
              {
                quote: "[Program] Participation is more of your measure than ours.",
                role: "Employer",
              },
            ].map((item) => (
              <blockquote
                key={item.quote}
                className="type-body border-l-2 pl-5 italic opacity-80"
                style={{ borderColor: "rgb(var(--foreground))" }}
              >
                "{item.quote}"
                <footer className="type-meta not-italic opacity-50 mt-1">
                  {item.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Design */}
      <Reveal delay={100}>
        <section
          className="flex flex-col gap-6 py-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="type-tagline">Design</p>
          <h2 className="type-body font-medium text-xl">Built around real workflows</h2>
          <p className="type-body">
            I anchored the design to an existing HR-focused organisation report.
            Real data, known use case, no designing in the abstract.
          </p>

          <div className="w-full rounded-lg overflow-hidden">
            <img
              src="/work/Employer-reporting/report-structure.png"
              alt="Dashboard structure and data hierarchy"
              className="w-full h-auto"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <p className="type-meta opacity-40">Before — information redacted for privacy</p>
              <div className="w-full rounded-lg overflow-hidden">
                <img
                  src="/work/Employer-reporting/previous-report.jpg"
                  alt="The existing manual reporting process before the dashboard was built"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="type-meta opacity-40">After</p>
              <div className="w-full rounded-lg overflow-hidden">
                <img
                  src="/work/Employer-reporting/employer-report.jpg"
                  alt="The new employer reporting dashboard"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Data hierarchy */}
          <div className="flex flex-col gap-4 mt-4">
            <h3 className="type-body font-medium text-lg">
              A hierarchy built around how people read
            </h3>
            <p className="type-body">
              One rule: important to interesting, left to right, top to bottom.
            </p>
            <p className="type-body">
              KPIs anchor the top row. Memberships, penetration rate, member
              count, candidates, suspensions and cancellations. One glance,
              everything that matters before walking into a room.
            </p>
            <p className="type-body">
              A large membership over time chart follows. Context a stat cannot
              give. Growth, seasonality, launch impact.
            </p>
            <p className="type-body">
              Breakdowns come last, ordered by how often they come up in real
              conversations. Family type, program split, demographics, package
              mix, top facilities. Each one a question that used to require a
              spreadsheet.
            </p>
          </div>

          {/* Workflow */}
          <div className="w-full rounded-lg overflow-hidden">
            <img
              src="/work/Employer-reporting/dashboard-steps.png"
              alt="New dashboard workflow, from report generation to presentation in meetings"
              className="w-full h-auto"
            />
          </div>
        </section>
      </Reveal>

      {/* Validation */}
      <Reveal delay={100}>
        <section
          className="flex flex-col gap-6 py-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="type-tagline">Validation</p>
          <h2 className="type-body font-medium text-xl">Tested with the people who use it</h2>
          <p className="type-body">
            Validated with internal teams before shipping. Post-launch, usage
            confirmed it had become part of the daily workflow.
          </p>
          <EmployerReportingUsageCharts />
        </section>
      </Reveal>

      {/* Reflection */}
      <Reveal delay={100}>
        <section className="flex flex-col gap-6 py-16">
          <p className="type-tagline">Reflection</p>
          <h2 className="type-body font-medium text-xl">What I'd do differently</h2>
          <p className="type-body">
            The discovery interviews did most of the heavy lifting. Employer
            quotes cut through internal assumptions faster than any slide deck.
            The insight was simple: employers were not going to log in and
            generate their own reports. FP was free. Nobody scrutinises what
            they do not pay for.
          </p>
          <p className="type-body">
            The case for pivoting had two sides. Customer evidence that the tool
            would go unused. And the cost of the status quo: hourly rates,
            engineering overhead, inconsistent branded reports going out the
            door. The brand fragmentation argument landed just as hard as the
            saving.
          </p>
          <p className="type-body">
            The third piece was data control. An internal tool meant the
            business could shape which metrics were surfaced and how the story
            was told. That reframe shifted it from an efficiency play to a
            business asset.
          </p>
          <p className="type-body">
            Everything was presented through workshops, not a single
            recommendation meeting. Letting stakeholders surface concerns before
            a decision meant they felt part of the direction. The pivot landed
            because by the time a decision was needed, the room had already
            arrived there themselves.
          </p>
        </section>
      </Reveal>
    </main>
  );
}

function GapCard({
  title,
  description,
  emphasis = false,
}: {
  title: string;
  description: string;
  emphasis?: boolean;
}) {
  return (
    <div
      className="rounded-lg p-5 flex flex-col gap-2"
      style={{
        border: `1px dashed rgb(var(--border))`,
        background: "rgb(var(--surface))",
        opacity: emphasis ? 1 : 0.8,
      }}
    >
      <p className="type-meta" style={{ opacity: 0.5 }}>
        Gap to fill{emphasis ? " (entire section)" : ""}
      </p>
      <p className="type-body font-medium">{title}</p>
      <p className="type-meta" style={{ opacity: 0.6 }}>
        {description}
      </p>
    </div>
  );
}

function ImagePlaceholder({
  label,
  height,
}: {
  label: string;
  height: number;
}) {
  return (
    <div
      className="w-full rounded-lg flex items-center justify-center"
      style={{
        height: `${height}px`,
        background: "rgb(var(--surface))",
        border: "1px dashed rgb(var(--border))",
      }}
    >
      <p className="type-meta opacity-40">{label}</p>
    </div>
  );
}