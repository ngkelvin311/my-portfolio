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
             <div className="w-full rounded-lg overflow-hidden">
            <img
              src="/work/Improved-approvals/employer-report.jpg"
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
          <p className="type-body max-w-[640px]">
            I led discovery alongside product, running 11 interviews with internal
            partnership managers and employers across B to A+ grade organisations
            over three weeks. I was responsible for synthesising the findings,
            making the recommendation to pivot the initiative, and then leading
            design of the dashboard from that foundation.
          </p>
          <GapCard
            title="Team structure"
            description="Who else was involved beyond Joe? Product manager, engineers, data team? What did you own vs what was a shared decision, especially the pivot call."
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
          <h2 className="type-body font-medium text-xl">
            40 hours a month. No standard format. No consistency.
          </h2>
          <p className="type-body max-w-[640px]">
            Before this project, every employer report was built from scratch.
            Each partnership manager had their own way of pulling data together,
            their own presentation style, and their own level of spreadsheet
            literacy. Reports went to A and A+ employers on a regular cadence.
            Everyone else got one on request, if they asked at all.
          </p>
          <p className="type-body max-w-[640px]">
            Across the team, this added up to around 40 hours per month in
            manual reporting. At team rates, that translated to over $20,160 in
            operational cost every year, just to maintain a process that was
            already delivering inconsistent output.
          </p>
          <ul className="flex flex-col gap-2 type-body opacity-70 max-w-[560px]">
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
            className="type-body border-l-2 pl-5 italic opacity-80 max-w-[560px]"
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
          <p className="type-body max-w-[640px]">
            Before designing anything, I led 45 to 60 minute discovery
            interviews over three weeks, ensuring product and engineering was brought along for the journey. We talked to both internal partnership
            managers and employers across B to A+ categories. Three questions
            anchored the research: what data employers actually use, what the
            current partnership process looks like, and where there was room to
            help both sides do their jobs better.
          </p>

          {/* Methodology stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { stat: "11", label: "participants" },
              { stat: "3 wks", label: "interview period" },
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
                  "Self-reported time across the team confirmed the scale of the problem. But the variance between individuals was the more important signal. The issue was not just time spent. It was inconsistency created by different tech literacy levels and different processes running in parallel.",
              },
              {
                number: "02",
                finding: "Employers do not pay, so the data is not a priority",
                detail:
                  "FP is widely valued as a workplace benefit. But because employers are not funding the program directly, there is minimal executive scrutiny on the numbers. Reporting on FP was often a small section in a broader HR update, lumped in alongside EAP and health insurance. A self-serve dashboard would be solving a problem they did not have.",
              },
              {
                number: "03",
                finding: "Quarterly meetings are about relationships, not reports",
                detail:
                  "Both partnership managers and employers described regular contact as a chance to plan engagement activities and membership growth strategies. Data supported those conversations but did not drive them. The team needed better tools to walk into meetings prepared, not more data to hand over.",
              },
            ].map((item) => (
              <div key={item.number} className="flex gap-6 max-w-[640px]">
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
          <p className="type-body max-w-[640px]">
            The original roadmap initiative was a customer-facing dashboard.
            Three weeks of research made it hard to justify.
          </p>
          <p className="type-body max-w-[640px]">
            Employers were clear: FP does not cost them anything, so there is no
            pressure to measure it. Executive reporting on the program was
            minimal, often just a paragraph. One described it as "one of our
            main leading benefits that people love," but "not in terms of
            obtaining data or metrics from." Another was more direct: "If there
            was cost to us then you have to justify it."
          </p>
          <p className="type-body max-w-[640px]">
            A self-serve dashboard would be shipping a feature for a job
            employers were not trying to do. The real job was on the inside.
            Partnership managers needed to walk into quarterly meetings with
            consistent, ready-to-go data and a clear story to tell. The value
            was not in handing data to employers. It was in giving the team the
            tools to use data better themselves.
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
          <p className="type-body max-w-[640px]">
            I used an existing large HR-led organisation report as the base for
            prioritising metrics and workflows. This gave us a real anchor
            rather than designing in the abstract, and meant the first version
            could be validated against a known use case immediately.
          </p>

          {/* Previous report image */}

          <ImagePlaceholder label="Dashboard structure and data hierarchy" height={280} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="w-full rounded-lg overflow-hidden">
            <img
              src="/work/Improved-approvals/previous-report.jpg"
              alt="The existing manual employer report used as the design anchor for the first version of the dashboard"
              className="w-full h-auto"
            />
          </div>
            <ImagePlaceholder label="Employer report output" height={200} />
          </div>

          {/* Data hierarchy — replaces GapCard */}
          <div className="flex flex-col gap-4 mt-4">
            <h3 className="type-body font-medium text-lg">
              A hierarchy built around how people read
            </h3>
            <p className="type-body max-w-[640px]">
              The structure followed one rule: important to interesting, left to
              right, top to bottom. This applies whether it is a partnership
              manager scanning before a meeting or an employer looking at a PDF
              they were sent.
            </p>
            <p className="type-body max-w-[640px]">
              KPIs anchor the top row. Memberships, penetration rate, member
              count, candidates, suspensions and cancellations. The headline
              numbers. One glance, everything that matters before walking into
              a room.
            </p>
            <p className="type-body max-w-[640px]">
              A large membership over time chart follows. It gives context that
              a stat cannot. Growth, seasonality, the before and after of a
              launch push. It answers how the program is tracking without
              needing a follow-up question.
            </p>
            <p className="type-body max-w-[640px]">
              The breakdowns come last, ordered by how often they come up in
              real conversations between account managers and employers. Family
              type, program split, member demographics, package mix, top
              facilities. Each chart in that tier corresponds to a question that
              used to require a spreadsheet and half an hour to answer.
            </p>
          </div>

          {/* Workflow — replaces GapCard */}
          <div className="flex flex-col gap-4 mt-4">
            <h3 className="type-body font-medium text-lg">
              From dashboard to shareable report
            </h3>
            <p className="type-body max-w-[640px]">
              The whole workflow is five steps, replacing what used to take six
              hours of manual work.
            </p>
            <ol className="flex flex-col gap-3 max-w-[560px]">
              {[
                {
                  step: "Open the dashboard",
                  note: "Available to the entire team from one internal URL",
                },
                {
                  step: "Find the employer from the dropdown",
                  note: "All accounts in one place, no spreadsheet hunting",
                },
                {
                  step: "Filter by relevant categories if needed",
                  note: "Date range, membership type, program, or location",
                },
                {
                  step: "Export as a PDF",
                  note: "One click generates a formatted, ready-to-share report",
                },
                {
                  step: "Share",
                  note: "In the meeting, over email, or on a Teams call",
                },
              ].map((item, i) => (
                <li key={item.step} className="flex gap-4">
                  <span
                    className="type-meta opacity-30 shrink-0 pt-0.5"
                    style={{ minWidth: "1.5rem" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <p className="type-body font-medium">{item.step}</p>
                    <p className="type-body opacity-50 text-sm">{item.note}</p>
                  </div>
                </li>
              ))}
            </ol>
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
