import Reveal from "@/components/Reveal";

export const metadata = {
  title: "maX Smart Recommendations — Kelvin Ng",
  description:
    "Tradespeople use slang. Reece catalogues use technical names. That gap meant customers couldn't find products they knew they needed. We designed a proactive recommendation engine that bridged the language barrier without the customer having to search at all.",
};

export default function SmartRecommendationsPage() {
  return (
    <main
      id="case-study"
      role="main"
      aria-label="maX Smart Recommendations case study"
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
            <p>Smart Recommendations</p>
          </div>
          <p className="type-body">
            Tradespeople use slang. Reece catalogues use technical names. That
            gap meant customers couldn't find products they knew they needed. We
            designed a proactive recommendation engine that bridged the language
            barrier before the search even started.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
            {[
              { label: "Company", value: "Reece Group" },
              { label: "Product", value: "maX" },
              { label: "Platform", value: "iOS, Android" },
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
              src="/work/smart-recommendations/smart-recommendations-hero.jpg"
              alt="maX Smart Recommendations feature on iOS"
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
                desc: "Prediction accuracy for complementary product suggestions, validated against real purchase data",
              },
              {
                stat: "Proactive",
                desc: "Products suggested while customers shop, before they hit a search dead-end",
              },
              {
                stat: "iOS + Android",
                desc: "Launched on mobile first, with cart and lists expansion scoped for the next phase",
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
            Research and design for a model-driven feature
          </h2>
          <p className="type-body">
            I led research and owned the design. The recommendation model
            itself was built in collaboration with the data team. My job was to
            understand the problem deeply enough to brief the model correctly,
            then design a surface that made its output useful at the right
            moment in the shopping flow.
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
            The product existed. The customer couldn't find it. Both sides
            were using different words.
          </h2>
          <p className="type-body">
            A plumber looking for a fitting says "1/2 bpress tee". The
            Reece catalogue says "B-Press Water Equal Tee 15mm". Branch staff type "15BPT". All 3 mean
            mean the same thing. But a keyword search on maX would match to one
            and miss the others. The product was in the catalogue. It just wasn't
            findable the way tradespeople actually look for it.
          </p>
          <p className="type-body">
            This is a mental model mismatch. The system had a model for
            how products should be named. Customers had a completely different
            model for how to describe the things they buy. A search box
            alone couldn't bridge that gap, because both sides had to use the
            same words for it to work.
          </p>
          <ul className="flex flex-col gap-2 type-body opacity-70">
            {[
              "Technical catalogue language mismatching tradesperson terminology",
              "Customers searching for products that existed but not finding them",
              "Failed searches leading to workarounds: calling the branch, checking competitors",
              "Repeat orders for the same job requiring the same searches from memory",
              "A growing gap in platform trust each time search came up empty",
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
            Where the language actually lives.
          </h2>
          <p className="type-body">
            Guerilla research ran across Reece's branch network, covering
            multiple business units and states. The format was deliberate:
            watching customers at the counter, on-site and in-flow, rather than
            interviewing them about it later. The language customers actually
            used for products showed up in real interactions, not in retrospective
            recall.
          </p>
          <p className="type-body">
            This distinction matters. Asking about behaviour produces accurate
            data. Asking about attitude does not. "How did you search for that
            product" tells you something real. "Do you find our search useful"
            does not. In-branch observation gave us behaviour without asking
            for it at all.
          </p>
          <p className="type-body">
            Competitive analysis showed how other trade platforms handled the
            language gap. Most relied on search improvements: synonym libraries,
            better indexing, autocomplete. These are reactive solutions. They
            still require the customer to type something and get it right. We
            were looking for a proactive approach.
          </p>
          <p className="type-body">
            Maze automated usability testing with our research panel validated
            the recommendation placement and interaction model before build.
            We tested two placement hypotheses: suggestions on the product
            detail page versus suggestions surfaced during active browsing.
            Contextual surfacing during browsing outperformed static PDP
            placement on both discovery and add-to-cart rate.
          </p>

          <div className="grid grid-cols-3 gap-4">
            {[
              { stat: "Guerilla", label: "In-branch research across states" },
              { stat: "Maze", label: "Automated usability testing" },
              { stat: "Competitive", label: "Analysis of trade platform patterns" },
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
                finding:
                  "Search failure was a language problem, not a catalogue problem.",
                detail:
                  "Products customers needed were in the system. The disconnect was entirely in the words used to find them. This shifted the design framing: improving search wasn't the solution. Removing the need to search correctly was.",
              },
              {
                number: "02",
                finding:
                  "Reactive solutions require the customer to already know what they're missing.",
                detail:
                  "Complementary products were being forgotten from orders because the customers didn't think of them in the moment. Better search doesn't solve forgetting. A proactive suggestion in the right context does.",
              },
              {
                number: "03",
                finding: "Context determines whether a suggestion feels helpful or intrusive.",
                detail:
                  "The Maze tests showed that placement mattered more than we expected. Suggestions surfaced at the wrong point felt like noise. The same suggestions at the right moment in the shopping flow felt like a knowledgeable colleague saying 'don't forget this one'.",
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
            Proactive, not reactive. Suggest before they search.
          </h2>
          <p className="type-body">
            The model analyses what a customer is currently adding and
            proactively surfaces products that typically accompany it, drawn
            from real purchase patterns across similar customers and jobs.
            Prediction accuracy is 80%, validated against actual order data.
          </p>
          <p className="type-body">
            The design principle here is progressive disclosure: surface
            relevant suggestions at the moment they're most useful, not before
            a customer has decided on anything and not after they've already
            placed the order. Timing makes a suggestion feel useful rather than
            promotional.
          </p>
          <p className="type-body">
            The feature also applies recognition over recall. Customers don't
            need to remember the correct technical name for a complementary
            product. They see it, recognise it, and add it. The cognitive load
            of recall is replaced by the much lighter task of recognition.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col gap-2">
              <p className="type-meta opacity-40">Recommendations while browsing</p>
              <div className="w-full rounded-lg overflow-hidden">
                <img
                  src="/work/smart-recommendations/smart-recommendations-browsing.png"
                  alt="Smart recommendations surfaced while browsing on iOS"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="type-meta opacity-40">Contextual placement</p>
              <div className="w-full rounded-lg overflow-hidden">
                <img
                  src="/work/smart-recommendations/smart-recommendations-context.png"
                  alt="Smart recommendations placement in context"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <h3 className="type-body font-medium text-lg">
              Designing for an 80% model
            </h3>
            <p className="type-body">
              80% accuracy means 1 in 5 suggestions won't be relevant. The
              design accounts for this: suggestions are framed as complementary
              options, not instructions. The customer is always in control.
              Irrelevant suggestions are easy to dismiss and don't interrupt the
              core ordering flow.
            </p>
            <p className="type-body">
              The alternative, waiting for 100% accuracy, would have meant not
              shipping. 80% is useful. A customer who sees a relevant suggestion
              4 out of 5 times will form a positive habit around it. A customer
              who sees nothing gets no benefit at all.
            </p>
          </div>
        </section>
      </Reveal>

      {/* Next steps */}
      <Reveal delay={100}>
        <section
          className="flex flex-col gap-6 py-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="type-tagline">What comes next</p>
          <h2 className="type-body font-medium text-xl">
            One surface is a proof of concept. Three is a system.
          </h2>
          <p className="type-body">
            The initial launch targeted active browsing on iOS and Android.
            The next phase expands to two additional surfaces where the model
            adds value at different moments in the ordering journey.
          </p>

          <div className="flex flex-col gap-8 mt-2">
            {[
              {
                number: "01",
                finding: "Cart: catch what they've forgotten at checkout.",
                detail:
                  "The cart is the last point where a missing item can be added before an order is placed. Complementary suggestions at cart act as a final prompt for items that didn't come up during browsing. Different timing, different customer intent, same underlying model.",
              },
              {
                number: "02",
                finding: "Lists: make saved lists smarter over time.",
                detail:
                  "A customer's saved product list reflects their most recent job. The model can surface products that consistently appear alongside list items but aren't on the list yet. The list becomes a starting point, not a ceiling.",
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

      {/* Reflection */}
      <Reveal delay={100}>
        <section className="flex flex-col gap-6 py-16">
          <p className="type-tagline">Reflection</p>
          <h2 className="type-body font-medium text-xl">
            Solve the right problem first. Then decide how.
          </h2>
          <p className="type-body">
            The temptation with a search problem is to fix search. Better
            autocomplete, synonym matching, improved indexing. Those are all
            legitimate tools. But they're reactive: they still require the
            customer to know the right words and type them. The language gap
            between how Reece names products and how tradespeople talk about
            them was too wide for better search to bridge alone.
          </p>
          <p className="type-body">
            The proactive recommendation approach worked because it removed
            the customer from the search problem entirely for complementary
            products. They didn't need to know the technical name. The model
            already knew what jobs typically needed, and the design surfaced
            it at the right moment.
          </p>
          <p className="type-body">
            The 80% accuracy conversation was worth having early. Stakeholders
            wanted higher. The case for launching at 80% came down to one
            question: is 80% more useful than nothing? For a customer who
            finds a relevant suggestion 4 out of 5 times, the answer is yes.
            Holding for perfection would have meant the model never reached
            the customers whose behaviour was actually needed to make it
            better.
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
