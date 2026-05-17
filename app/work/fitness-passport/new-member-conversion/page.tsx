import Reveal from "@/components/Reveal";

export const metadata = {
  title: "New Member Conversion — Kelvin Ng",
  description:
    "Redesigning the Fitness Passport signup and onboarding flow to reduce friction and improve member conversion.",
};

export default function NewMemberConversionPage() {
  return (
    <main
      id="case-study"
      role="main"
      aria-label="New Member Conversion case study"
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
            <p>New Member Conversion</p>
          </div>
          <p className="type-body max-w-[600px]">
            The existing signup and onboarding flow was a single tangled
            journey with too much friction, unclear pricing, and undetected
            legal risk. We separated, simplified, and rebuilt it. Conversion
            climbed from 57% to 65% and same-day conversion jumped from 50%
            to 93%.
          </p>

          {/* Meta grid */}
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
  {[
    { label: "Company", value: "Fitness Passport" },
    { label: "Role", value: "Senior Product Designer" },
    { label: "Type", value: "End to end redesign" },
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

          {/* Hero image placeholder */}
          <ImagePlaceholder label="Hero — signup flow before and after" height={360} />
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
              { stat: "65%", desc: "conversion rate, up from 57% target at launch" },
              { stat: "93%", desc: "same-day conversion, up from 50% (Jan 2024 to Feb 2025)" },
              { stat: "94.5%", desc: "of members completing medical declaration at first gate" },
              { stat: "6.5", desc: "average SEQ score during usability testing" },
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
            I led design end to end: journey mapping, research, co-design
            sessions with product and engineering, prototype testing, and
            final UI delivery. I was also responsible for identifying success
            metrics and building the analytics framework to measure and
            improve the feature post-launch.
          </p>
          <GapCard
            title="Specific team structure"
            description="Name the product manager, engineers, and any other stakeholders involved. What did you own vs what was collaborative?"
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
          <h2 className="type-body font-medium text-xl">One tangled journey doing too many jobs</h2>
          <p className="type-body max-w-[640px]">
            Signup and onboarding were a single combined flow. Prospective
            members were being asked to complete too many steps before they
            had committed, pricing was unclear, and the medical declaration
            process had significant legal exposure we had not yet identified.
          </p>
          <ul className="flex flex-col gap-2 type-body opacity-70 max-w-[560px]">
            {[
              "High cognitive load at the point of sign up",
              "Unclear pricing leading to drop-off",
              "Signup and onboarding conflated into one journey",
              "Medical declaration flow with undetected legal risk",
              "No clear success metrics or analytics in place",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="opacity-40 mt-1">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <GapCard
            title="Conversion rate before the project started"
            description="What was the baseline conversion rate when you picked this up? The 57% target and 65% outcome land harder if we know what you started from."
          />
        </section>
      </Reveal>

      {/* Approach */}
      <Reveal delay={100}>
        <section
          className="flex flex-col gap-6 py-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="type-tagline">Approach</p>
          <h2 className="type-body font-medium text-xl">Map, identify, co-design, validate</h2>
          <p className="type-body max-w-[640px]">
            I started by mapping the existing journey end to end, identifying
            every friction point and source of cognitive load. From there I
            worked with product and engineering in co-design sessions to
            explore how to separate signup from onboarding and rebuild each
            as a focused, single-purpose flow.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <ImagePlaceholder label="Journey map — existing flow" height={200} />
            <ImagePlaceholder label="Friction point analysis" height={200} />
          </div>
          <p className="type-body max-w-[640px]">
            The medical declaration discovery came during this mapping phase.
            The existing flow had legal exposure that had not been flagged
            before. I proposed and designed a three gate approach to address
            it, ensuring compliance without creating unnecessary friction for
            the majority of members.
          </p>
          <GapCard
            title="What the research revealed specifically"
            description="What did members say or do during research that changed your direction? What surprised you? This is where the thinking shows."
          />
          <GapCard
            title="Alternatives considered for the medical declaration gates"
            description="Why three gates? What other approaches did you consider and why did this structure win? This decision has significant legal and UX implications — show the reasoning."
          />
        </section>
      </Reveal>

      {/* Testing */}
      <Reveal delay={100}>
        <section
          className="flex flex-col gap-6 py-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="type-tagline">Testing</p>
          <h2 className="type-body font-medium text-xl">Validated before shipping</h2>
          <p className="type-body max-w-[640px]">
            Prototypes were tested before shipping. The 90% completion rate
            and 6.5 SEQ score during testing gave us confidence the changes
            were working. SEQ (Single Ease Question) scores above 6 indicate
            a task that users find genuinely easy.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              className="flex flex-col gap-2 p-6 rounded-lg"
              style={{ background: "rgb(var(--surface))" }}
            >
              <p className="type-display-sm leading-none">90%+</p>
              <p className="type-body opacity-60 text-sm">
                completion rate during usability testing
              </p>
            </div>
            <div
              className="flex flex-col gap-2 p-6 rounded-lg"
              style={{ background: "rgb(var(--surface))" }}
            >
              <p className="type-display-sm leading-none">6.5</p>
              <p className="type-body opacity-60 text-sm">
                average SEQ score — anything above 6 is considered easy
              </p>
            </div>
          </div>
          <GapCard
            title="Who did you test with and how many sessions?"
            description="Participant profile, number of sessions, and what changed as a result of testing. Even one or two specific changes that came from testing shows the process working."
          />
          <ImagePlaceholder label="Testing setup or prototype screens" height={200} />
        </section>
      </Reveal>

      {/* Design */}
      <Reveal delay={100}>
        <section
          className="flex flex-col gap-6 py-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="type-tagline">Design</p>
          <h2 className="type-body font-medium text-xl">Separation as the core principle</h2>
          <p className="type-body max-w-[640px]">
            The central design decision was separating signup from onboarding.
            Each became a focused flow with a single job. Signup: commit and
            pay. Onboarding: set up your account and complete your profile.
          </p>
          <ImagePlaceholder label="Signup flow — key screens" height={280} />
          <p className="type-body max-w-[640px]">
            The medical declaration was restructured into three gates. Gate
            one catches the majority of users (94.5% complete here). Gates
            two and three handle edge cases with appropriate friction, keeping
            the path clear for members who do not have complex medical needs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <ImagePlaceholder label="Gate 1 — medical declaration" height={240} />
            <ImagePlaceholder label="Gate 2" height={240} />
            <ImagePlaceholder label="Gate 3" height={240} />
          </div>
          <p className="type-body max-w-[640px]">
            Patterns from the redesign were contributed back to the design
            system foundations. 70% of manual email templates created since
            December 2025 now use the new template structure built as part
            of this project.
          </p>
          <ImagePlaceholder label="Email template system" height={200} />
          <GapCard
            title="Price comprehension improvements"
            description="You noted improved price comprehension as an outcome. Show the before and after of how pricing was presented and what changed."
          />
        </section>
      </Reveal>

      {/* Impact */}
      <Reveal delay={100}>
        <section
          className="flex flex-col gap-6 py-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="type-tagline">Impact</p>
          <h2 className="type-body font-medium text-xl">Measurable from week one</h2>
          <p className="type-body max-w-[640px]">
            In the first week of release conversion was 59%, already above
            the 57% target. By May 2026 it had climbed to 65%. Same-day
            conversion moved from 50% to 93%, meaning members who start the
            flow are now completing it the same day at nearly twice the
            previous rate.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ImagePlaceholder label="Conversion rate over time" height={200} />
            <ImagePlaceholder label="Same-day conversion comparison" height={200} />
          </div>
          <p className="type-body max-w-[640px]">
            The photo upload experience was also improved as a by-product of
            the work. Redundant approval logic was identified and removed,
            meaning first-time uploads no longer need manual approval, which
            unlocked an additional benefit for the approvals work currently
            in progress.
          </p>
        </section>
      </Reveal>

      {/* Reflection */}
      <Reveal delay={100}>
        <section
          className="flex flex-col gap-6 py-16"
        >
          <p className="type-tagline">Reflection</p>
          <h2 className="type-body font-medium text-xl">What I'd do differently</h2>
          <GapCard
            title="Add your reflection here"
            description="What would you push for earlier next time? The legal discovery is a perfect hook — how would you build a process to catch that kind of risk earlier? One honest paragraph here signals seniority."
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
