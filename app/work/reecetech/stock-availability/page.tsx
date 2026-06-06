import Reveal from "@/components/Reveal";

export const metadata = {
  title: "maX Stock Availability — Kelvin Ng",
  description:
    "Hidden stock information was breaking customer trust and flooding branches with unnecessary calls. We brought inventory transparency to the surface, then built a sourcing engine to handle what happens when items aren't available.",
};

export default function MaxStockAvailabilityPage() {
  return (
    <main
      id="case-study"
      role="main"
      aria-label="maX Stock Availability case study"
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
            <p>maX Stock Availability</p>
          </div>
          <p className="type-body max-w-[600px]">
            Hidden stock information was breaking customer trust and flooding
            branches with unnecessary calls. We brought inventory transparency
            to the surface, then built a sourcing engine to handle what happens
            when the item they need isn't where they need it.
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

            <div className="flex flex-col gap-1">
              <p className="type-meta opacity-50">Outcome</p>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full w-fit type-body"
                style={{ background: "rgb(var(--surface))" }}
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: "#22c55e" }}
                />
                280% uplift in full-stock orders
              </div>
            </div>
          </div>

          <div className="w-full rounded-lg overflow-hidden mt-2">
            <img
              src="https://static.wixstatic.com/media/bb108e_b402f8d55892401a935caa0da1249809~mv2.jpg"
              alt="maX Stock Availability feature across platforms"
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
                stat: "280%",
                desc: "Increase in fully in-stock orders from release date, October 2022",
              },
              {
                stat: "Real-time",
                desc: "Stock data surfaced at the product, search, and cart level across all platforms",
              },
              {
                stat: "1 tap",
                desc: "To transfer an entire order to a nearby branch with all items in stock",
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
            title="Branch call volume and split delivery reduction"
            description="If you have data on branch call reduction or split deliveries before and after October 2022, add it here. These make the operational impact concrete beyond the order accuracy stat."
          />
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
            Research, design, and owning the post-launch iteration
          </h2>
          <p className="type-body max-w-[640px]">
            I led research alongside product and designed across all three
            platforms. That included the initial stock indicator design, the
            smart sourcing engine, and the iteration work after launch once we
            identified that the "Available to order" copy was creating a new
            failure mode.
          </p>
          <GapCard
            title="Team structure"
            description="Who else was involved? PM, engineers, data team? What was the scope of the future-state iteration work, and where does it sit in the roadmap now?"
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
            The order looked fine. The branch knew otherwise.
          </h2>
          <p className="type-body max-w-[640px]">
            Customers placed orders not knowing their chosen branch was out of
            stock. The first they'd hear about it was a phone call from the
            branch, or a delivery that showed up half-complete. A job site was
            waiting. The tradesperson had already committed to a schedule.
          </p>
          <p className="type-body max-w-[640px]">
            This is a textbook violation of Nielsen's Error Prevention heuristic
            (Heuristic 5, 1994): the best approach isn't a good error message
            after something goes wrong. It's preventing the error from happening
            in the first place. The information to stop this existed inside
            Reece's systems. It just wasn't visible to the customer placing the
            order.
          </p>
          <ul className="flex flex-col gap-2 type-body opacity-70 max-w-[560px]">
            {[
              "Customers placing orders without knowing their branch was out of stock",
              "Branch staff fielding avoidable phone calls to sort alternatives",
              "Delayed deliveries when items had to be transferred from other branches",
              "Split deliveries disrupting jobs that needed all materials at once",
              "Eroding trust in maX as a reliable ordering platform",
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
            Three weeks. Both sides of the counter.
          </h2>
          <p className="type-body max-w-[640px]">
            Over three weeks, we ran interviews with both customers and branch
            staff. That dual-sided approach was deliberate. The stock problem
            wasn't just a customer experience issue. It was an operational one
            too, and branch staff were absorbing most of the fallout.
          </p>
          <p className="type-body max-w-[640px]">
            Interview questions were designed following the principles in
            Caroline Jarrett's <em>Surveys That Work</em> (2021): single
            behaviour per question, no leading language, tested before
            deployment. Asking "what happens when you place an order and the
            branch doesn't have it" is more reliable than "do you find stock
            issues frustrating." One gets you a story. The other just confirms
            a bias.
          </p>
          <p className="type-body max-w-[640px]">
            Competitive analysis covered how other trade and B2B platforms
            handled stock visibility. Most surfaced a binary in-stock / out-of
            stock signal. None had built a sourcing flow that offered a
            resolution within the same ordering journey.
          </p>

          <div className="grid grid-cols-3 gap-4">
            {[
              { stat: "3 weeks", label: "interview period" },
              { stat: "2 sides", label: "customers and branch staff" },
              { stat: "Personas", label: "built from research synthesis" },
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

          <GapCard
            title="Research quotes"
            description="Add the key customer and branch staff quotes from the research here. The originals were in the Wix case study as image assets. These are the sharpest way to show what the problem actually sounded like."
          />

          <div className="flex flex-col gap-8 mt-2">
            {[
              {
                number: "01",
                finding: "The problem wasn't search. It was trust.",
                detail:
                  "Customers weren't just frustrated by out-of-stock orders. They were losing confidence in maX as a reliable tool. Several had started calling branches before placing orders to check stock manually. The platform had created a workaround it wasn't even aware of.",
              },
              {
                number: "02",
                finding:
                  "Branch staff were absorbing costs the platform should have prevented.",
                detail:
                  "Every out-of-stock order generated a branch phone call, a manual substitution decision, and often a transfer. Staff time was going into fixing errors that better information design at the order stage would have stopped entirely.",
              },
              {
                number: "03",
                finding:
                  "Customers needed a resolution, not just a status.",
                detail:
                  "Showing that something was out of stock without offering a path forward was a dead end. The design needed to surface the problem and provide the next step in the same moment: which nearby branch has everything I need.",
              },
            ].map((item) => (
              <div key={item.number} className="flex gap-6 max-w-[640px]">
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
            Show the problem. Offer the fix. Same screen.
          </h2>
          <p className="type-body max-w-[640px]">
            The design had two jobs: surface stock status clearly at every
            relevant point in the shopping flow, and give customers a path
            forward when their branch didn't have what they needed.
          </p>

          <div className="flex flex-col gap-4 mt-4">
            <h3 className="type-body font-medium text-lg">Stock indicators</h3>
            <p className="type-body max-w-[640px]">
              Indicators were built using components from Google Material Design
              Guidelines and Apple's Human Interface Guidelines. Both systems
              have well-tested patterns for status communication that users
              already understand from other apps. Using them meant we weren't
              asking customers to learn a new visual language for something as
              critical as stock status.
            </p>
            <p className="type-body max-w-[640px]">
              Stock status is surfaced at three points in the flow: search
              results, product detail page, and cart. Each touch point is
              progressively more specific. Progressive disclosure (Tog, AskTog)
              at work: give enough information to keep moving, and the full
              picture when a decision is needed.
            </p>
          </div>

          <div className="w-full rounded-lg overflow-hidden mt-2">
            <img
              src="https://static.wixstatic.com/media/bb108e_19b95a8399204cafa3310bcd7c9b7cab~mv2.jpg"
              alt="Stock availability indicator design system"
              className="w-full h-auto"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <p className="type-meta opacity-40">Search and PLP</p>
              <div className="w-full rounded-lg overflow-hidden">
                <img
                  src="https://static.wixstatic.com/media/bb108e_6440e53b61d8494ba1dd43029a37710d~mv2.png"
                  alt="Stock indicators on search results"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="type-meta opacity-40">Product detail page</p>
              <div className="w-full rounded-lg overflow-hidden">
                <img
                  src="https://static.wixstatic.com/media/bb108e_1ac22495460f48ba8d8d598c8beb64d7~mv2.png"
                  alt="Stock indicators on PDP"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <h3 className="type-body font-medium text-lg">
              Smart sourcing engine
            </h3>
            <p className="type-body max-w-[640px]">
              When a customer's preferred branch can't fulfil the whole order,
              the sourcing engine finds the nearest branch that can. One tap to
              switch the entire order. No manual product-by-product checking.
              No phone call to the branch. The problem surfaces and the solution
              is already there.
            </p>
          </div>

          <div className="w-full rounded-lg overflow-hidden">
            <img
              src="https://static.wixstatic.com/media/bb108e_62ddba6846544888b75b70f09ca5736c~mv2.png"
              alt="Smart sourcing engine to transfer order to branch with full stock"
              className="w-full h-auto"
            />
          </div>
        </section>
      </Reveal>

      {/* Next steps */}
      <Reveal delay={100}>
        <section
          className="flex flex-col gap-6 py-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="type-tagline">What came next</p>
          <h2 className="type-body font-medium text-xl">
            280% improvement, but not zero. Here's why.
          </h2>
          <p className="type-body max-w-[640px]">
            Post-launch data showed some customers still placing orders for
            out-of-stock items. Usage patterns pointed to three causes.
          </p>

          <div className="flex flex-col gap-8 mt-2">
            {[
              {
                number: "01",
                finding: "A colour signal getting lost in a busy UI.",
                detail:
                  "The amber 'Available to order' indicator was being overwhelmed visually by brighter status colours elsewhere. It wasn't prominent enough to interrupt a fast-moving order workflow.",
              },
              {
                number: "02",
                finding: "A copy problem masquerading as a design problem.",
                detail:
                  "Customers were reading 'Available to order' as 'Available'. The word they saw first was the wrong one. This is a mental model mismatch (Don Norman, The Design of Everyday Things): the label didn't match the expectation. The fix needed to address the language, not just the colour.",
              },
              {
                number: "03",
                finding: "A cart-level catch needed to exist.",
                detail:
                  "Some customers simply don't read status indicators while in ordering mode. The only reliable intervention for those customers is a friction point at cart: a clear, visually distinct review of any out-of-stock items before the order is placed. The product page can inform. The cart has to stop them.",
              },
            ].map((item) => (
              <div key={item.number} className="flex gap-6 max-w-[640px]">
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

          <p className="type-meta opacity-50 max-w-[560px] mt-2">
            The concepts below are future state as of September 2024.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <p className="type-meta opacity-40">
                Revised PDP — CTA demoted for out-of-stock items
              </p>
              <div className="w-full rounded-lg overflow-hidden">
                <img
                  src="https://static.wixstatic.com/media/bb108e_7b4df5cf20c048658377676b68089cb8~mv2.jpg"
                  alt="Future state product detail page with revised CTA hierarchy"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="type-meta opacity-40">
                Cart intervention — grouped out-of-stock review
              </p>
              <div className="w-full rounded-lg overflow-hidden">
                <img
                  src="https://static.wixstatic.com/media/bb108e_fb470067de984204a52cd7697ec38312~mv2.png"
                  alt="Future state cart page grouping out-of-stock items"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Reflection */}
      <Reveal delay={100}>
        <section className="flex flex-col gap-6 py-16">
          <p className="type-tagline">Reflection</p>
          <h2 className="type-body font-medium text-xl">
            Good results don't mean the work is done.
          </h2>
          <p className="type-body max-w-[640px]">
            280% is a significant number and it would be easy to ship it and
            move on. But some customers were still placing orders for out-of-
            stock items and that told us something. The design had failed a
            segment of users who don't read status indicators during fast-paced
            ordering. That's not a user failure. That's a design gap.
          </p>
          <p className="type-body max-w-[640px]">
            The copy problem was the more interesting lesson. "Available to
            order" reads as "Available" to a customer scanning quickly. That's
            a mental model mismatch at the language level, not just the visual
            level. Better colour contrast wouldn't have fixed it. The label
            itself needed to change.
          </p>
          <p className="type-body max-w-[640px]">
            The cart intervention concept came directly from understanding that
            different customers process information at different points in the
            flow. Some read product pages carefully. Some don't read anything
            until checkout. Designing for only one of those users means failing
            the other.
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
