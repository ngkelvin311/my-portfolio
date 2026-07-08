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
          <p className="type-body">
            The brief was to automate member approvals. The research said not
            yet. I made the case to redirect the initiative before a single
            wireframe was drawn, toward improvements that worked for every
            facilitator instead of 45% of them.
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

          <div className="w-full rounded-lg overflow-hidden">
            <img
              src="/work/Improved-approvals/approvals-main-image.png"
              alt="Redesigned approval interface overview"
              className="w-full h-auto"
            />
          </div>
        </div>
      </Reveal>

      {/* My role */}
      <Reveal delay={100}>
        <section
          className="flex flex-col gap-6 py-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="type-tagline">My role</p>
          <h2 className="type-body font-medium text-xl">
            I owned the initiative. The most important work happened before design started.
          </h2>
          <p className="type-body">
            I ran this end to end: research planning, stakeholder interviews,
            cross-functional workshop facilitation, prototype design, and
            moderated usability testing with six employer facilitators.
          </p>
          <p className="type-body">
            The defining contribution was earlier than any of that. I put a
            number on the original hypothesis, showed it would solve 45% of the
            problem at significant cost and risk, and made the case to product
            and engineering to go a different direction. The stakeholders agreed.
          </p>
          <div className="w-full rounded-lg overflow-hidden">
            <img
              src="/work/Improved-approvals/team-structure.png"
              alt="Team structure and my role across research, facilitation, and design"
              className="w-full h-auto"
            />
          </div>
        </section>
      </Reveal>

      {/* The redirect — THE story, moved up */}
      <Reveal delay={100}>
        <section
          className="flex flex-col gap-6 py-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="type-tagline">The redirect</p>
          <h2 className="type-body font-medium text-xl">
            The original hypothesis did not survive the data
          </h2>
          <p className="type-body">
            The initial brief was to create an automated solution. My initial idea was work email verification: members register
            with their company email, receive a confirmation link, and are
            approved automatically. Clean, logical, easy to explain in a
            stakeholder meeting. Then the data arrived.
          </p>
          <p className="type-body">
            Over 55% of members sign up with a personal email. Workplace facilitators only reported problems during the first two weeks of a program going live. The solution sold to stakeholders was an expensive automation build that
            would leave more than half the problem completely untouched.
            High-security employers like Victoria Police require full manual
            control regardless of email type. The original brief was expensive
            to build, required employer HR data sharing, raised privacy concerns
            for sensitive organisations, and still sent the majority of members
            back to a manual queue.
          </p>
          <p className="type-body">
            I put those numbers in front of the senior leadership team before design started to ensure that we were delivering value in the right way.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <div
              className="flex flex-col gap-3 p-6 rounded-lg"
              style={{
                background: "rgb(var(--surface))",
                border: "1px solid rgb(var(--border))",
              }}
            >
              <p className="type-tagline opacity-50">Original brief</p>
              <p className="type-body font-medium">
                Build full automation via work email verification
              </p>
              <p className="type-body opacity-60 text-sm">
                Covers 45% of members. Requires HR data sharing. High privacy
                risk for sensitive employers. Leaves 55% in the manual process.
              </p>
            </div>
            <div
              className="flex flex-col gap-3 p-6 rounded-lg"
              style={{
                background: "rgb(var(--surface))",
                border: "1px solid #22c55e",
              }}
            >
              <p className="type-tagline" style={{ color: "#22c55e" }}>
                Redirected direction
              </p>
              <p className="type-body font-medium">
                Targeted improvements to reduce facilitator effort now
              </p>
              <p className="type-body opacity-60 text-sm">
                Family auto-approval. UI redesign. Legacy logic removal.
                Notifications. Bulk actions. Lower risk, faster to ship, and
                every facilitator benefits immediately.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Results — after the redirect so the stats have context */}
      <Reveal delay={100}>
        <section
          className="flex flex-col gap-8 py-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="type-tagline">Results</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              {
                stat: "6.8 / 7",
                desc: "Average SEQ score across all four tasks. A score of 6 means 'easy to use'. We cleared it on every task.",
              },
              {
                stat: "6/6",
                desc: "Facilitators positive on family auto-approval. Unanimous, unprompted, across every session.",
              },
              {
                stat: "0",
                desc: "Re-approvals triggered by photo changes after the legacy logic was removed.",
              },
              {
                stat: "4/6",
                desc: "Facilitators failed to find the auto-approval toggle. Caught in testing before shipping. Moved to the area they would expect it.",
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
            title="To be measured after release"
            description="Time saved per session, reduction in BRM escalations, and facilitator satisfaction score."
          />
        </section>
      </Reveal>

      {/* The situation */}
      <Reveal delay={100}>
        <section
          className="flex flex-col gap-6 py-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="type-tagline">The situation</p>
          <h2 className="type-body font-medium text-xl">
            300 approvals. Half impossible to verify. All in the first two weeks.
          </h2>
          <p className="type-body">
            Approval volume is front-loaded to launch. Our data showed over 20,000 members per year
            signed up in the first two weeks of a program going live. 51% of
            all annual signups happen in that window. For an A-class employer:
            156 primary members, roughly 2 per membership equalling around 300 approvals to
            process. Half are family (partners/dependants), facilitators having no information or incentive to verify, approving based on trust.
          </p>

          <blockquote
            className="type-body border-l-2 pl-5 italic opacity-80"
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
              {
                stat: ">20,000",
                desc: "Members signed up in the first two weeks of a program going live",
              },
              {
                stat: ">50%",
                desc: "Of annual signups happen in the launch-to-direct-debit window",
              },
              {
                stat: "150",
                desc: "Average primary members an A-class employer processes at launch",
              },
              {
                stat: ">300",
                desc: "Minimum approvals per launch, with half unverifiable",
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

          <ul className="flex flex-col gap-2 type-body opacity-70">
            {[
              "Manual approval of every member including families at peak volume",
              "No notifications when new applications were waiting",
              "Cluttered UI with broken search and filter options",
              "Primary members often not grouped near family members, causing confusion and extra work for facilitators, especially as primary members needed to be verified in order for family to be approved.",
              "Limited bulk action capability in the current interface",
              "Re-approval triggered by photo changes, a legacy holdover from the physical card era",
              "Partnership managers pulled in to assist during large program launches instead of focusing on strategic work",
              "Some employers had independently built their own button clicking bots to cope",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="opacity-40 mt-1">-</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="w-full rounded-lg overflow-hidden">
            <img
              src="/work/Improved-approvals/old-approval-screen.jpg"
              alt="Old approval interface — before redesign"
              className="w-full h-auto"
            />
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
          <h2 className="type-body font-medium text-xl">
            Three numbers that ended the original brief
          </h2>
          <p className="type-body">
            The question going into research was not how to build automation.
            It was whether automation was the right solution at all. These
            three findings answered it.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                label: "Most common approval window",
                stat: "1 day",
                note: "The problem was front-loaded to launch. Ongoing management was already light.",
              },
              {
                label: "Weekly management time (established employer)",
                stat: "20–60 min",
                note: "Per week for all Fitness Passport management once a program was running.",
              },
              {
                label: "Approval rate",
                stat: "94%",
                note: "Almost no one was denied. For family dependants it was effectively 100%.",
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

          <p className="type-body">
            A 94% approval rate means almost every application succeeds. For
            family members it was 100%. Nobody was checking. Facilitators were
            clicking approve on trust, every time, with nothing to verify.
            Formalising that as an intentional system behaviour was not a
            compromise. It was the most honest solution available.
          </p>
          <p className="type-body">
            Every facilitator said the same thing about family members,
            unprompted.
          </p>

          <div className="flex flex-col gap-4">
            {[
              {
                quote:
                  "Just tick them as family and partner. There's no way we have any way of checking that.",
                name: "Facilitator 1",
              },
              {
                quote:
                  "I don't feel I'm in the position to judge who their family member is.",
                name: "Facilitator 3",
              },
              {
                quote:
                  "If it was memberships we were paying for, you'd have processes to really scrutinise that.",
                name: "Facilitator 3",
              },
              {
                quote:
                  "There's only so much we can validate anyway. If dependants wanted auto-approved, I'd see that as a benefit.",
                name: "Facilitator 2",
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

           <div className="w-full rounded-lg overflow-hidden">
            <img
              src="/work/Improved-approvals/member-approval-research-board.png"
              alt="Redesigned approval interface overview"
              className="w-full h-auto"
            />
          </div>
        </section>
      </Reveal>

      {/* Workshop */}
      <Reveal delay={100}>
        <section
          className="flex flex-col gap-6 py-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="type-tagline">Workshop</p>
          <h2 className="type-body font-medium text-xl">
            Turning research into a committed roadmap
          </h2>
          <p className="type-body">
            I facilitated a cross-functional session with product, engineering,
            BRM, and the employer product team. The goal was a prioritised list
            that all teams could commit to, with clear rationale for what was
            being built now, what was next, and what was being deferred and why.
          </p>

          <div className="flex flex-col gap-3">
            {[
              {
                finding:
                  "The photo re-approval trigger was legacy logic from the physical card era",
                action: "Removed as part of the New Member Conversion project.",
                horizon: "Done",
                color: "#22c55e",
              },
              {
                finding:
                  "Facilitators think in family units. The portal showed individuals.",
                action:
                  "Redesign the queue to nest family members under their primary.",
                horizon: "Near term (V1)",
                color: "#8b5cf6",
              },
              {
                finding:
                  "No notification when applications arrived. Facilitators checked manually.",
                action:
                  "Add opt-in email notifications with configurable frequency.",
                horizon: "Near term (V1)",
                color: "#8b5cf6",
              },
              {
                finding:
                  "Family members are accepted on trust at close to 100%. Auto-approval is formalising what already happens.",
                action:
                  "Implement family auto-approval with audit trail and employer-level toggle for risk-sensitive accounts.",
                horizon: "Near term (V1)",
                color: "#8b5cf6",
              },
              {
                finding:
                  "Work email verification covers less than half the member base",
                action:
                  "Defer. Future state once personal email coverage is solved.",
                horizon: "Future",
                color: "rgb(var(--muted))",
              },
              {
                finding:
                  "HR system integration raised PII concerns and employer willingness was unclear",
                action:
                  "Defer. Requires employer consent framework before any build.",
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

          
        </section>
      </Reveal>

      {/* Design — with rationale per decision */}
      <Reveal delay={100}>
        <section
          className="flex flex-col gap-6 py-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="type-tagline">Design</p>
          <h2 className="type-body font-medium text-xl">
            Four decisions, each with a rationale
          </h2>

          <div className="w-full rounded-lg overflow-hidden">
            <img
              src="/work/Improved-approvals/improved-approvals-hero.jpg"
              alt="Redesigned approval interface overview"
              className="w-full h-auto"
            />
          </div>

          <div className="flex flex-col gap-16 mt-4">

            {/* Decision 01 */}
            <div className="flex flex-col gap-4">
              <p className="type-meta opacity-40">Decision 01</p>
              <p className="type-body font-medium text-lg">
                Nest families under their primary member
              </p>
              <p className="type-body">
                The original interface showed every applicant as a separate row.
                Facilitators think in family units. Donald Norman calls this a
                mental model mismatch: when a system's structure does not match
                how users actually conceptualise the task, they have to carry the
                translation cost every time they use it. The fix was structural.
                Nest dependants under their primary. Approve the primary, the
                dependants cascade. The cognitive overhead of tracking who belongs
                to whom disappears.
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
                  <p className="type-meta opacity-40">Auto-approval settings</p>
                  <div className="w-full rounded-lg overflow-hidden">
                    <img
                      src="/work/Improved-approvals/verification-options.jpg"
                      alt="Auto-approval toggle and settings"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Decision 02 */}
            <div className="flex flex-col gap-4">
              <p className="type-meta opacity-40">Decision 02</p>
              <p className="type-body font-medium text-lg">
                Put the auto-approval toggle in settings, not on the family row
              </p>
              <p className="type-body">
                Turning family auto-approval on or off is a policy decision. It
                affects every future applicant, not just the application in front
                of you. Placing the toggle in settings signals that intentionally.
                Nielsen's error prevention heuristic: make consequential, hard-to-
                reverse actions harder to trigger by accident. A queue action and
                a policy change should not live in the same place.
              </p>
              <p className="type-body">
                Usability testing flagged the tradeoff directly. 4/6 facilitators
                expanded the family row expecting to find the toggle there and did
                not. That is a real discoverability problem. The rationale for
                placing it in settings is sound. The implementation does not work
                hard enough to surface it. That is the design debt this round
                leaves behind.
              </p>
            </div>

            {/* Decision 03 */}
            <div className="flex flex-col gap-4">
              <p className="type-meta opacity-40">Decision 03</p>
              <p className="type-body font-medium text-lg">
                Redesign the request more information flow from scratch
              </p>
              <p className="type-body">
                Facilitators were not using the built-in request button. They
                were emailing members directly through Teams because the portal
                left no confirmation and no record of what was sent. The feature
                existed. Nobody used it because it did not do enough.
              </p>
              <p className="type-body">
                The redesign added a message field on the same screen, pre-filled
                templates for the most common requests, and CC to self as the
                default. The portal now leaves a trace. Testing showed 5/6
                facilitators clicked the section heading instead of the menu
                item. That is a label problem and a placement problem, both
                corrected in the revised design.
              </p>
              <div className="w-full rounded-lg overflow-hidden">
                <img
                  src="/work/Improved-approvals/request-more-info.png"
                  alt="Request more information flow redesign"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Decision 04 */}
            <div className="flex flex-col gap-4">
              <p className="type-meta opacity-40">Decision 04</p>
              <p className="type-body font-medium text-lg">
                Make notification cadence configurable rather than picking a default
              </p>
              <p className="type-body">
                Six facilitators. Four completely different preferred cadences:
                fortnightly, start and end of week, per-application, and
                overdue-threshold only. No single default would be right for
                most people. Configurable cadence was the only honest answer
                across this spread.
              </p>
            </div>

          </div>
        </section>
      </Reveal>

      {/* Usability testing */}
      <Reveal delay={100}>
        <section
          className="flex flex-col gap-6 py-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="type-tagline">Usability testing</p>
          <h2 className="type-body font-medium text-xl">
            Three tasks passed. One failed. All of it useful.
          </h2>
          <p className="type-body">
            Moderated testing with six employer facilitators across Monash
            Health, Nexon, QLD Health, TAFE NSW, CSL, and NESA. Figma prototype
            used to put participants inside the real experience. Four tasks.
            The pass rate was not the most valuable output. What got caught was.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                task: "Task 1: Approve and deny members",
                score: "6.8 / 7",
                result: "Pass",
                color: "#22c55e",
                note: "6/6 completed the task. Family grouping was understood without instruction. Facilitator 1: \"All family members will also be approved, so you don't have to go through and do them individually. That's good.\" One finding to carry forward: Facilitator 5 looked for a DOB field to verify dependants before approving. It is not there. Family auto-approval: 6/6 positive. Primary auto-approval: 5/6 cautious.",
              },
              {
                task: "Task 2: Request more information",
                score: "Mixed",
                result: "Insight",
                color: "#eab308",
                note: "5/6 clicked the section title instead of the menu item. All expected a message field and CC to self on the next screen. Facilitator 3 would have bypassed the portal entirely: \"I'd get his email and send him an email personally.\" The portal left no confirmation and no record of the request. Every finding here directly drove the redesign of the flow.",
              },
              {
                task: "Task 3: Bulk approve",
                score: "6.7 / 7",
                result: "Pass",
                color: "#22c55e",
                note: "Found without instruction. Facilitator 1 won't use it on principle (accuracy concern). Facilitator 4 scanned the screen before locating it. Facilitator 5 uses it only at high-volume launch periods, not for regular sessions of 2 to 3 applicants.",
              },
              {
                task: "Task 4: Turn auto-approval off",
                score: "4/6 failed",
                result: "Fail",
                color: "#ef4444",
                note: "Facilitators 1 through 4 all expanded the family row looking for the toggle. It lives in settings. Facilitators 5 and 6 found it, with Facilitator 6 only succeeding after clicking through every available option. The toggle is in the right place for the right reasons. But a 4/6 failure rate means the current implementation is not good enough.",
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
            <h3 className="type-body font-medium text-lg">
              Navigation and tab labels
            </h3>
            <p className="type-body">
              Awaiting Approval and Overdue were intuitive to 6/6 without
              explanation. Single and Family tabs were low-utility to 5/6. The
              one facilitator who found them interesting said they still would not
              change their workflow. Awaiting Info landed well: 4/5 said it was
              useful to see what had already been requested and when. Updated
              confused everyone. Nobody agreed on what changed, why it appeared,
              or whether any action was needed. Most expected the member to
              reappear in the approval queue.
            </p>
            <blockquote
              className="type-body border-l-2 pl-5 italic opacity-80"
              style={{ borderColor: "rgb(var(--foreground))" }}
            >
              "I like that it's saying we're waiting for more information and
              then telling you what it is they're waiting for."
              <footer className="type-meta not-italic opacity-50 mt-1">
                Facilitator 4, on the Awaiting Info tab
              </footer>
            </blockquote>
            <blockquote
              className="type-body border-l-2 pl-5 italic opacity-80"
              style={{ borderColor: "rgb(var(--foreground))" }}
            >
              "Updated is interesting. I don't know what that requires any
              approval from me."
              <footer className="type-meta not-italic opacity-50 mt-1">
                Facilitator 2
              </footer>
            </blockquote>
          </div>

          {/* Notifications findings */}
          <div className="flex flex-col gap-3 mt-4">
            <h3 className="type-body font-medium text-lg">Notifications</h3>
            <p className="type-body">
              6/6 said reminders would be useful as a prompt to return and
              action, not as something essential. Preferred cadence split four
              ways: fortnightly (Facilitator 1), start and end of week
              (Facilitator 3), per-application (Facilitators 2 and 5), and
              overdue-threshold only (Facilitator 4). Configurable cadence was
              the only workable solution across this spread.
            </p>
          </div>

          {/* Unmet needs */}
          <div className="flex flex-col gap-4 mt-4">
            <h3 className="type-body font-medium text-lg">
              Three things we did not design for that testing surfaced
            </h3>
            <p className="type-body">
              These were not in the brief. All three would have shipped as
              undocumented system behaviour without sessions.
            </p>
            <div className="flex flex-col gap-8">
              {[
                {
                  number: "01",
                  finding:
                    "The portal silently auto-approves applications after a period of inactivity.",
                  detail:
                    "Facilitator 1 discovered this by accident. No warning, no audit trail, no notification. Applications were simply marked approved.",
                  quote:
                    "FP automatically accepts them. They're gone. Accepted if I haven't done enough action.",
                  speaker: "Facilitator 1",
                },
                {
                  number: "02",
                  finding:
                    "No record of who you have already followed up with.",
                  detail:
                    "Once a request for more information was sent, it vanished from view. No status against the application, no history of what was asked or when.",
                  quote:
                    "There's nothing. Not even a slot beside his name saying 'query pending'.",
                  speaker: "Facilitator 1",
                },
                {
                  number: "03",
                  finding:
                    "Family members scattered through the list with no grouping.",
                  detail:
                    "Without nesting, approving a primary member gave no view of associated dependants. Facilitators had to search the whole queue to find them.",
                  quote:
                    "A family member is not primary. They're randomly sprayed across the page.",
                  speaker: "Facilitator 2",
                },
              ].map((item) => (
                <div key={item.number} className="flex gap-6">
                  <p className="type-meta opacity-30 pt-1 shrink-0">
                    {item.number}
                  </p>
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
          <h2 className="type-body font-medium text-xl">
            A smaller bet with higher confidence
          </h2>
          <p className="type-body">
            The original brief would have required significant engineering effort,
            employer HR data sharing, privacy frameworks for sensitive
            organisations, and still left 55% of members in the manual process.
            The redirected approach improved the experience for every facilitator
            with a fraction of the build cost.
          </p>
          <p className="type-body">
            Full automation via work email matching remains on the roadmap,
            deferred until the personal email coverage gap is resolved and
            employer willingness on data sharing is better understood.
          </p>

          <GapCard
            title="Measure post-ship metrics"
            description="Reduction in facilitator approval time, BRM escalations during new program launches, and facilitator satisfaction score."
            emphasis
          />
          <GapCard
            title="Measure auto-approval adoption number"
            description="How many facilitators have turned on family auto-approval since it shipped?"
          />

        </section>
      </Reveal>

      {/* Reflection */}
      <Reveal delay={100}>
        <section className="flex flex-col gap-6 py-16">
          <p className="type-tagline">Reflection</p>
          <h2 className="type-body font-medium text-xl">
            What this project was really about
          </h2>
          <p className="type-body">
            The most impactful work on this project happened before design
            started. The brief said automate approvals. The data said the problem
            was two weeks wide and the proposed solution covered 45% of users.
            The 55% personal email stat did more work than any wireframe. Numbers
            that disprove an assumption land faster with stakeholders than
            concepts that propose a replacement.
          </p>
          <p className="type-body">
            The family auto-approval insight was hiding in plain sight. 300
            approvals at launch, half of them clicks with no real decision behind
            them. Every facilitator confirmed it unprompted, both in discovery and testing. The business just
            hadn't acted on it yet. That is the power of research: to make the invisible visible, and in doing so to change what is possible.
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
        Results to measure{emphasis ? " (after release)" : ""}
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
