import Link from "next/link";

function GapCard({
  title,
  description,
  emphasis,
}: {
  title: string;
  description: string;
  emphasis?: string;
}) {
  return (
    <div
      className="flex flex-col gap-2 rounded-lg p-6"
      style={{ border: "1.5px dashed rgb(var(--border))" }}
    >
      <p className="type-body-emphasis">{title}</p>
      <p className="type-body" style={{ color: "rgb(var(--muted))" }}>
        {description}
      </p>
      {emphasis && (
        <p className="type-body" style={{ color: "rgb(var(--accent))" }}>
          {emphasis}
        </p>
      )}
    </div>
  );
}

function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div
      className="flex flex-col gap-2 rounded-lg p-6"
      style={{ background: "rgb(var(--surface))", border: "1px solid rgb(var(--border))" }}
    >
      <p className="type-display-sm font-black">{value}</p>
      <p className="type-body" style={{ color: "rgb(var(--muted))" }}>
        {label}
      </p>
    </div>
  );
}

export default function DesignSystemCaseStudy() {
  return (
    <main className="mx-auto w-full max-w-[1200px] px-6 sm:px-10 lg:px-16 pt-16 pb-32 flex flex-col gap-16">

      {/* ── Back ──────────────────────────────────────────── */}
      <Link
        href="/work/fitness-passport"
        className="type-meta underline w-fit"
      >
        ← Fitness Passport
      </Link>

      {/* ── Header ────────────────────────────────────────── */}
      <header className="flex flex-col gap-8">
        <p className="type-tagline">Design Systems · Foundations · Scale</p>
        <div className="flex flex-col gap-4">
          <h1 className="type-display-sm font-black">
            Building Horizon: Design System from Zero to Adoption
          </h1>
          <p className="type-body" style={{ maxWidth: 720, color: "rgb(var(--muted))" }}>
            Fitness Passport had no shared design language. Designers worked in
            isolation, engineering rebuilt the same components repeatedly, and
            every change was a manual select and replace. I built the foundations, the
            contribution model, and the strategy to scale it across product,
            mobile, and engineering teams.
          </p>
        </div>

        {/* Meta grid */}
        <div
          className="grid grid-cols-2 tablet:grid-cols-4 gap-6 pt-6"
          style={{ borderTop: "1px solid rgb(var(--border))" }}
        >
          <div className="flex flex-col gap-1">
            <p className="type-tagline">Role</p>
            <p className="type-body-emphasis">Lead Designer</p>
            <p className="type-body">Design System Owner</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="type-tagline">Timeline</p>
            <p className="type-body">2025 to present</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="type-tagline">Status</p>
            <div className="flex items-center gap-2 mt-1">
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ background: "#22c55e" }}
              />
              <p className="type-body">H2 in progress</p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="type-tagline">Teams</p>
            <p className="type-body">Product, Mobile, Engineering</p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full rounded-lg overflow-hidden">
          <img
            src="/work/Design-system/design-system-v2.png"
            alt="Design System"
            className="w-full h-auto"
          />
        </div>

        
      </header>

      {/* ── Results ───────────────────────────────────────── */}
      <section className="flex flex-col gap-8">
        <p className="type-tagline">Results</p>
        <div className="grid grid-cols-2 tablet:grid-cols-4 gap-4">
          <StatCard
            value="76.9%"
            label="Component adoption across the monorepo"
          />
          <StatCard
            value="91"
            label="Total import instances across the codebase"
          />
          <StatCard
            value="Hours"
            label="Not days to complete a full brand theme change"
          />
          <StatCard
            value="Over 70%"
            label="Of manual email templates using the new Mailchimp template"
          />
        </div>
        <GapCard
          title="Two more results to add"
          description="How long did H1 take from blank slate to first components in production? And what is the confirmed timeline improvement on the legacy code project — two months vs eight months?"
          emphasis="These two numbers belong in this grid. They are the strongest metrics in the case study."
        />
      </section>

      {/* ── My role ───────────────────────────────────────── */}
      <section
        className="flex flex-col gap-6 pt-8"
        style={{ borderTop: "1px solid rgb(var(--border))" }}
      >
        <p className="type-tagline">My role</p>
        <p className="type-body" style={{ maxWidth: 720 }}>
          I owned the design system end to end. Strategy, execution, stakeholder
          alignment, contribution model, and the handoff process between design
          and engineering. There was no resource for a dedicated team. I was building this
          alongside product work while selling the value of the system and driving a design system champions group. This consisted of product managers, engineers and designers who all believed in the cause and helped push for adoption across their teams. I also partnered closely with the engineering manager and tech lead to ensure the system was built in a way that met the needs of engineers and was feasible within the constraints of the legacy codebase.
        </p>
      </section>

      {/* ── The problem ───────────────────────────────────── */}
      <section
        className="flex flex-col gap-8 pt-8"
        style={{ borderTop: "1px solid rgb(var(--border))" }}
      >
        <p className="type-tagline">The problem</p>
        <div className="flex flex-col gap-6" style={{ maxWidth: 720 }}>
          <p className="type-body">
            Before this project, there was no shared design language at Fitness
            Passport. Every screen started from scratch. Designers would
            HTML-to-Figma the old portal just to have something to work from: a
            portal built with no accessibility considerations and no UX
            foundations underneath it. Then the real work began: improving what
            was there, component by component, with no shared reference point
            and no consistency to lean on.
          </p>
          <p className="type-body">
            The cost showed up everywhere. More time per design. More back and
            forth in review. More uncertainty for every new team member who
            joined. And on the engineering side, the legacy codebase was quietly
            compounding the problem. What should have been a two month project
            took eight because engineers had to navigate years of accumulated
            technical debt before they could build anything new.
          </p>
          <p className="type-body">
            Even when designs were finished, handoff was fragile. Without a
            shared token system, engineers were making educated guesses on
            spacing, sizes, dimensions, and interactive behaviour. Every
            implementation was slightly off. Every review cycle caught slightly
            different things. Consistency was checked everywhere, which meant it
            was guaranteed nowhere.
          </p>
        </div>

        {/* Problem image placeholder */}
       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <div className="w-full rounded-lg overflow-hidden">
                <img
                  src="/work/design-system/sign-in-screen-old.jpg"
                  alt="Old sign in screen"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-full rounded-lg overflow-hidden">
                <img
                  src="/work/design-system/portal-UI-old.jpg"
                  alt="Old portal UI"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
      </section>
{/* ── Approach ──────────────────────────────────────── */}
<section
  className="flex flex-col gap-8 pt-8"
  style={{ borderTop: "1px solid rgb(var(--border))" }}
