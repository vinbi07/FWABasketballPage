import Footer from "@/components/layout/Footer";
import GlobalNav from "@/components/layout/GlobalNav";
import PageIntro from "@/components/sections/PageIntro";
import LeadershipCard from "@/components/ui/LeadershipCard";
import SectionReveal from "@/components/ui/SectionReveal";
import { clubData } from "@/lib/clubData";

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-transparent text-[color:var(--foreground)]">
      <GlobalNav
        clubName={clubData.clubName}
        navItems={clubData.navItems}
        socials={clubData.socials}
      />

      <main className="pb-14">
        <PageIntro
          eyebrow="Leadership"
          title="The Team Behind The Team"
          description="Our leadership group aligns performance, culture, and operations so athletes can focus on competing at their highest level."
          stats={[
            { label: "Leaders", value: String(clubData.leadership.length) },
            { label: "Core Departments", value: "6" },
            { label: "Season Focus", value: "2026" },
          ]}
        />

        <SectionReveal className="px-5 py-10 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="section-title">Leadership Group</h2>
            <p className="section-subtitle mt-2 text-xs font-semibold uppercase tracking-[0.2em]">
              Program, Performance, and Community
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
              {clubData.leadership.map((leader, index) => (
                <LeadershipCard
                  key={`${leader.name}-${index}`}
                  leader={leader}
                />
              ))}
            </div>
          </div>
        </SectionReveal>

        <SectionReveal className="px-5 py-10 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl rounded-2xl border border-[color:var(--outline-soft)]/45 bg-[color:var(--surface)] p-6 shadow-[var(--panel-shadow)] sm:p-8">
            <h2 className="section-title">Operating Principles</h2>
            <p className="section-subtitle mt-2 text-xs font-semibold uppercase tracking-[0.2em]">
              How We Lead Daily
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              <article className="rounded-xl border border-[color:var(--outline-soft)]/35 bg-[color:var(--background)]/75 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[color:var(--title-color)]">
                  Clarity
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.06em] text-[color:var(--foreground)]/85 sm:text-sm">
                  We define priorities and ownership early so execution remains
                  fast and aligned.
                </p>
              </article>

              <article className="rounded-xl border border-[color:var(--outline-soft)]/35 bg-[color:var(--background)]/75 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[color:var(--title-color)]">
                  Consistency
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.06em] text-[color:var(--foreground)]/85 sm:text-sm">
                  Weekly standards in communication, preparation, and
                  follow-through create dependable outcomes.
                </p>
              </article>

              <article className="rounded-xl border border-[color:var(--outline-soft)]/35 bg-[color:var(--background)]/75 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[color:var(--title-color)]">
                  Service
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.06em] text-[color:var(--foreground)]/85 sm:text-sm">
                  Every decision starts with what best supports athletes, staff
                  collaboration, and community trust.
                </p>
              </article>
            </div>
          </div>
        </SectionReveal>
      </main>

      <Footer socials={clubData.socials} />
    </div>
  );
}
