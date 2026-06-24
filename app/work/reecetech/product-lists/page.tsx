import Reveal from "@/components/Reveal";

export const metadata = {
  title: "maX Product Lists — Kelvin Ng",
  description:
    "Trade customers were burning time on the same searches every single order. We designed a saved lists feature that cut repetitive searching, reduced forgotten items, and used a predictive model to surface the right products before customers went looking.",
};

export default function MaxProductListsPage() {
  return (
    <main
      id="case-study"
      role="main"
      aria-label="maX Product Lists case study"
      className="mx-auto w-full max-w-[1200px] px-6 sm:px-10 lg:px-16 pt-16 pb-32 flex flex-col gap-0"
    >
      {/* Back link */}
      <Reveal immediate delay={100}>
        <a
          href="/work/reecetech"
          className="type-meta inline-flex items-center gap-2 mb-12 opacity-60 hover:opacity-100 transition-opacity"
        >
          ← Back to Reece
        </a>
      </Reveal>

      {/* Header */}
      <Reveal immediate delay={200}>
        <div
          className="flex flex-col gap-6 pb-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="type-tagline">Case study — Reece maX</p>
          <div className="type-display-sm">
            <p>maX Product Lists</p>
          </div>
          <p className="type-body">
            Trade customers were burning time on the same searches every single
            order. We designed a saved lists feature that cut repetitive
            searching, reduced forgotten items, and used a predictive model to
            surface the right products before customers went looking.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
            {[
              { label: "Company", value: "Reece Group" },
              { label: "Product", value: "maX" },
              { label: "Platform", value: "Web, iOS, Android" },
              { label: "Role", value: "Research + Design" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <p className="type-meta opacity-50">{item.label}</p>
                <p className="type-body font-medium">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="w-full rounded-lg overflow-hidden mt-2">
            <img
              src="/work/product-lists/product-lists-hero.jpg"
              alt="maX Product Lists feature across iOS and web"
              className="w-full h-auto"
            />
          </div>
        </div>
      </Reveal>

      {/* Results */}
      <Reveal delay={100}>
        <section
          className="flex flex-col gap-8 py-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="type-tagline">Results</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                stat: "80%",
                desc: "Predictive model accuracy for complementary product and substitution suggestions",
              },
              {
                stat: "3 BUs",
                desc: "Covered during guerilla research across 2 states and multiple branch locations",
              },
              {
                stat: "0 searches",
                desc: "Required for a returning customer placing an order from a saved list",
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
        </section>
      </Reveal>

      {/* My Role */}
      <Reveal delay={100}>
        <section
          className="flex flex-col gap-6 py-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="type-tagline">My role</p>
          <h2 className="type-body font-medium text-xl">
            Research to delivery across three platforms
          </h2>
          <p className="type-body">
            I owned research and design from brief to build. That meant
            guerilla sessions in branches, synthesis, prototyping across iOS,
            Android, and web, and the call on when designs were ready to hand
            over. I also worked with the data team on the substitutions model
            after launch, once usage patterns revealed a behaviour I hadn't
            designed for.
          </p>
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
            Same job. Same products. Same search. Every time.
          </h2>
          <p className="type-body">
            Trade customers at Reece run the same jobs week after week. Same
            pipe fittings, same cable, same fixtures. But maX treated every
            visit like a first visit. No memory. No shortcuts. Every item
            searched from scratch, every single order.
          </p>
          <p className="type-body">
            The Jobs to be Done framework helped clarify what was actually
            happening here. Customers don't hire maX to "place orders". They
            hire it to get materials sorted so they can get back on the tools.
            Searching was not part of the job they were trying to do. It was
            friction blocking it.
          </p>
          <ul className="flex flex-col gap-2 type-body opacity-70">
            {[
              "Customers manually searching every item on every order",
              "Technical product names creating a mismatch with tradesperson terminology",
              "Forgotten items leading to incomplete orders and branch follow-up calls",
              "Repeated search disrupting a workflow that should be close to automatic",
              "A platform that had all the data it needed but wasn't doing anything with it",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="opacity-40 mt-1">-</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
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
            In the branch. Watching real orders happen.
          </h2>
          <p className="type-body">
            Guerilla research puts you where customers already are, rather than
            pulling them into a room and watching them perform. We ran sessions
            across Reece's branch network, covering 3 business units and 2
            states. Real customers, real orders, real friction visible in real
            time.
          </p>
          <p className="type-body">
            Interview and test questions were designed to keep each one
            single-topic, behaviour-focused rather than attitudinal, and tested
            before deployment to avoid response bias. Asking "how often do you
            reorder the same products" is more reliable than "do you find
            searching frustrating."
          </p>
          <p className="type-body">
            Competitive analysis covered how other B2B procurement platforms
            handle repeat ordering. Order history was the common pattern. A
            few had basic list functionality. None had connected purchase
            behaviour to job type or used that signal to build lists
            proactively.
          </p>
          <p className="type-body">
            Maze automated usability testing ran with our research panel to
            catch edge cases at scale before they reached production. The panel
            gave us speed. The branch visits gave us truth.
          </p>

          <div className="grid grid-cols-3 gap-4">
            {[
              { stat: "3", label: "Business units covered in guerilla research" },
              { stat: "2", label: "States covered" },
              { stat: "Maze", label: "Automated usability testing" },
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

          <div className="flex flex-col gap-8 mt-2">
            {[
              {
                number: "01",
                finding: "Customers don't manage orders. They complete jobs.",
                detail:
                  "In a plumber's mind, they aren't placing an order for compression fittings. They're trying to finish a bathroom before Friday. Every extra minute on maX is time away from the thing that actually pays them. The research confirmed it: ordering was seen as a necessary interruption, not a workflow.",
              },
              {
                number: "02",
                finding: "Repeat behaviour was invisible to the system.",
                detail:
                  "The same dozen products showed up across the majority of orders for the same customer. We had the data but weren't using it. Customers were solving this problem themselves, with notes apps, screenshots, and blocks of scrap wood with products written in carpenter's pencil. The platform was leaving that job entirely to them.",
              },
              {
                number: "03",
                finding:
                  "Lists that aren't maintained become a different problem.",
                detail:
                  "Post-launch usage data surfaced this one. Customers create a list and rarely touch it again. If a product gets discontinued, they still reorder it, relying on branches to replace the product for them. The feature saving them time was quietly generating a new problem at the branch level.",
              },
            ].map((item) => (
              <div key={item.number} className="flex gap-6">
                <p className="type-meta opacity-30 pt-1 shrink-0">
                  {item.number}
                </p>
                <div className="flex flex-col gap-2">
                  <p className="type-body font-medium">{item.finding}</p>
                  <p className="type-body opacity-70">{item.detail}</p>
                </div>
              </div>
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
          <h2 className="type-body font-medium text-xl">
            Three layers. One goal: get out of the way.
          </h2>
          <p className="type-body">
            The whole design leaned on recognition over recall. Instead of
            making customers recall product codes and search strings from
            memory, saved lists let them recognise what they need and add it in
            one tap. Cognitive load drops and order completion rate goes up.
          </p>

          <div className="flex flex-col gap-4 mt-4">
            <h3 className="type-body font-medium text-lg">
              Layer 1: Saved lists
            </h3>
            <p className="type-body">
              Customers build reusable order templates from their own purchase
              history, named by job type or brand or whatever logic makes
              sense for them. Mobile was designed for the tradie on-site: fast,
              one-handed, minimal steps. Web was designed for the admin manager
              behind a desk: print to PDF, copy between lists, generate quotes.
              Different contexts required different feature surfaces using the same underlying
              data.
            </p>
              <div className="w-full rounded-lg overflow-hidden">
                <img
                  src="/work/product-lists/maX-product-lists-screens.png"
                  alt="Product Lists screens"
                  className="w-full h-auto"
                />
              </div>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <h3 className="type-body font-medium text-lg">
              Layer 2: Smart list generation
            </h3>
            <p className="type-body">
              A predictive model analysed purchase patterns across brand,
              category, and job type to suggest lists before a customer thought
              to create one. These appear contextually in high-traffic areas of
              the app. Surface the right information at the right moment in the
              flow, not all at once on a settings page nobody visits.
            </p>
            <div className="w-full rounded-lg overflow-hidden">
                <img
                  src="/work/product-lists/suggested-product-lists.png"
                  alt="Product Lists screens"
                  className="w-full h-auto"
                />
              </div>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <h3 className="type-body font-medium text-lg">
              Layer 3: Substitutions
            </h3>
            <p className="type-body">
              When a product in a saved list gets discontinued, the model flags
              a substitution using real-time branch swap data. Not a guess. Not
              an algorithm making it up. The same swap Reece staff were already
              making manually at the counter, captured and surfaced at scale.
            </p>
            <p className="type-body">
              Customers can accept or revert. The design doesn't override the
              customer. It mirrors expert knowledge at scale so the expert
              doesn't have to be in the room for every order.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <div className="w-full rounded-lg overflow-hidden">
              <img
                src="https://static.wixstatic.com/media/bb108e_868812473dfe4ca3822d22d34178bd30~mv2.png"
                alt="Substitutions flow - step 1"
                className="w-full h-auto"
              />
            </div>
            <div className="w-full rounded-lg overflow-hidden">
              <img
                src="https://static.wixstatic.com/media/bb108e_0e4b5c9994464f6b80f45a4124776c80~mv2.png"
                alt="Substitutions flow - step 2"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
      </Reveal>

      {/* Reflection */}
      <Reveal delay={100}>
        <section className="flex flex-col gap-6 py-16">
          <p className="type-tagline">Reflection</p>
          <h2 className="type-body font-medium text-xl">
            The feature you ship is never the finished product.
          </h2>
          <p className="type-body">
            Substitutions didn't exist in the original brief. It came from
            paying attention after launch. Customers don't maintain saved lists.
            That behaviour was predictable in hindsight but invisible before we
            had real usage data. The lesson: design for the behaviour you'll
            actually observe, not the behaviour you assumed in the brief.
          </p>
          <p className="type-body">
            The smarter call on substitutions was letting the model reflect
            branch expertise rather than trying to reinvent it. Staff had been
            making those swaps for years. The design job was to capture that
            knowledge and scale it, not replace it with something new.
          </p>
          <p className="type-body">
            Guerilla research earned its place here. Branch visits showed
            something interviews couldn't: the physical workflow. A tradie
            ordering at a counter, phone in one hand, is completely different
            from a participant in a usability lab. The friction points only
            became obvious in context.
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