>
  <p className="type-tagline">Approach</p>
  <div className="flex flex-col gap-6" style={{ maxWidth: 720 }}>
    <p className="type-body">
      I started with a blank slate. Everything: every component, every
      guideline, every token, was built from the ground up. My role was to
      own this across design and engineering, set the direction, make the
      calls, and keep both sides moving toward the same system.
    </p>
    <p className="type-body">
      The sequencing mattered. The principle I worked from, drawn from the
      Design Systems Handbook by Suarez et al, is what they call{" "}
      <strong className="font-medium">tokens as contracts</strong>: you
      define the named language first (colour, typography, spacing) so
      that when you build components, they are already speaking the same
      vocabulary as the codebase. Skip this step and you are building on
      sand.
    </p>
  </div>

  {/* Token image — outside the 720 cap so it runs full width */}
  <div className="w-full rounded-lg overflow-hidden">
    <img
      src="/work/Design-system/design-system-tokens.png"
      alt="Design System Tokens"
      className="w-full h-auto"
    />
  </div>

    <div className="flex flex-col gap-6" style={{ maxWidth: 720 }}>
    <p className="type-body">
      I structured the work across three horizons, a sequencing model
      adapted from strategic planning: near term foundations, mid-term
      scale, long-term sync. Rather than trying to build everything at
      once and delivering nothing, each horizon is completable on its own
      while keeping the long-term architecture in view.
    </p>
  </div>

  <div className="grid grid-cols-1 tablet:grid-cols-3 gap-4">
    <div
      className="flex flex-col gap-3 rounded-lg p-6"
      style={{ background: "rgb(var(--surface))", border: "1px solid rgb(var(--border))" }}
    >
      <div className="flex items-center justify-between">
        <p className="type-tagline">Horizon 01</p>
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full" style={{ background: "#22c55e" }} />
          <span className="type-meta" style={{ color: "#22c55e" }}>Complete</span>
        </div>
      </div>
      <p className="type-body-emphasis">Foundation</p>
      <p className="type-body" style={{ color: "rgb(var(--muted))" }}>
        Semantic colour system, Oxygen typography, 8px spacing grid, Material icons, initial Figma tokens, contribution model v1.
      </p>
      <p className="type-meta" style={{ color: "rgb(var(--muted))", marginTop: "auto" }}>0 to 6 months</p>
    </div>

    <div
      className="flex flex-col gap-3 rounded-lg p-6"
      style={{ background: "rgb(var(--surface))", border: "1px solid rgb(var(--border))" }}
    >
      <div className="flex items-center justify-between">
        <p className="type-tagline">Horizon 02</p>
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full" style={{ background: "#eab308" }} />
          <span className="type-meta" style={{ color: "#eab308" }}>In progress</span>
        </div>
      </div>
      <p className="type-body-emphasis">Scale</p>
      <p className="type-body" style={{ color: "rgb(var(--muted))" }}>
        Core components in Figma and code, contribution model live, mobile foundations, email templates, AI workflow in progress.
      </p>
      <p className="type-meta" style={{ color: "rgb(var(--muted))", marginTop: "auto" }}>6 to 12 months</p>
    </div>

    <div
      className="flex flex-col gap-3 rounded-lg p-6"
      style={{ background: "rgb(var(--surface))", border: "1px solid rgb(var(--border))" }}
    >
      <div className="flex items-center justify-between">
        <p className="type-tagline">Horizon 03</p>
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full" style={{ background: "rgb(var(--muted))" }} />
          <span className="type-meta" style={{ color: "rgb(var(--muted))" }}>Roadmap</span>
        </div>
      </div>
      <p className="type-body-emphasis">Sync</p>
      <p className="type-body" style={{ color: "rgb(var(--muted))" }}>
        Figma tokens mapped to Tailwind config, AI-themed Shadcn library, self-hosted component docs, versioned changelog.
      </p>
      <p className="type-meta" style={{ color: "rgb(var(--muted))", marginTop: "auto" }}>12 to 24 months</p>
    </div>
  </div>
