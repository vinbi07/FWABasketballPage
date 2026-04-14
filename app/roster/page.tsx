import Footer from "@/components/layout/Footer";
import GlobalNav from "@/components/layout/GlobalNav";
import RosterGrid from "@/components/sections/RosterGrid";
import StaffSection from "@/components/sections/StaffSection";
import { clubData } from "@/lib/clubData";

export default function RosterPage() {
  return (
    <div className="min-h-screen bg-transparent text-[color:var(--foreground)]">
      <GlobalNav
        clubName={clubData.clubName}
        navItems={clubData.navItems}
        socials={clubData.socials}
      />
      <main className="pb-10">
        <section className="px-5 pt-16 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl rounded-2xl border border-[color:var(--panel-border)] bg-[color:var(--broadcast-surface)] px-4 py-5 shadow-[var(--panel-shadow)] sm:px-6 sm:py-6">
            <h1 className="section-title">Full Roster</h1>
            <p className="section-subtitle mt-3 text-sm uppercase tracking-[0.16em]">
              Team Players and Coaching Staff
            </p>
          </div>
        </section>
        <RosterGrid roster={clubData.roster} />
        <StaffSection staff={clubData.staff} />
      </main>
      <Footer socials={clubData.socials} />
    </div>
  );
}
