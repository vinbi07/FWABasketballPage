import Footer from "@/components/layout/Footer";
import GlobalNav from "@/components/layout/GlobalNav";
import PageIntro from "@/components/sections/PageIntro";
import Button from "@/components/ui/Button";
import SectionReveal from "@/components/ui/SectionReveal";
import { clubData } from "@/lib/clubData";
import { AboutValue } from "@/lib/types";

function ValueIcon({ icon }: { icon: AboutValue["icon"] }) {
  if (icon === "strategy") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M4 20V9m8 11V4m8 16v-7" />
        <path d="M2 20h20" />
      </svg>
    );
  }

  if (icon === "development") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="m4 16 5-5 4 4 7-8" />
        <path d="M20 7h-5" />
      </svg>
    );
  }

  if (icon === "community") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="3" />
        <path d="M20 8v6" />
        <path d="M23 11h-6" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M12 2 3 7l9 5 9-5-9-5Z" />
      <path d="m3 17 9 5 9-5" />
      <path d="m3 12 9 5 9-5" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-transparent text-[color:var(--foreground)]">
      <GlobalNav
        clubName={clubData.clubName}
        navItems={clubData.navItems}
        socials={clubData.socials}
      />

      <main className="pb-12">
        <PageIntro
          eyebrow={clubData.about.badge}
          title={clubData.about.headline}
          description={clubData.about.mission}
          stats={[
            { label: "Active Seasons", value: "5" },
            {
              label: "Core Values",
              value: String(clubData.about.values.length),
            },
            {
              label: "Community Partners",
              value: String(clubData.partners.length),
            },
          ]}
        />

        <SectionReveal className="px-5 py-10 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-2 lg:gap-5">
            <article className="panel-surface rounded-2xl p-6 sm:p-8">
              <p className="section-subtitle text-xs font-semibold uppercase tracking-[0.2em]">
                Overview
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.07em] text-[color:var(--foreground)]/90 sm:text-base">
                {clubData.about.overview}
              </p>
            </article>

            <article className="panel-surface rounded-2xl p-6 sm:p-8">
              <p className="section-subtitle text-xs font-semibold uppercase tracking-[0.2em]">
                Vision
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.07em] text-[color:var(--foreground)]/90 sm:text-base">
                {clubData.about.vision}
              </p>
            </article>
          </div>
        </SectionReveal>

        <SectionReveal className="px-5 py-10 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="section-title">Core Values</h2>
            <p className="section-subtitle mt-2 text-xs font-semibold uppercase tracking-[0.2em]">
              How We Work Every Week
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
              {clubData.about.values.map((value) => (
                <article
                  key={value.title}
                  className="group rounded-2xl border border-[color:var(--outline-soft)]/45 bg-[color:var(--surface)] p-5 shadow-[var(--panel-shadow)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--outline-soft)]/55 bg-[color:var(--button-surface)] text-[color:var(--title-color)]">
                    <ValueIcon icon={value.icon} />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.1em] text-[color:var(--title-color)]">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.06em] text-[color:var(--foreground)]/85 sm:text-sm">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </SectionReveal>

        {clubData.about.milestones && clubData.about.milestones.length > 0 ? (
          <SectionReveal className="px-5 py-10 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">
              <h2 className="section-title">Milestones</h2>
              <p className="section-subtitle mt-2 text-xs font-semibold uppercase tracking-[0.2em]">
                Program Momentum
              </p>

              <ol className="mt-6 grid gap-3 md:grid-cols-3 lg:gap-4">
                {clubData.about.milestones.map((milestone) => (
                  <li
                    key={`${milestone.year}-${milestone.title}`}
                    className="rounded-2xl border border-[color:var(--outline-soft)]/45 bg-[color:var(--background)]/70 p-5"
                  >
                    <p className="text-lg font-semibold uppercase tracking-[0.1em] text-[color:var(--title-color)]">
                      {milestone.year}
                    </p>
                    <h3 className="mt-2 text-sm font-semibold uppercase tracking-[0.1em] text-[color:var(--subtitle-color)]">
                      {milestone.title}
                    </h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.06em] text-[color:var(--foreground)]/85 sm:text-sm">
                      {milestone.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </SectionReveal>
        ) : null}

        <SectionReveal className="px-5 py-10 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl rounded-2xl border border-[color:var(--outline-soft)]/55 bg-[color:var(--background)]/70  px-6 py-8 text-[color:var(--title-color)] shadow-[var(--panel-shadow)] sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--subtitle-color)]">
              Next Up
            </p>
            <h2 className="mt-3 text-2xl font-bold uppercase tracking-[0.08em] sm:text-3xl">
              Meet The Leadership Team
            </h2>
            <p className="mt-3 max-w-3xl text-sm uppercase tracking-[0.08em] text-[color:var(--foreground)]/85 sm:text-base">
              Explore the leaders shaping our game model, player experience, and
              long-term club direction.
            </p>
            <div className="mt-6">
              <Button href="/leadership" label="View Leadership" />
            </div>
          </div>
        </SectionReveal>
      </main>

      <Footer socials={clubData.socials} />
    </div>
  );
}