</section>


      {/* ── The contribution model ────────────────────────── */}
      <section
        className="flex flex-col gap-8 pt-8"
        style={{ borderTop: "1px solid rgb(var(--border))" }}
      >
        <p className="type-tagline">The contribution model</p>
        <div className="flex flex-col gap-6" style={{ maxWidth: 720 }}>
          <p className="type-body">
            Getting a design system adopted is not a design problem. It is a
            culture and process problem.
          </p>
          <p className="type-body">
            I established a contribution model that defined how any designer or
            engineer could add to the system without it becoming a bottleneck.
            <strong className="font-medium">If the cost of contribution is low
            enough, teams use the system instead of going around it.</strong>
          </p>
          <p className="type-body">
            We built on an as-needs basis. When a team needed a component, they
            built it to the standard and it went into the library. Every team
            that came after consumed it for free. Build it once, when you need
            it. Every member of the design team has now successfully contributed
            to at least one of the three library files and every product squad has built and consumed multiple components. The system is no longer something only I own. It is something we own together as a team.
          </p>
        </div>

        {/* Contribution model image */}
        <div className="w-full rounded-lg overflow-hidden">
          <img
            src="/work/Design-system/design-system-contribution-model.png"
            alt="Horizon design system contribution model"
            className="w-full h-auto"
          />
        </div>

