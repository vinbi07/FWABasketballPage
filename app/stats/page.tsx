import Footer from "@/components/layout/Footer";
import GlobalNav from "@/components/layout/GlobalNav";
import StatsSection from "@/components/sections/StatsSection";
import { clubData } from "@/lib/clubData";

export default function StatsPage() {
  return (
    <div className="min-h-screen bg-transparent text-[color:var(--foreground)]">
      <GlobalNav clubName={clubData.clubName} navItems={clubData.navItems} socials={clubData.socials} />
      <main className="pb-10">
        <section className="px-5 pt-16 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <h1 className="section-title">Stats</h1>
            <p className="section-subtitle mt-3 text-sm uppercase tracking-[0.16em]">Offense and Defense Breakdown</p>
          </div>
        </section>
        <StatsSection stats={clubData.stats} />
      </main>
      <Footer socials={clubData.socials} />
    </div>
  );
}
