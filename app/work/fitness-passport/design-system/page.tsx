import Link from "next/link";
import Image from "next/image";

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
            every rebrand was a manual slog. I built the foundations, the
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
            <p className="type-body">2023 to present</p>
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

        {/* Hero image placeholder */}
        <div
          className="w-full rounded-lg overflow-hidden"
          style={{
            height: 480,
            background: "rgb(var(--surface))",
            border: "1.5px dashed rgb(var(--border))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p className="type-tagline" style={{ color: "rgb(var(--muted))" }}>
            Hero image placeholder
          </p>
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
            value="70%"
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
          and engineering. There was no dedicated team. I was building this
          alongside product work.
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
        <div
          className="w-full rounded-lg overflow-hidden"
          style={{
            height: 360,
            background: "rgb(var(--surface))",
            border: "1.5px dashed rgb(var(--border))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p className="type-tagline" style={{ color: "rgb(var(--muted))" }}>
            Before state: old portal or inconsistent screens
          </p>
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
          <p className="type-body">
            I structured the work across three horizons, a sequencing model
            adapted from strategic planning: near term foundations, mid-term
            scale, long-term sync. Rather than trying to build everything at
            once and delivering nothing, each horizon is completable on its own
            while keeping the long-term architecture in view.
          </p>
        </div>

        {/* Three horizons grid */}
        <div className="grid grid-cols-1 tablet:grid-cols-3 gap-4">
          {[
            {
              label: "H1 · Complete",
              title: "Foundation",
              body: "Semantic colour system, Onest typography, 8px spacing grid, Material icons, initial Figma tokens, contribution model v1.",
              note: "0 to 6 months",
            },
            {
              label: "H2 · In progress",
              title: "Scale",
              body: "Core components in Figma and code, contribution model live, mobile foundations, email templates, AI workflow in progress.",
              note: "6 to 12 months",
            },
            {
              label: "H3 · Roadmap",
              title: "Sync",
              body: "Figma tokens mapped to Tailwind config, AI-themed Shadcn library, self-hosted component docs, versioned changelog.",
              note: "12 to 24 months",
            },
          ].map((h) => (
            <div
              key={h.label}
              className="flex flex-col gap-3 rounded-lg p-6"
              style={{
                background: "rgb(var(--surface))",
                border: "1px solid rgb(var(--border))",
              }}
            >
              <p className="type-tagline">{h.label}</p>
              <p className="type-body-emphasis">{h.title}</p>
              <p className="type-body" style={{ color: "rgb(var(--muted))" }}>
                {h.body}
              </p>
              <p
                className="type-meta"
                style={{ color: "rgb(var(--muted))", marginTop: "auto" }}
              >
                {h.note}
              </p>
            </div>
          ))}
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
            The principle behind it comes from Dan Mall's{" "}
            <em>Design That Scales</em>: if the cost of contribution is low
            enough, teams use the system instead of going around it.
          </p>
          <p className="type-body">
            We built on an as-needs basis. When a team needed a component, they
            built it to the standard and it went into the library. Every team
            that came after consumed it for free. Build it once, when you need
            it. Every member of the design team has now successfully contributed
            to at least one of the three library files.
          </p>
        </div>

        <GapCard
          title="Add a specific contribution example"
          description="What was the first component that went through the full model? Walk through: who proposed it, how it was reviewed, and which teams consumed it after. One real example is worth more than describing the process in the abstract."
        />
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