{/* Button example */}
        <details
          className="rounded-lg overflow-hidden"
          style={{ border: "1px solid rgb(var(--border))" }}
        >
          <summary
            className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none"
            style={{ background: "rgb(var(--surface))" }}
          >
            <p className="type-body-emphasis">The button: a worked example</p>
            <span className="type-meta" style={{ color: "rgb(var(--muted))", flexShrink: 0 }}>
              View example
            </span>
          </summary>

          <div
            className="flex flex-col gap-6 p-6"
            style={{ borderTop: "1px solid rgb(var(--border))" }}
          >
            <div className="flex flex-col gap-4" style={{ maxWidth: 720 }}>
              <p className="type-body">
                The product team needed a button component for a new signup
                experience. They built three variants to standard: primary,
                secondary, and destructive. Design and engineering both reviewed
                and signed off. The component went into the code library and the
                Figma file. That was the full contribution cycle, done once.
              </p>
              <p className="type-body">
                Later, a different team picked up work that required a tertiary
                button. They did not wait for someone else to build it. They
                designed and developed the variant, ran it through the same
                qualification process, and contributed it back into both
                libraries. Nobody duplicated the work. Nobody built variants
                speculatively upfront. The button family grew because the need
                existed, not because someone planned a complete button system
                in advance.
              </p>
            </div>

            <div className="grid grid-cols-2 tablet:grid-cols-4 gap-3">
              {[
                {
                  step: "01",
                  label: "Need identified",
                  description:
                    "Signup experience required buttons. Product team built primary, secondary, and destructive variants to standard.",
                },
                {
                  step: "02",
                  label: "Qualified",
                  description:
                    "Design and engineering reviewed and signed off. Both sides confirmed the component met the bar.",
                },
                {
                  step: "03",
                  label: "Added to system",
                  description:
                    "Component entered the code library and Figma. Every team that followed consumed it for free.",
                },
                {
                  step: "04",
                  label: "Extended",
                  description:
                    "A second team needed tertiary. Built it, contributed it back. The button family grew on demand, not speculation.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex flex-col gap-2 rounded-lg p-5"
                  style={{
                    background: "rgb(var(--surface))",
                    border: "1px solid rgb(var(--border))",
                  }}
                >
                  <p className="type-tagline">{item.step}</p>
                  <p className="type-body-emphasis">{item.label}</p>
                  <p
                    className="type-meta"
                    style={{ color: "rgb(var(--muted))", marginTop: "auto" }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </details>
      </section>

      {/* ── Handoff before and after ──────────────────────── */}
      <section
        className="flex flex-col gap-8 pt-8"
        style={{ borderTop: "1px solid rgb(var(--border))" }}
      >
        <p className="type-tagline">Handoff before and after</p>

        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4">
          <div
            className="flex flex-col gap-4 rounded-lg p-6"
            style={{
              background: "rgb(var(--surface))",
              border: "1px solid rgb(var(--border))",
            }}
          >
            <p className="type-tagline" style={{ color: "rgb(var(--muted))" }}>
              Before
            </p>
            <p className="type-body">
              Engineers opened a Figma file and made guesses. Spacing was
              approximated. States were assumed. Dark mode behaviour was
              inferred. The gap between design intent and built output required
              a dedicated QA pass on almost every component.
            </p>
          </div>
          <div
            className="flex flex-col gap-4 rounded-lg p-6"
            style={{
              background: "rgb(var(--surface))",
              border: "1px solid rgb(var(--border))",
            }}
          >
            <p className="type-tagline">After</p>
            <p className="type-body">
              Engineers open the component library and the decisions are already
              made. Token names in Figma match token names in the Tailwind
              config. There is no translation layer. Consistency is checked
              once, at the point of component build. Not at every handoff.
            </p>
          </div>
        </div>

        {/* Hulsbosch moment */}
        <div
          className="flex flex-col gap-4 rounded-lg p-6"
          style={{ border: "1px solid rgb(var(--border))" }}
        >
          <p className="type-tagline">The rebrand proof point</p>
          <p className="type-body" style={{ maxWidth: 720 }}>
            The best test of a token system is what happens when something
            changes. When the Hulsbosch brand direction required a theme update,
            the token aliasing layer meant the change cascaded across every
            component in hours. One swap at the semantic token layer, not a
            file-by-file rebuild. What would previously have taken weeks took a
            single working session.
          </p>
          <GapCard
            title="Add the exact time comparison here"
            description="How long did the Hulsbosch update actually take? And how long would the same change have taken before the system existed? That specific contrast is the number that makes this story land."
          />
        </div>
      </section>

      {/* ── Adoption ──────────────────────────────────────── */}
      <section
        className="flex flex-col gap-8 pt-8"
        style={{ borderTop: "1px solid rgb(var(--border))" }}
      >
        <p className="type-tagline">Adoption</p>
        <div className="flex flex-col gap-6" style={{ maxWidth: 720 }}>
          <p className="type-body">
            20 of 26 components are actively used across the monorepo, a 76.9%
            adoption rate with 91 total import instances. The highest-use
            components (Button, Input, Combobox) appear in over ten files each.
            The new Mailchimp email template is being used for 70% of manual
            template creations since December 2025.
          </p>
        </div>

        {/* Usage breakdown */}
        <div className="grid grid-cols-2 tablet:grid-cols-4 gap-4">
          {[
            { tier: "High usage", items: "Button · Input · Combobox", count: "10+ files each" },
            { tier: "Moderate usage", items: "Toast · Badge · Dialog · Dropdown", count: "5 to 8 files each" },
            { tier: "Light usage", items: "Date Picker · Table · Toggle · Radio", count: "2 to 3 files each" },
            { tier: "Minimal usage", items: "Carousel · Checkbox · Popover · Skeleton", count: "1 file each" },
          ].map((tier) => (
            <div
              key={tier.tier}
              className="flex flex-col gap-2 rounded-lg p-5"
              style={{
                background: "rgb(var(--surface))",
                border: "1px solid rgb(var(--border))",
              }}
            >
              <p className="type-tagline">{tier.tier}</p>
              <p className="type-body-emphasis">{tier.items}</p>
              <p
                className="type-meta"
                style={{ color: "rgb(var(--muted))", marginTop: "auto" }}
              >
                {tier.count}
              </p>
            </div>
          ))}
        </div>
      </section>
{/* ── Embracing AI ──────────────────────────────────── */}
      <section
        className="flex flex-col gap-8 pt-8"
        style={{ borderTop: "1px solid rgb(var(--border))" }}
      >
        <p className="type-tagline">Embracing AI</p>

        <div className="flex flex-col gap-6" style={{ maxWidth: 720 }}>
          <p className="type-body">
            Most design systems treat AI as a bolt-on. We built the foundation so
            AI had something real to work with.
          </p>
          <p className="type-body">
            The premise connects back to the tokens-as-contracts principle from
            the Design Systems Handbook by Suarez et al: define the named
            language first so everything built on top of it speaks the same
            vocabulary. That structure is what gives an AI model a lever to pull.
            If your tokens are semantically named and connected across the stack,
            you do not update a visual language file by file. You change one
            layer and the whole system follows.
          </p>
        </div>

        {/* Stress test */}
        <div
          className="flex flex-col gap-4 rounded-lg p-6"
          style={{ border: "1px solid rgb(var(--border))" }}
        >
          <p className="type-tagline">The stress test</p>
          <p className="type-body" style={{ maxWidth: 720 }}>
            An interim brand kit landed while a larger SLT-sponsored brand update
            was still in motion. We could have waited. Instead we used it as a
            live stress test for the AI workflow and the token architecture. The
            AI updated variables and tokens across the entire Figma system in
            hours. The same task in a previous workflow, without the structure,
            would have required days of manual file-by-file searching, missed
            instances, and a second pass to catch the gaps. One unplanned
            exercise proved the architecture worked before the real brand update
            arrived.
          </p>
        </div>

        {/* Decoupling */}
        <div className="flex flex-col gap-6" style={{ maxWidth: 720 }}>
          <p className="type-body-emphasis">Decoupling from Storybook</p>
          <p className="type-body">
            Component documentation lived in Storybook. Engineers used it.
            Designers rarely opened it. It moved in one direction and served one
            audience.
          </p>
          <p className="type-body">
            We started building our own repo, drawing from Shadcn as the base.
            Shadcn is a headless component library built on Radix UI and Tailwind.
            Headless is a pattern where the component ships with accessible,
            composable logic but no visual opinions, so you theme it to your
            specifications rather than inheriting someone else's. We theme it to
            ours. The goal is a cross-connected workflow: Figma, our component
            repo, GitHub, and Claude, all wired within the rhythms of how the
            team already works.
          </p>
          <p className="type-body">
            The repo puts code snippets and component guidelines in the same
            place. Not a separate docs site that drifts out of sync. Not a Notion
            page nobody updates. The spec and the code, side by side, at the same
            time.
          </p>
        </div>

        {/* Pipeline */}
        <div className="grid grid-cols-2 tablet:grid-cols-4 gap-3">
          {[
            {
              index: "01",
              label: "Figma",
              description: "Design source, variables, component library",
              status: null,
            },
            {
              index: "02",
              label: "Component repo",
              description: "Shadcn base, themed to spec, guidelines inline",
              status: null,
            },
            {
              index: "03",
              label: "GitHub",
              description: "Version control, review, deployment",
              status: null,
            },
            {
              index: "04",
              label: "Claude",
              description: "AI workflow, Claude design integration",
              status: "In progress",
            },
          ].map((node) => (
            <div
              key={node.label}
              className="flex flex-col gap-2 rounded-lg p-5"
              style={{
                background: "rgb(var(--surface))",
                border: "1px solid rgb(var(--border))",
              }}
            >
              <div className="flex items-center justify-between">
                <p className="type-tagline">{node.index}</p>
                {node.status && (
                  <div className="flex items-center gap-1.5">
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full"
                      style={{ background: "#eab308" }}
                    />
                    <span className="type-meta" style={{ color: "#eab308" }}>
                      {node.status}
                    </span>
                  </div>
                )}
              </div>
              <p className="type-body-emphasis">{node.label}</p>
              <p
                className="type-meta"
                style={{ color: "rgb(var(--muted))", marginTop: "auto" }}
              >
                {node.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bidirectional sync */}
        <div className="flex flex-col gap-6" style={{ maxWidth: 720 }}>
          <p className="type-body-emphasis">The bridge, in both directions</p>
          <p className="type-body">
            The longer-term direction is bidirectional sync. Tools like Tokens
            Studio and the Figma Variables API have been building toward this for
            a few years: update a token in Figma and the codebase reflects it.
            Ship a component to the repo and the Figma library gains it. Both
            directions, without a person manually carrying the change across.
          </p>
          <p className="type-body">
            This matters because of the underlying philosophy the system was
            built on: design and build on an as-needs basis. A bidirectional
            bridge means neither side waits for the other to catch up. A designer
            adds to Figma. An engineer ships to the repo. Both become part of the
            system, in the same place, at the point it is needed.
          </p>
        </div>

        {/* Prototyping */}
        <div
          className="flex flex-col gap-4 rounded-lg p-6"
          style={{ border: "1px solid rgb(var(--border))" }}
        >
          <p className="type-tagline">What this unlocks for prototyping</p>
          <p className="type-body" style={{ maxWidth: 720 }}>
            Connecting this workflow to Claude changes what prototyping means in
            practice. Complex logic that currently takes days to simulate in Figma
            becomes testable in near-production conditions. The principle here is
            prototype fidelity: Nielsen Norman Group has written at length about
            matching fidelity to the type of feedback you need. Higher fidelity
            surfaces more realistic reactions because participants are responding
            to something that behaves like the real thing. This workflow brings
            that fidelity forward, earlier in the process, without the manual
            overhead it previously required.
          </p>
          <p className="type-body" style={{ maxWidth: 720, marginTop: 4 }}>
            For teams without a design resource, this changes self-service.
            They work against real components while the system keeps them
            consistent. Handoff documentation shrinks because the prototype
            already demonstrates the behaviour. Designers can explore more
            interaction states, not just the ones that fit across a finite set of
            static screens.
          </p>
          <p className="type-body" style={{ maxWidth: 720, marginTop: 4 }}>
            None of this replaces design thinking. It removes the overhead that
            gets in the way of it.
          </p>
        </div>
      </section>
      {/* ── Reflection ────────────────────────────────────── */}
      <section
        className="flex flex-col gap-6 pt-8"
        style={{ borderTop: "1px solid rgb(var(--border))" }}
      >
        <p className="type-tagline">Reflection</p>
        <GapCard
          title="Write one honest paragraph here"
          description="What do you know now about building a design system inside a product team that you did not know at the start? What would you do differently? What were the hardest moments to navigate? This section reads as the most senior part of the whole case study."
        />
      </section>

    </main>
  );
}