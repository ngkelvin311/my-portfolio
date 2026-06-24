import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Denton Corker Marshall — Kelvin Ng",
  description: "Architectural work at Denton Corker Marshall.",
};

const work = [
  {
    title: "North East Link",
    subtitle: "Victoria's largest infrastructure project",
    description:
      "Part of the bid delivery team, responsible for the structural, noise wall, and buildings packages end to end.",
    image: "",
  },
  {
    title: "Add project",
    subtitle: "Infrastructure / Education / Competition",
    description:
      "Drop in an image and a short description of another project from your time at DCM.",
    image: "",
  },
  {
    title: "Add project",
    subtitle: "Infrastructure / Education / Competition",
    description:
      "Drop in an image and a short description of another project from your time at DCM.",
    image: "",
  },
];

export default function DCMPage() {
  return (
    <main
      id="dcm"
      role="main"
      aria-label="DCM work"
      className="mx-auto w-full max-w-[1200px] px-6 sm:px-10 lg:px-16 pt-16 pb-32 flex flex-col gap-0"
    >
      <Reveal immediate delay={100}>
        <Link
          href="/"
          className="type-meta inline-flex items-center gap-2 mb-12 opacity-60 hover:opacity-100 transition-opacity"
        >
          ← Back
        </Link>
      </Reveal>

      <Reveal immediate delay={200}>
        <div
          className="flex flex-col gap-6 pb-16 border-b border-dashed"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="type-tagline">Work</p>
          <div className="type-display-sm">
            <p>Denton Corker Marshall</p>
          </div>
          <p className="type-body max-w-[560px] opacity-70">
            Architectural Assistant, 2019 to 2021. Large scale infrastructure,
            education, and architectural competition projects across Australia
            and China.
          </p>
        </div>
      </Reveal>

      <div className="flex flex-col gap-0">
        {work.map((item, i) => (
          <Reveal key={i} delay={i * 100}>
            <div
              className="grid grid-cols-1 tablet:grid-cols-2 gap-12 py-16 border-b border-dashed items-start"
              style={{ borderColor: "rgb(var(--border))" }}
            >
              <div
                className="relative w-full rounded-lg overflow-hidden"
                style={{ minHeight: "280px" }}
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center rounded-lg"
                    style={{
                      minHeight: "280px",
                      border: "1px dashed rgb(var(--border))",
                      background: "rgb(var(--surface))",
                    }}
                  >
                    <p className="type-meta opacity-40">Add image here</p>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-4 justify-center">
                <p className="type-meta opacity-40">0{i + 1}</p>
                <p className="type-body-emphasis text-xl">{item.title}</p>
                <p className="type-meta opacity-50">{item.subtitle}</p>
                <p className="type-body opacity-80 max-w-[440px]">
                  {item.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </main>
  );
}