import Reveal from "@/components/Reveal";

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
          <p className="type-body max-w-[600px]">
            The roadmap said build a customer-facing dashboard. Discovery said
            otherwise. We pivoted to an internal tool that is now used by the
            entire team almost every day, saving over $20k a year in manual
            reporting and giving the business control over how data is
            presented to employers.
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
      Live
    </div>
  </div>
</div>  

          <ImagePlaceholder label="Hero — dashboard UI" height={360} />
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
                desc: "estimated reduction in annual operational cost from reporting alone",
              },
              {
                stat: "Daily",
                desc: "usage across the entire team, consistently from launch",
              },
              {
                stat: "6 hrs",
                desc: "saved per large corporate report, per team member",
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

          {/* Quotes */}
          <div className="flex flex-col gap-4 mt-2">
            {[
              { quote: "Saves me 6 hours to do all the calculations.", name: "Harry Faeste, Account Manager" },
              { quote: "Incredibly useful tool for large corporate going forwards.", name: "Andrew Ang, Account Manager" },
              { quote: "Gives us clarity and leverage.", name: "Rosie Batty, Account Manager" },
              { quote: "I refuse to do manual spreadsheets anymore.", name: "Harry Faeste, Account Manager" },
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
          <p className="type-body max-w-[640px]">
            I led discovery, ran customer and stakeholder interviews, and was
            responsible for the recommendation to pivot the initiative. From
            there I designed the dashboard structure, data hierarchy, and
            interactions, validated with internal teams, and delivered
            high-fidelity designs with implementation guidance.
          </p>
          <GapCard
            title="Team structure"
            description="Who else was involved? Product manager, engineers, data team? What did you own vs what was a shared decision, especially the pivot call."
          />
        </section>
      </Reveal>

      {/* The Problem */}
      <Reveal delay={100}>
        <section
          className="flex flex-col gap-6 py-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="type-tagline">The problem</p>
          <h2 className="type-body font-medium text-xl">Manual, inconsistent, and eating team time</h2>
          <p className="type-body max-w-[640px]">
            The account management team was spending significant time manually
            collating data for employer reports. Every report was rebuilt from
            scratch, presentation quality was inconsistent, and the process
            required a level of spreadsheet literacy that not every team
            member had.
          </p>
          <ul className="flex flex-col gap-2 type-body opacity-70 max-w-[560px]">
            {[
              "Data manually collated for each employer report",
              "Inconsistent presentation and professionalism across reports",
              "Process dependent on individual tech literacy",
              "Time spent on admin rather than employer relationships",
              "Sensitive data with no narrative control",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="opacity-40 mt-1">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <GapCard
            title="How long did this process take before the tool existed?"
            description="A concrete time estimate for a typical report before the dashboard makes the 6-hour saving and $20k figure land harder."
          />
        </section>
      </Reveal>

      {/* The Pivot — this is the most important section */}
      <Reveal delay={100}>
        <section
          className="flex flex-col gap-6 py-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="type-tagline">The pivot</p>
          <h2 className="type-body font-medium text-xl">Discovery changed the direction</h2>
          <p className="type-body max-w-[640px]">
            The original roadmap initiative was a customer-facing dashboard.
            Discovery said otherwise.
          </p>
          <p className="type-body max-w-[640px]">
            After running interviews with employers and internal stakeholders,
            a consistent pattern emerged: employers are not paying for the
            program themselves, and the organisations that do pay have little
            concern with the granular metrics a self-serve dashboard would
            surface. The value was not in giving customers access to data. It
            was in giving the internal team the ability to tell a consistent,
            controlled story with it.
          </p>
          <p className="type-body max-w-[640px]">
            Building internally also meant we could reduce cost, control how
            sensitive data was presented, and ship something the team would
            actually use rather than a feature employers might ignore.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <ImagePlaceholder label="Original roadmap — customer dashboard concept" height={200} />
            <ImagePlaceholder label="Pivot decision — discovery insights" height={200} />
          </div>
          <GapCard
            title="What specifically did customers say that changed the direction?"
            description="Two or three direct quotes or paraphrased findings from the employer interviews that made the pivot case undeniable. This is the moment that defines the project."
          />
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
          <p className="type-body max-w-[640px]">
            I used an existing large HR-led organisation report as the base
            for prioritising metrics and workflows. This gave us a real anchor
            rather than designing in the abstract, and meant the first version
            could be validated against a known use case immediately.
          </p>
          <ImagePlaceholder label="Dashboard structure and data hierarchy" height={280} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ImagePlaceholder label="Key metrics view" height={200} />
            <ImagePlaceholder label="Employer report output" height={200} />
          </div>
          <GapCard
            title="What metrics does the dashboard surface?"
            description="A brief description of the data hierarchy: what's at the top level, what's drillable, what gets exported for employer reports. This gives the reader a sense of the scope."
          />
          <GapCard
            title="How does a team member go from the dashboard to a shareable employer report?"
            description="The workflow is the product. Show the steps: open dashboard, filter by employer, generate report, share. Even a simple flow diagram would work here."
          />
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
          <p className="type-body max-w-[640px]">
            Designs were validated with internal teams before shipping.
            Post-launch, usage data confirmed the tool had become part of the
            daily workflow across the entire account management team.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ImagePlaceholder label="Usage data Oct-Dec 2025" height={180} />
            <ImagePlaceholder label="Usage data Mar-May 2026" height={180} />
          </div>
          <GapCard
            title="Usage numbers for both periods"
            description="Add the actual usage figures for Oct-Dec 2025 and Mar-May 2026. Even session counts or active user numbers tell the adoption story clearly."
          />
        </section>
      </Reveal>

      {/* Reflection */}
      <Reveal delay={100}>
        <section className="flex flex-col gap-6 py-16">
          <p className="type-tagline">Reflection</p>
          <h2 className="type-body font-medium text-xl">What I'd do differently</h2>
          <GapCard
            title="Add your reflection here"
            description="The pivot is a strong story but it raises a question: how did you get stakeholder buy-in to change direction from the original roadmap? That negotiation and how you'd approach it earlier next time is worth a paragraph."
            emphasis
          />
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
        Gap to fill{emphasis ? " — entire section" : ""}
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
