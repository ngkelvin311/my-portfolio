import Reveal from "@/components/Reveal";
import { NMCConversionChart } from "@/components/NMCConversionChart"
import { NMCConversionLineChart } from "@/components/NMCConversionLineChart"

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
              { stat: "65%", desc: "Conversion rate, up from 57% target at launch" },
              { stat: "93%", desc: "Same-day conversion, up from 50% (Jan 2024 to Feb 2025)" },
              { stat: "94.5%", desc: "Members completing medical declaration at first gate" },
              { stat: "6.5", desc: "Average SEQ score during usability testing" },
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
    <img
      src="/work/New-member-conversion/nmc-team-structure.png"
      alt="Team structure"
      className="w-full h-auto rounded-lg"
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
          {/* Journey map */}
<svg
  width="100%"
  viewBox="0 0 680 244"
  aria-label="Existing sign-up journey — 7 steps"
>
  <defs>
    <marker id="jm-arrow" viewBox="0 0 10 10" refX={8} refY={5} markerWidth={6} markerHeight={6} orient="auto-start-reverse">
      <path d="M2 1L8 5L2 9" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
    </marker>
  </defs>

  {[
    { x: 22, w: 155, cx: 99, label: "Select employer" },
    { x: 197, w: 155, cx: 274, label: "Personal details" },
    { x: 372, w: 130, cx: 437, label: "Choose plan" },
    { x: 522, w: 135, cx: 589, label: "Bank details" },
  ].map(({ x, w, cx, label }) => (
    <g key={label}>
      <rect x={x} y={40} width={w} height={44} rx={8} fill="none" stroke="currentColor" strokeWidth={0.5} strokeOpacity={0.3}/>
      <text x={cx} y={62} textAnchor="middle" dominantBaseline="central" fontSize={13} fontWeight={500} fill="currentColor">{label}</text>
    </g>
  ))}

  {[[177, 197], [352, 372], [502, 522]].map(([x1, x2]) => (
    <line key={x1} x1={x1} y1={62} x2={x2} y2={62} stroke="currentColor" strokeWidth={1.5} strokeOpacity={0.35} markerEnd="url(#jm-arrow)"/>
  ))}

  <path d="M 589 84 L 589 130 L 472 130 L 472 170" fill="none" stroke="currentColor" strokeWidth={1.5} strokeOpacity={0.35} markerEnd="url(#jm-arrow)"/>

  {[
    { x: 392, w: 160, cx: 472, label: "T&Cs (2 pages)" },
    { x: 217, w: 155, cx: 294, label: "Approval queue" },
    { x: 22, w: 175, cx: 109, label: "Facilitator review" },
  ].map(({ x, w, cx, label }) => (
    <g key={label}>
      <rect x={x} y={170} width={w} height={44} rx={8} fill="none" stroke="currentColor" strokeWidth={0.5} strokeOpacity={0.3}/>
      <text x={cx} y={192} textAnchor="middle" dominantBaseline="central" fontSize={13} fontWeight={500} fill="currentColor">{label}</text>
    </g>
  ))}

  {[[392, 372], [217, 197]].map(([x1, x2]) => (
    <line key={x1} x1={x1} y1={192} x2={x2} y2={192} stroke="currentColor" strokeWidth={1.5} strokeOpacity={0.35} markerEnd="url(#jm-arrow)"/>
  ))}
</svg>

