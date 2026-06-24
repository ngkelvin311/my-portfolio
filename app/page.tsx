  import React from "react";
  import { profile } from "@/content/profile";
  import { work, education } from "@/content/work";
  import { contact, openSource } from "@/content/contact";
  import Section from "@/components/Section";
  import Button from "@/components/Button";
  import Reveal from "@/components/Reveal";
  import ProtectedButton from "@/components/ProtectedButton";
  import AudienceSwitcher from "@/components/AudienceSwitcher";
  import Marquee from "@/components/Marquee";
  import AboutImage from "@/components/AboutImage";


  export default function Home() {
     return (
    <>
      <Reveal immediate delay={300}>
        <Marquee text={profile.tagline} />
      </Reveal>
      <main
        id="home"
        role="main"
        aria-label="Portfolio content"
        className="mx-auto w-full max-w-[1200px] px-6 sm:px-10 lg:px-16 pt-16 pb-32 scroll-mt-16 flex flex-col gap-16"
      >
        {/* ── Hero ──────────────────────────────────────────── */}
        <header className="flex flex-col gap-12">
          <Reveal immediate delay={500}>
            <div className="type-display-sm font-black">
              <p>{profile.headline}</p>
      <div className="flex flex-col gap-8 mt-8">
    <p>
      <strong className="font-black">{profile.introHighlight}</strong>{" "}
      {profile.intro[0]}
    </p>
    <AudienceSwitcher />
  </div>
            </div>
          </Reveal>
        </header>

        {/* ── About ─────────────────────────────────────────── */}
        <Reveal immediate delay={700}>
          <Section id="about" label="About">
            <div className="flex flex-col tablet:flex-row tablet:items-stretch gap-12 tablet:gap-16">
              <div className="type-body flex flex-col gap-6 tablet:flex-1">
               {profile.about.slice(0, -1).map((paragraph, i) => (
  <p key={i}>{paragraph}</p>
))}
<p>
  Outside of design you can find me snowboarding,{" "}
  <a href="https://youtu.be/gJeRDCTk18M?si=FRk-CibqMHy16ecY&t=219"
  target="_blank"
  rel="noopener noreferrer"
  style={{ textDecoration: "underline" }}
>
  lion dancing
</a>
  , taking photos or{" "}
  <a href="https://www.instagram.com/legion.nine/" target="_blank" rel="noopener noreferrer" className="underline"
  style={{ textDecoration: "underline" }}>
    painting little toy soldiers
  </a>
  .
</p>
              </div>
              <AboutImage />
            </div>
          </Section>
        </Reveal>

        {/* ── Experience ────────────────────────────────────── */}
        <Reveal>
          <Section id="experience" label="Experience">
            {work.map((entry, i) => (
              <React.Fragment key={entry.company}>
                {i > 0 && (
                  <div
                    style={{
                      height: 0,
                      borderTop: "1px dashed rgb(var(--border))",
                    }}
                  />
                )}
                <Reveal delay={i * 80}>
                  <div className="flex flex-col gap-6">
                    <p className="type-body-emphasis">{entry.role}</p>
                    <div className="type-meta flex items-start justify-between">
                      <span>{entry.company}</span>
                      <span>{entry.period}</span>
                    </div>
                  <p className="type-body mt-6">{entry.description}</p>
 {entry.link && (
  <div className="mt-4">
    {entry.requiresAuth ? (
      <ProtectedButton href={entry.link}>View case studies</ProtectedButton>
    ) : (
      <Button href={entry.link}>View work</Button>
    )}
  </div>
)}
                  </div>
                </Reveal>
              </React.Fragment>
            ))}
          </Section>
        </Reveal>

        {/* ── Education ─────────────────────────────────────── */}
        <Reveal>
          <Section id="education" label="Education">
            {education.map((entry, i) => (
              <Reveal key={entry.institution} delay={i * 80}>
                <div className="type-body flex flex-col gap-2">
                  <p className="type-body-emphasis">{entry.institution}</p>
                  <p>{entry.period}</p>
                  <p>{entry.qualification}</p>
                </div>
              </Reveal>
            ))}
          </Section>
        </Reveal>

        {/* ── Contact ───────────────────────────────────────── */}
        <Reveal>
          <Section id="contact" label="Contact me">
            <div className="flex flex-col tablet:flex-row tablet:items-center gap-12 tablet:gap-16">
              <Reveal delay={0} className="min-w-0 flex-1">
              <div className="flex flex-col gap-4">
    <img
      src="/illustrations/Off snowboarding.jpg"
      alt="Off snowboarding"
      className="w-full"
      loading="lazy"
    />
    <p className="type-body text-center">
      If it's winter, this is probably where you can find me
    </p>
  </div>
              </Reveal>
              <div className="flex flex-col gap-12 shrink-0">
                {contact.links.map((link, i) => (
                <Reveal key={link.label} delay={i * 100}>
    {link.label === "Carrier pigeon" ? (
<div className="group relative cursor-default type-display-lg">    Carrier pigeon
    <div className="absolute top-full left-0 mt-3 hidden group-hover:block">
      <div className="bg-black text-white text-sm font-normal px-4 py-3 rounded-lg whitespace-nowrap">
        Maybe one day, but{" "}
        <a href="mailto:your@email.com" className="underline">
          just email me for now
        </a>
      </div>
    </div>
  </div>
    ) : (
      
        <a className="type-display-lg underline block whitespace-nowrap"
        href={link.url}
        target={link.url?.startsWith("mailto:") ? undefined : "_blank"}
        rel={link.url?.startsWith("mailto:") ? undefined : "noopener noreferrer"}
        aria-label={
          link.url?.startsWith("mailto:")
            ? `Send email to ${link.url.replace("mailto:", "")}`
            : `${link.label} (opens in new tab)`
        }
      >
        {link.label}
      </a>
    )}
  </Reveal>
                ))}
              </div>
            </div>
          </Section>
        </Reveal>

        {/* ── Open Source ────────────────────────────────────── */}
        <Reveal>
          <Section id="open-source" label={openSource.heading}>
            <div className="type-body flex flex-col gap-6">
              {openSource.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <Button
              href={openSource.cta.url}
              target="_blank"
              rel="noreferrer"
              aria-label="Check out FolioLite on GitHub (opens in new tab)"
            >
              {openSource.cta.label}
            </Button>
          </Section>
        </Reveal>

        {/* ── Footer ────────────────────────────────────────── */}
        <Reveal distance={16}>
          <footer className="flex items-center justify-between type-body" style={{ paddingTop: 64 }}>
            <p>© {new Date().getFullYear()} Kelvin Ng</p>
            <a
              href="#home"
              className="underline"
              aria-label="Back to the top of the page"
            >
              Back to the top
            </a>
          </footer>
        </Reveal>
      </main>
  </>
  );
}
