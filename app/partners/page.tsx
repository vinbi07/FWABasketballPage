import Footer from "@/components/layout/Footer";
import GlobalNav from "@/components/layout/GlobalNav";
import PartnersSection from "@/components/sections/PartnersSection";
import { clubData } from "@/lib/clubData";

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-transparent text-[color:var(--foreground)]">
      <GlobalNav
        clubName={clubData.clubName}
        navItems={clubData.navItems}
        socials={clubData.socials}
      />

      <main className="pb-10">
        <PartnersSection
          partners={clubData.partners}
          socials={clubData.socials}
        />
      </main>

      <Footer socials={clubData.socials} />
    </div>
  );
}