{/* Friction points */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
  {[
    { n: "01", title: "Upfront overload", body: "Personal details, medical declaration, and photo for all members, all before seeing the price" },
    { n: "02", title: "Irrelevant questions", body: "Favourite facility asked before the member was approved, let alone had visited a gym" },
    { n: "03", title: "Price confusion", body: "Single, family, and child pricing shown in three different units on the same screen" },
    { n: "04", title: "Checkout anxiety", body: "Users navigated back from payment to personal details or plan selection to recheck price" },
    { n: "05", title: "No post-submit signal", body: "Nothing told applicants their submission would enter a facilitator approval queue" },
    { n: "06", title: "Legal exposure", body: "Primary members completed medical declarations for adults over 18, which has no legal standing" },
  ].map(({ n, title, body }) => (
<div key={n} className="flex flex-col gap-1 p-4 rounded-xl" style={{ background: "rgb(var(--surface))" }}>      <span className="text-xs opacity-30 font-mono">{n}</span>
      <p className="type-body font-medium text-sm leading-snug">{title}</p>
      <p className="type-body text-xs opacity-60 leading-relaxed">{body}</p>
    </div>
  ))}
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
          <p>
            The central design decision was separating signup from onboarding.
            Each became a focused flow with a single job. Signup: pick your package and
            pay. Onboarding: explain approval process and ensure a member is set up to attend facilities.
          </p>
         <img
  src="/work/New-member-conversion/design-screens.png"
  alt="Gate 2 — medical declaration upon app sign in"
  className="w-full h-auto rounded-lg"
/>
        <p>
  The map was also redesigned as part of this initiative, not being originally scoped but I pushed to pull it in as it was a huge gap in our experience. It wasn't mobile responsive, the visual design was dated, and facility cards surfaced almost nothing useful. Member conversations made the priority list clear: opening hours, access card fees, the address, and facility type (pool, gym, 24 hour). 
  </p>
  <p>
  Those are the questions someone is answering before they leave the house. The redesign aligned the map with conventions people already know from tools like Google Maps. We focused on recognition over recall, rather than asking users to learn a new interface, the design works with mental models they have already built. It also laid the foundations for future work including premium tiering and facility discovery.
</p>
<div className="grid grid-cols-2 gap-6 mt-4">
  <div>
    <p className="font-mono text-xs text-zinc-400 uppercase tracking-widest text-center mb-3">Old map</p>
    <img
      src="/work/New-member-conversion/old-map.png"
      alt="Old map design showing dated UI and limited filtering options"
      className="w-full h-auto rounded-lg"
    />
    <ul className="mt-4 space-y-1 text-sm list-disc pl-4">
      <li>Limited filtering options</li>
      <li>Non responsive</li>
      <li>Dated UI</li>
      <li>Old logo on pins</li>
      <li>Search and filter usability issues</li>
      <li>Unclear icon-based activity labels</li>
    </ul>
  </div>
  <div>
    <p className="font-mono text-xs text-zinc-400 uppercase tracking-widest text-center mb-3">New map</p>
    <img
      src="/work/New-member-conversion/new-map.png"
      alt="Redesigned map showing mobile responsive layout and scannable facility cards"
      className="w-full h-auto rounded-lg"
    />
    <ul className="mt-4 space-y-1 text-sm list-disc pl-4">
      <li>Mobile responsive</li>
      <li>Scalable</li>
      <li>Modern UI</li>
      <li>Scannable</li>
      <li>All information upfront and transparent</li>
      <li>Old logo removed from pins</li>
    </ul>
  </div>
</div>          <p>
            The medical declaration was restructured into three gates. Gate
            one catches the majority of users (94.5% complete here). Gates
            two and three handle missing medical details in a natural way, the gating becoming more insistent as a user got closer to attending a facility. This structure balanced legal risk with user experience, ensuring compliance without creating unnecessary friction for the majority of members.
          </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
  <div>
    <p className="font-mono text-xs text-zinc-400 uppercase tracking-widest text-center" style={{ marginBottom: "16px" }}>Gate 1 — soft</p>
    <img
  src="/work/New-member-conversion/gate-1.png"
  alt="Gate 1 — medical declaration after submit"
  className="w-full h-auto rounded-lg"
/>
    <p className="type-body opacity-60 text-center" style={{ marginTop: "16px" }}>Web declaration after submit</p>
  </div>
  <div>
    <p className="font-mono text-xs text-zinc-400 uppercase tracking-widest text-center" style={{ marginBottom: "16px" }}>Gate 2 — medium</p>
    <img
  src="/work/New-member-conversion/gate-2.png"
  alt="Gate 2 — medical declaration upon app sign in"
  className="w-full h-auto rounded-lg"
/>
    <p className="type-body opacity-60 text-center" style={{ marginTop: "16px" }}>Medical declaration upon app sign in</p>
  </div>
  <div>
    <p className="font-mono text-xs text-zinc-400 uppercase tracking-widest text-center" style={{ marginBottom: "16px" }}>Gate 3 — hard</p>
    <img
  src="/work/New-member-conversion/gate-3.png"
  alt="Gate 3 — medical declaration block"
  className="w-full h-auto rounded-lg"
/>
    <p className="type-body opacity-60 text-center" style={{ marginTop: "16px" }}>Block user from attending facility if no medical declaration</p>
  </div>
</div>
          <p className="type-body max-w-[640px]">
            Patterns from the redesign were contributed back to the design
            system foundations. 70% of manual email templates created since
            December 2025 now use the new template structure built as part
            of this project.
          </p>
          <img
            src="/work/New-member-conversion/new-emails.png"
            alt="Email template system"
            className="w-full h-auto rounded-lg"
          />
          <img
            src="/work/New-member-conversion/price-card-changes.png"
            alt="Old vs new price cards"
            className="w-full h-auto rounded-lg"
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
            <NMCConversionLineChart />
            <NMCConversionChart />
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
