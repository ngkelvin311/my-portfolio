import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Automated Approvals — Kelvin Ng",
  description:
    "Redirecting an expensive automation initiative toward high-impact improvements after research revealed the original hypothesis did not hold up.",
};

export default function AutomatedApprovalsPage() {
  return (
    <main
      id="case-study"
      role="main"
      aria-label="Automated Approvals case study"
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
            <p>Rethinking Automated Approvals</p>
          </div>
          <p className="type-body max-w-[600px]">
            The brief was to automate member approvals. The research said not
            yet. Through discovery, stakeholder workshops, data analysis, and
            usability testing with real facilitators, I redirected the initiative
            from a costly full automation build toward a set of targeted
            improvements that reduced facilitator effort without the risk or
            overhead of the original solution.
          </p>

          {/* Meta grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
            {[
              { label: "Company", value: "Fitness Passport" },
              { label: "Role", value: "Senior Product Designer" },
              { label: "Type", value: "Discovery and redesign" },
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
                  style={{ background: "#eab308" }}
                />
                In tech discovery
              </div>
            </div>
          </div>

          <ImagePlaceholder label="Hero — approval interface before and after" height={360} />
        </div>
      </Reveal>

      {/* Results up front */}
      <Reveal delay={100}>
        <section
          className="flex flex-col gap-8 py-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="type-tagline">Results</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              {
                stat: "6.8",
                desc: "Average SEQ score across all tested tasks. Anything above 6 is considered easy",
              },
              {
                stat: "5/5",
                desc: "Facilitators positive on family auto-approval, unanimous across all testing sessions",
              },
              {
                stat: "4/5",
                desc: "Facilitators found bulk approve immediately with no instruction",
              },
              {
                stat: "0",
                desc: "Re-approvals triggered by photo changes after legacy logic was removed",
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
          <GapCard
            title="Add post-ship metrics here"
            description="What was the measurable reduction in facilitator effort after improvements shipped? Time saved per session, reduction in BRM escalations, or facilitator satisfaction score. Any one of these closes the business case loop."
          />
        </section>
      </Reveal>

      {/* My role */}
      <Reveal delay={100}>
        <section
          className="flex flex-col gap-6 py-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="type-tagline">My role</p>
          <h2 className="type-body font-medium text-xl">Research lead, workshop facilitator, designer</h2>
          <p className="type-body max-w-[640px]">
            I drove the initiative from initial brief through research, workshop
            facilitation, prototype design, and usability testing. This included
            writing the research plan, conducting stakeholder and employer
            interviews, facilitating a cross-functional ideation workshop with
            product, engineering, and BRM, and running moderated usability
            testing with five employer facilitators.
          </p>
          <p className="type-body max-w-[640px]">
            Critically, I was also responsible for making the case to redirect
            the initiative. The original brief asked for full automation. The
            research showed that was the wrong problem to solve at this stage.
            Getting alignment on a different direction required presenting
            evidence clearly to product and business stakeholders.
          </p>
          <GapCard
            title="Name your collaborators here"
            description="Who was the PM? Who were the engineers? What did you own versus what was collaborative? Naming the team shows you operate as part of one."
          />
        </section>
      </Reveal>

      {/* The problem */}
      <Reveal delay={100}>
        <section
          className="flex flex-col gap-6 py-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="type-tagline">The problem</p>
          <h2 className="type-body font-medium text-xl">A real pain, concentrated in a small window</h2>
          <p className="type-body max-w-[640px]">
            Employer facilitators manage the Fitness Passport program inside
            their organisations. One of their core jobs is approving every
            member who applies, including family members. On an established
            program this is genuinely low effort: facilitators reported
            spending between 20 minutes and 2 hours a week on all FP
            management combined.
          </p>
          <p className="type-body max-w-[640px]">
            The early stages of a new program are a different story. The gap
            between program launch and first direct debit is the highest volume
            window, and all of it falls on one or two people. Some had hundreds
            of applications to action at once. Facilitators burned out, stopped
            checking applications thoroughly, and began batch approving without
            review. Partnership managers were being pulled in to help. Two
            employers had already built their own bots to cope.
          </p>
          <ul className="flex flex-col gap-2 type-body opacity-70 max-w-[560px]">
            {[
              "Manual approval of every member including families at peak volume",
              "No notifications when new applications were waiting",
              "No bulk action capability in the current interface",
              "Re-approval triggered by photo changes, a legacy holdover from the physical card era",
              "Partnership managers pulled in to assist during large program launches",
              "Two employers had independently built their own bots to manage the load",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="opacity-40 mt-1">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <ImagePlaceholder label="Current approval interface — before redesign" height={280} />
        </section>
      </Reveal>

      {/* Why the hypothesis was wrong */}
      <Reveal delay={100}>
        <section
          className="flex flex-col gap-6 py-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="type-tagline">The pivot</p>
          <h2 className="type-body font-medium text-xl">The original solution did not hold up to the data</h2>
          <p className="type-body max-w-[640px]">
            The initial hypothesis was a work email verification model: members
            would register with their company email, receive a confirmation
            link, and be automatically approved with no facilitator involvement.
            This approach is used in employee purchase programs and looked like
            a clean fit.
          </p>
          <p className="type-body max-w-[640px]">
            The data immediately complicated it. 55% of Fitness Passport members
            sign up with a personal email. A work email verification system
            would cover, at best, half the member base by default. The other
            half would still flow through manual approval. Additional
            complications included shared email domains, employees without work
            emails, and employers with complex organisational structures where
            domain matching was unreliable.
          </p>
          <p className="type-body max-w-[640px]">
            Before any design work started, the cost-to-coverage ratio of full
            automation did not stack up at this stage of the product. The
            problem needed to be reframed before solutions were designed.
          </p>

          {/* Before/after framing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <div
              className="flex flex-col gap-3 p-6 rounded-lg"
              style={{ background: "rgb(var(--surface))", border: "1px solid rgb(var(--border))" }}
            >
              <p className="type-tagline opacity-50">Original brief</p>
              <p className="type-body font-medium">Build full automation via work email verification</p>
              <p className="type-body opacity-60 text-sm">
                Would only cover 45% of members. Required employer HR data
                sharing. High privacy risk for sensitive employers. Expensive
                to build. Still left 55% in the manual process.
              </p>
            </div>
            <div
              className="flex flex-col gap-3 p-6 rounded-lg"
              style={{ background: "rgb(var(--surface))", border: "1px solid #22c55e" }}
            >
              <p className="type-tagline" style={{ color: "#22c55e" }}>Redirected direction</p>
              <p className="type-body font-medium">Targeted improvements to reduce facilitator effort now</p>
              <p className="type-body opacity-60 text-sm">
                Family auto-approval. UI redesign. Legacy logic removal.
                Notifications. Bulk actions. Lower risk, faster to ship,
                and benefits 100% of facilitators immediately.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Research */}
      <Reveal delay={100}>
        <section
          className="flex flex-col gap-6 py-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="type-tagline">Research</p>
          <h2 className="type-body font-medium text-xl">Validating the problem before designing the solution</h2>
          <p className="type-body max-w-[640px]">
            I wrote and led a research plan across internal stakeholders and
            employer facilitators. The core question was not how to build
            automation, but whether automation was the right solution at all
            and if not, what interventions would have the most impact.
          </p>
          <p className="type-body max-w-[640px]">
            We spoke with BRM team members first to understand what
            expectations were being set with employers before launch, and what
            the handover between business development and partnerships looked
            like. This surfaced a gap: facilitators were being given training
            videos but had inconsistent mental models about how much approval
            work the role would involve.
          </p>

          {/* Key findings grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
            {[
              {
                label: "Most common approval time",
                stat: "1 day",
                note: "The problem was not ongoing. It was front-loaded to launch.",
              },
              {
                label: "Established employer management time",
                stat: "20 min",
                note: "Per week for all FP management once a program was running.",
              },
              {
                label: "Approval rate",
                stat: "94%",
                note: "Almost no one was being denied. The process was mostly a formality.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-2 p-6 rounded-lg"
                style={{ background: "rgb(var(--surface))" }}
              >
                <p className="type-meta opacity-50">{item.label}</p>
                <p className="type-display-sm leading-none">{item.stat}</p>
                <p className="type-body opacity-60 text-sm">{item.note}</p>
              </div>
            ))}
          </div>

          <p className="type-body max-w-[640px]">
            One finding stood out above all others: nobody was checking family
            members. The portal gave facilitators nothing to verify dependents
            with beyond a photo, and in later usability testing 4 out of 4
            participants confirmed explicitly that they accepted family members
            on trust. This made auto-approving dependents an immediate low-risk
            win that did not require any HR integration or email verification.
          </p>

          <GapCard
            title="Add quotes from employer or BRM interviews"
            description="What did facilitators say about the approval burden during launch? What did BRM say about expectations being set? Direct quotes or paraphrased insights from interviews make the research section land much harder."
          />
          <ImagePlaceholder label="Research plan or interview synthesis" height={240} />
        </section>
      </Reveal>

      {/* Workshop */}
      <Reveal delay={100}>
        <section
          className="flex flex-col gap-6 py-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="type-tagline">Workshop</p>
          <h2 className="type-body font-medium text-xl">Cross-functional ideation to find the right problems</h2>
          <p className="type-body max-w-[640px]">
            I facilitated a cross-functional workshop with product managers,
            engineers, BRM team members, and the employer product team. The
            goal was to separate the job facilitators were actually trying to
            do (verify that an applicant is a legitimate employee) from the
            solution the business had assumed they needed.
          </p>
          <p className="type-body max-w-[640px]">
            The workshop produced a prioritisation framework across three
            horizons: near-term UI improvements that could ship quickly,
            notification and logic changes with high confidence, and full
            automation as a future state once coverage and trust questions
            were resolved.
          </p>

          {/* Workshop findings */}
          <div className="flex flex-col gap-3 mt-2">
            {[
              {
                finding: "The photo re-approval trigger was legacy logic from the physical card era",
                action: "Removed as part of the New Member Conversion project. Identified in this workshop but fixed there since it touched the same onboarding flow.",
                horizon: "Done",
                color: "#22c55e",
              },
              {
                finding: "Facilitators wanted to nest dependents under primaries, not view them separately",
                action: "Redesign the UI to group families under primary member",
                horizon: "Near term",
                color: "#8b5cf6",
              },
              {
                finding: "No notification when new applications arrived, leading to long wait times",
                action: "Add opt-in email notifications with configurable frequency",
                horizon: "Near term",
                color: "#8b5cf6",
              },
              {
                finding: "Family members are already accepted on trust. Auto-approving them is low risk.",
                action: "Implement family auto-approval with audit trail and toggle",
                horizon: "Near term",
                color: "#8b5cf6",
              },
              {
                finding: "Work email verification covers less than half the member base",
                action: "Defer. Future state once personal email coverage is solved.",
                horizon: "Future",
                color: "rgb(var(--muted))",
              },
              {
                finding: "HR system integration raised PII concerns and employer willingness was unclear",
                action: "Defer. Future state requiring employer consent framework first.",
                horizon: "Future",
                color: "rgb(var(--muted))",
              },
            ].map((item) => (
              <div
                key={item.finding}
                className="flex flex-col sm:flex-row sm:items-start gap-4 p-5 rounded-lg"
                style={{
                  background: "rgb(var(--surface))",
                  border: "1px solid rgb(var(--border))",
                }}
              >
                <div className="flex flex-col gap-1 flex-1">
                  <p className="type-body opacity-70 text-sm">{item.finding}</p>
                  <p className="type-body font-medium text-sm">{item.action}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span
                    className="inline-block w-2 h-2 rounded-full"
                    style={{ background: item.color }}
                  />
                  <span className="type-meta" style={{ color: item.color }}>
                    {item.horizon}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <ImagePlaceholder label="Workshop output or prioritisation matrix" height={240} />
        </section>
      </Reveal>

      {/* Design */}
      <Reveal delay={100}>
        <section
          className="flex flex-col gap-6 py-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="type-tagline">Design</p>
          <h2 className="type-body font-medium text-xl">Targeted improvements, not a blank slate</h2>
          <p className="type-body max-w-[640px]">
            The redesign focused on four areas: the approval interface itself,
            the request more information flow, notification controls, and the
            family auto-approval toggle. Every change was traceable back to a
            specific finding from research or the workshop.
          </p>

          <ImagePlaceholder label="Redesigned approval interface — overview" height={320} />

          <p className="type-body max-w-[640px]">
            Families were nested under their primary member. Approving a primary
            now cascades to all dependents automatically, removing the biggest
            source of unnecessary manual work. Facilitators retain full control
            with a toggle to turn this off at the employer level.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ImagePlaceholder label="Family grouping — nested view" height={220} />
            <ImagePlaceholder label="Auto-approval toggle and settings" height={220} />
          </div>

          <p className="type-body max-w-[640px]">
            The request more information flow was redesigned to include a
            message field, consolidate the menu options, and allow facilitators
            to CC their own email for tracking. The current portal left no
            record of requests sent, so facilitators were following up through
            Teams and email instead of using the built-in tool at all.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ImagePlaceholder label="Request more info — before" height={220} />
            <ImagePlaceholder label="Request more info — after" height={220} />
          </div>

          <GapCard
            title="Add the notification design here"
            description="Show the notification settings screen and the email template. The configurable frequency was a key finding from testing — facilitators ranged from wanting per-application alerts to fortnightly digests."
          />
        </section>
      </Reveal>

      {/* Usability testing */}
      <Reveal delay={100}>
        <section
          className="flex flex-col gap-6 py-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="type-tagline">Usability testing</p>
          <h2 className="type-body font-medium text-xl">Five facilitators, four tasks, clear signals</h2>
          <p className="type-body max-w-[640px]">
            I ran moderated usability testing with five employer facilitators
            across Monash Health, Nexon, QLD Health, TAFE NSW, and CSL.
            Testing used a Figma prototype and covered four core tasks.
          </p>

          {/* Task results */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                task: "Task 1: Approve and deny members",
                score: "6.8 / 7",
                result: "Pass",
                color: "#22c55e",
                note: "Facilitators understood family grouping immediately. Participant 1: \"All family members will also be approved, so you don't have to go through and do the family members. That's good.\"",
              },
              {
                task: "Task 2: Request more information",
                score: "Mixed",
                result: "Insight",
                color: "#eab308",
                note: "4 out of 5 clicked the title instead of the specific menu item. All five expected a message field and the ability to CC themselves. A clear design change was needed.",
              },
              {
                task: "Task 3: Bulk approve",
                score: "6.8 / 7",
                result: "Pass",
                color: "#22c55e",
                note: "Found and used with no instruction. Participant : \"The approve button at the top is a bit easier\" than the current interface which puts it at the bottom.",
              },
              {
                task: "Task 4: Turn auto-approval off",
                score: "4/5 failed",
                result: "Fail",
                color: "#ef4444",
                note: "All four failing participants looked for the toggle in the kebab menu of the family row. Only one found it in the settings panel. Discoverability needed to be fixed.",
              },
            ].map((item) => (
              <div
                key={item.task}
                className="flex flex-col gap-3 p-6 rounded-lg"
                style={{
                  background: "rgb(var(--surface))",
                  border: "1px solid rgb(var(--border))",
                }}
              >
                <div className="flex items-center justify-between">
                  <p className="type-tagline opacity-60">{item.task}</p>
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-block w-2 h-2 rounded-full"
                      style={{ background: item.color }}
                    />
                    <span className="type-meta" style={{ color: item.color }}>
                      {item.result}
                    </span>
                  </div>
                </div>
                <p className="type-body font-medium">{item.score}</p>
                <p className="type-body opacity-60 text-sm">{item.note}</p>
              </div>
            ))}
          </div>

          <p className="type-body max-w-[640px]">
            Testing also confirmed that nobody checks whether family members
            are real. All four participants said explicitly they cannot verify
            dependents and accept them on trust. The portal gives them nothing
            except a photo, and even that was not being used to make decisions.
            This validated family auto-approval as the right direction with
            minimal fraud risk, as family members pay for their own membership
            regardless.
          </p>

          <ImagePlaceholder label="Testing session or prototype screens" height={240} />
        </section>
      </Reveal>

      {/* Impact */}
      <Reveal delay={100}>
        <section
          className="flex flex-col gap-6 py-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="type-tagline">Impact</p>
          <h2 className="type-body font-medium text-xl">A smaller bet with higher confidence</h2>
          <p className="type-body max-w-[640px]">
            The original automation brief would have required significant
            engineering effort, employer cooperation on HR data, privacy
            frameworks for sensitive organisations, and would still have left
            55% of members in the manual process. The redirected approach
            delivered improvements to 100% of facilitators with a fraction of
            the build cost.
          </p>
          <p className="type-body max-w-[640px]">
            Full automation via work email domain matching and HR system
            integration are formally on the roadmap as future state, with
            clear preconditions: resolution of the personal email coverage
            gap, employer willingness to share domain data, and privacy
            frameworks for high-sensitivity employers.
          </p>

          <GapCard
            title="Add post-ship metrics here"
            description="Reduction in facilitator approval time per session. Reduction in BRM escalations during new program launches. Facilitator satisfaction score. Any one of these closes the loop on the business case for the redirected direction."
            emphasis
          />
          <GapCard
            title="Add the auto-approval adoption number"
            description="How many facilitators have turned on family auto-approval since it shipped? Adoption data validates the design decision and shows the feature is being used, not just built."
          />

          <ImagePlaceholder label="Approval volume before and after improvements" height={200} />
        </section>
      </Reveal>

      {/* Reflection */}
      <Reveal delay={100}>
        <section className="flex flex-col gap-6 py-16">
          <p className="type-tagline">Reflection</p>
          <h2 className="type-body font-medium text-xl">What this project was really about</h2>
          <GapCard
            title="Write one honest paragraph here"
            description="The most senior thing you did on this project was change what was being built before any design work started. How did you make that case? What would have happened if you had just shipped what was asked for? What would you do differently? One paragraph here reads as the most senior part of the whole case study."
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
