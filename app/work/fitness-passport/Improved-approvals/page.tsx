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
            yet. I redirected the initiative from a costly full automation
            build toward targeted improvements that reduced facilitator effort
            without the risk or overhead of the original solution.
          </p>

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

      {/* Results */}
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
                desc: "Facilitators positive on family auto-approval, unanimous across all sessions",
              },
              {
                stat: "4/5",
                desc: "Facilitators found bulk approve with no instruction",
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
            description="Time saved per session, reduction in BRM escalations, or facilitator satisfaction score. Any one of these closes the business case loop."
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
            I owned the initiative from brief to build: research plan, stakeholder
            interviews, cross-functional workshop facilitation, prototype design,
            and moderated usability testing with four employer facilitators. I also
            made the case to redirect the initiative before any design work started.
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
          <h2 className="type-body font-medium text-xl">
            300 approvals. Half impossible to verify. All in the first two weeks.
          </h2>
          <p className="type-body max-w-[640px]">
            Approval volume is front-loaded to launch. In 2025, 21,284 members
            signed up in the first two weeks of a program going live. 51% of all
            annual signups happen in that window. For an A-class employer: 156
            primary members, roughly 2 per membership, 300+ approvals to click
            through. Half are family dependants. The portal gives facilitators
            nothing to verify them with. They approve on trust.
          </p>

          <blockquote
            className="type-body border-l-2 pl-5 italic opacity-80 max-w-[560px]"
            style={{ borderColor: "rgb(var(--foreground))" }}
          >
            "At the start we had a huge influx, but now it'd be no more than
            20 minutes a week."
            <footer className="type-meta not-italic opacity-50 mt-1">
              Employer facilitator
            </footer>
          </blockquote>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { stat: "21,284", desc: "Members signed up in the first two weeks of a program going live (2025)" },
              { stat: "51%", desc: "Of annual signups happen in the launch-to-direct-debit window" },
              { stat: "156", desc: "Average primary members an A-class employer needs to approve at launch" },
              { stat: "300+", desc: "Minimum approvals with ~2 per membership, half unverifiable" },
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

          <ul className="flex flex-col gap-2 type-body opacity-70 max-w-[560px]">
            {[
              "Manual approval of every member including families at peak volume",
              "No notifications when new applications were waiting",
              "No bulk action capability in the current interface",
              "Re-approval triggered by photo changes, a legacy holdover from the physical card era",
              "Partnership managers pulled in to assist during large program launches",
              "Two employers had independently built their own bots to cope",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="opacity-40 mt-1">-</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <ImagePlaceholder label="Current approval interface — before redesign" height={280} />
        </section>
      </Reveal>

      {/* The pivot */}
      <Reveal delay={100}>
        <section
          className="flex flex-col gap-6 py-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="type-tagline">The pivot</p>
          <h2 className="type-body font-medium text-xl">The original solution did not hold up to the data</h2>
          <p className="type-body max-w-[640px]">
            The initial hypothesis was work email verification: members register
            with their company email, get a confirmation link, and are approved
            automatically. The data killed it. Over 55% of members sign up with
            a personal email. High-security employers like Victoria Police require
            full manual control regardless. The solution covered less than half
            the problem and left the rest untouched.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <div
              className="flex flex-col gap-3 p-6 rounded-lg"
              style={{ background: "rgb(var(--surface))", border: "1px solid rgb(var(--border))" }}
            >
              <p className="type-tagline opacity-50">Original brief</p>
              <p className="type-body font-medium">Build full automation via work email verification</p>
              <p className="type-body opacity-60 text-sm">
                Covers 45% of members. Requires HR data sharing. High privacy
                risk for sensitive employers. Still left 55% in the manual process.
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
                benefits 100% of facilitators immediately.
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
            Research covered internal stakeholders and employer facilitators.
            The question was not how to build automation but whether it was the
            right solution at all. Three findings shaped everything that followed.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                label: "Most common approval time",
                stat: "1 day",
                note: "The problem was front-loaded to launch, not ongoing.",
              },
              {
                label: "Established employer management time",
                stat: "20 min",
                note: "Per week for all FP management once a program was running.",
              },
              {
                label: "Approval rate",
                stat: "94%",
                note: "Almost no one was denied. For dependants it was effectively 100%.",
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
            Every facilitator said the same thing about family members: no way
            to verify them, so accept on trust. Family auto-approval was
            unanimous. Primary auto-approval was mixed, with hesitation
            rooted in one consistent reason.
          </p>

          <div className="flex flex-col gap-4">
            {[
              {
                quote: "Just tick them as family and partner — there's no way we have any way of checking that.",
                name: "Facilitator 1",
              },
              {
                quote: "I don't feel I'm in the position to judge who their family member is.",
                name: "Facilitator 3",
              },
              {
                quote: "If it was memberships we were paying for, you'd have processes to really scrutinise that.",
                name: "Facilitator 3",
              },
              {
                quote: "There's only so much we can validate anyway. If dependants wanted auto-approved, I'd see that as a benefit.",
                name: "Facilitator 2",
              },
            ].map((item) => (
              <blockquote
                key={item.quote}
                className="type-body border-l-2 pl-5 italic opacity-80 max-w-[560px]"
                style={{ borderColor: "rgb(var(--foreground))" }}
              >
                "{item.quote}"
                <footer className="type-meta not-italic opacity-50 mt-1">
                  {item.name}
                </footer>
              </blockquote>
            ))}
          </div>

          <ImagePlaceholder label="Research synthesis board" height={240} />
        </section>
      </Reveal>

      {/* Workshop */}
      <Reveal delay={100}>
        <section
          className="flex flex-col gap-6 py-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="type-tagline">Workshop</p>
          <h2 className="type-body font-medium text-xl">Cross-functional ideation to prioritise the right problems</h2>
          <p className="type-body max-w-[640px]">
            I facilitated a workshop with product, engineering, BRM, and the
            employer product team to map findings against effort and produce a
            three-horizon prioritisation.
          </p>

          <div className="flex flex-col gap-3">
            {[
              {
                finding: "The photo re-approval trigger was legacy logic from the physical card era",
                action: "Removed as part of the New Member Conversion project.",
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
                finding: "No notification when new applications arrived",
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

          <div className="w-full rounded-lg overflow-hidden">
            <img
              src="/work/Improved-approvals/improved-approvals-hero.jpg"
              alt="Redesigned approval interface overview"
              className="w-full h-auto"
            />
          </div>

          <p className="type-body max-w-[640px]">
            Families are now nested under their primary member. Approving a
            primary cascades to all dependants automatically, with a toggle to
            override at the employer level.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <p className="type-meta opacity-40">Family grouping</p>
              <div className="w-full rounded-lg overflow-hidden">
                <img
                  src="/work/Improved-approvals/family-nesting.png"
                  alt="Family members nested under primary member"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="type-meta opacity-40">Auto-approval toggle</p>
              <div className="w-full rounded-lg overflow-hidden">
                <img
                  src="/work/Improved-approvals/verification-options.jpg"
                  alt="Auto-approval toggle and settings"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <p className="type-body max-w-[640px]">
            The request more information flow was redesigned with a message
            field, pre-filled templates, and CC to own email. Testing showed
            facilitators were routing around the built-in button entirely,
            following up via Teams and email because the portal left no
            confirmation and no trace.
          </p>

          <div className="w-full rounded-lg overflow-hidden">
            <img
              src="/work/Improved-approvals/request-more-info.png"
              alt="Request more information flow redesign"
              className="w-full h-auto"
            />
          </div>

          <p className="type-body max-w-[640px]">
            Notifications were made configurable by cadence. The right frequency
            varied too much across employers to pick a sensible default.
          </p>
        </section>
      </Reveal>

      {/* Usability testing */}
      <Reveal delay={100}>
        <section
          className="flex flex-col gap-6 py-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="type-tagline">Usability testing</p>
          <h2 className="type-body font-medium text-xl">Six facilitators, eight areas, clear signals</h2>
          <p className="type-body max-w-[640px]">
            Moderated testing with six employer facilitators across Monash
            Health, Nexon, QLD Health, TAFE NSW, CSL, and NESA. Figma make
            prototype used to ensure participants were immersed in the experience.
            Four core tasks, synthesis across eight areas.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                task: "Task 1: Approve and deny members",
                score: "6.8 / 7",
                result: "Pass",
                color: "#22c55e",
                note: "6/6 passed. Family grouping was understood immediately. Facilitator 1: \"All family members will also be approved, so you don't have to go through and do the family members. That's good.\" Facilitator 2: \"I like the way it's laid out — all the important information is there.\" Facilitator 5 looked for a DOB field to verify dependants. It wasn't there. Family auto-approval: 6/6 positive. Primary auto-approval: 5/6 cautious.",
              },
              {
                task: "Task 2: Request more information",
                score: "Mixed",
                result: "Insight",
                color: "#eab308",
                note: "5/6 clicked the title 'request more info' instead of the specific menu item. All expected a second screen with a message field and CC to self. Facilitator 3 would have emailed the member directly: \"I'd get his email and send him an email personally\" — and expected a pre-built template. The portal left no confirmation and no trace of the request.",
              },
              {
                task: "Task 3: Bulk approve",
                score: "6.7 / 7",
                result: "Pass",
                color: "#22c55e",
                note: "Found with no instruction. Facilitator 1 won't use it on principle (accuracy concern). Facilitator 4 searched the screen before finding it. Facilitator 5 only uses it for large launches — with 2–3 applicants per session now, rarely needed. Facilitator 3: \"The approve button at the top is a bit easier\" than the current interface which puts it at the bottom.",
              },
              {
                task: "Task 4: Turn auto-approval off",
                score: "4/6 failed",
                result: "Fail",
                color: "#ef4444",
                note: "Facilitators 1–4 all expanded the family row looking for the toggle. It lives in the settings panel. Facilitators 5 and 6 both found it — Facilitator 6 only after clicking through every option systematically. Facilitator 5 found it but remarked they didn't know why they would ever turn it off.",
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

          {/* Navigation findings */}
          <div className="flex flex-col gap-3 mt-4">
            <h3 className="type-body font-medium text-lg">Navigation and tab labels</h3>
            <p className="type-body max-w-[640px]">
              Awaiting Approval and Overdue were intuitive to 6/6. Single and
              Family tabs were low utility to 5/6 — the one who found them
              interesting said they still wouldn't matter. Awaiting Info landed
              well: 4/5 said it would be useful to see what they'd already
              requested. Updated confused everyone — nobody agreed on what
              changed, why it appeared, or whether action was needed. Most
              expected the member to go back into the approval queue.
            </p>
            <blockquote
              className="type-body border-l-2 pl-5 italic opacity-80 max-w-[560px]"
              style={{ borderColor: "rgb(var(--foreground))" }}
            >
              "I like that it's saying we're waiting for more information and then telling you what it is they're waiting for."
              <footer className="type-meta not-italic opacity-50 mt-1">
                Facilitator 4, on the Awaiting Info tab
              </footer>
            </blockquote>
            <blockquote
              className="type-body border-l-2 pl-5 italic opacity-80 max-w-[560px]"
              style={{ borderColor: "rgb(var(--foreground))" }}
            >
              "Updated is interesting — I don't know what that requires any approval from me."
              <footer className="type-meta not-italic opacity-50 mt-1">
                Facilitator 2
              </footer>
            </blockquote>
          </div>

          {/* Notifications findings */}
          <div className="flex flex-col gap-3 mt-4">
            <h3 className="type-body font-medium text-lg">Notifications</h3>
            <p className="type-body max-w-[640px]">
              6/6 said reminders would be useful as a prompt to return and
              action rather than something essential. Preferred cadence split
              four ways: fortnightly (Facilitator 1), start and end of week
              (Facilitator 3), per-application (Facilitators 2 and 5), and
              overdue-threshold only (Facilitator 4). Customisable cadence was
              the only workable solution across this spread.
            </p>
          </div>

          {/* Unmet needs */}
          <div className="flex flex-col gap-4 mt-4">
            <h3 className="type-body font-medium text-lg">Unmet needs surfaced during testing</h3>
            <div className="flex flex-col gap-8">
              {[
                {
                  number: "01",
                  finding: "The portal auto-approves applications after a period of inactivity.",
                  detail: "Facilitator 1 discovered this by accident.",
                  quote: "FP automatically accepts them — they're gone... accepted if I haven't done enough action.",
                  speaker: "Facilitator 1",
                },
                {
                  number: "02",
                  finding: "No visibility of who you've already chased.",
                  detail: "Once a request was sent it vanished. No record of follow-ups, no status against the application.",
                  quote: "There's nothing — not even a slot beside his name saying 'query pending'.",
                  speaker: "Facilitator 1",
                },
                {
                  number: "03",
                  finding: "Family members scattered through the list, not grouped.",
                  detail: "Without grouping, a facilitator approving a primary had no way to see associated dependants.",
                  quote: "A family member is not primary — they're randomly sprayed across the page.",
                  speaker: "Facilitator 2",
                },
              ].map((item) => (
                <div key={item.number} className="flex gap-6 max-w-[640px]">
                  <p className="type-meta opacity-30 pt-1 shrink-0">{item.number}</p>
                  <div className="flex flex-col gap-3">
                    <p className="type-body font-medium">{item.finding}</p>
                    <p className="type-body opacity-70">{item.detail}</p>
                    <blockquote
                      className="type-body border-l-2 pl-4 italic opacity-70"
                      style={{ borderColor: "rgb(var(--foreground))" }}
                    >
                      "{item.quote}"
                      <footer className="type-meta not-italic opacity-50 mt-1">
                        {item.speaker}
                      </footer>
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="w-full rounded-lg overflow-hidden">
              <img
                src="/work/Improved-approvals/approval-test-1.jpg"
                alt="Usability testing session 1"
                className="w-full h-auto"
              />
            </div>
            <div className="w-full rounded-lg overflow-hidden">
              <img
                src="/work/Improved-approvals/approval-test-2.jpg"
                alt="Usability testing session 2"
                className="w-full h-auto"
              />
            </div>
          </div>
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
            The original brief would have required significant engineering effort,
            employer HR data sharing, privacy frameworks for sensitive
            organisations, and still left 55% of members in the manual process.
            The redirected approach improved the experience for 100% of
            facilitators with a fraction of the build cost.
          </p>
          <p className="type-body max-w-[640px]">
            Full automation via work email matching remains on the roadmap,
            pending resolution of the personal email coverage gap and employer
            willingness on data sharing.
          </p>

          <GapCard
            title="Add post-ship metrics here"
            description="Reduction in facilitator approval time, BRM escalations during new program launches, or facilitator satisfaction score."
            emphasis
          />
          <GapCard
            title="Add the auto-approval adoption number"
            description="How many facilitators have turned on family auto-approval since it shipped?"
          />

          <ImagePlaceholder label="Approval volume before and after improvements" height={200} />
        </section>
      </Reveal>

      {/* Reflection */}
      <Reveal delay={100}>
        <section className="flex flex-col gap-6 py-16">
          <p className="type-tagline">Reflection</p>
          <h2 className="type-body font-medium text-xl">What this project was really about</h2>
          <p className="type-body max-w-[640px]">
            As a senior designer, I find the most impactful work often happens before any design work starts. The brief said automate approvals. The data
            said the problem was two weeks wide and the proposed solution only
            covered 45% of users. The 55% personal email stat did more work
            than any wireframe. Numbers that disprove an assumption land faster
            than concepts that propose a replacement.
          </p>
          <p className="type-body max-w-[640px]">
            The family auto-approval insight was hiding in plain sight. 300
            approvals, half of them clicks with no decision behind them.
            Every facilitator said so directly. The platform just hadn't acted
            on it. The three unmet needs caught in testing were the same pattern:
            things the system was doing informally that nobody had made official.
            All three would have shipped as bugs without testing.
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
