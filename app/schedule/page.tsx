import Footer from "@/components/layout/Footer";
import GlobalNav from "@/components/layout/GlobalNav";
import ScheduleSection from "@/components/sections/ScheduleSection";
import { clubData } from "@/lib/clubData";

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-transparent text-[color:var(--foreground)]">
      <GlobalNav
        clubName={clubData.clubName}
        navItems={clubData.navItems}
        socials={clubData.socials}
      />
      <main className="pb-10">
        <section className="px-5 pt-16 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <h1 className="section-title">Schedule</h1>
            <p className="section-subtitle mt-3 mb-0 text-sm uppercase tracking-[0.16em]">
              Monthly Matchups and Results
            </p>
          </div>
        </section>
        <ScheduleSection schedule={clubData.schedule} />
      </main>
      <Footer socials={clubData.socials} />
    </div>
  );
}
