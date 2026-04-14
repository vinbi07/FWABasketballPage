import Footer from "@/components/layout/Footer";
import GlobalNav from "@/components/layout/GlobalNav";
import HeroSection from "@/components/sections/HeroSection";
import PartnersSection from "@/components/sections/PartnersSection";
import RosterGrid from "@/components/sections/RosterGrid";
import StaffSection from "@/components/sections/StaffSection";
import { clubData } from "@/lib/clubData";

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-[color:var(--foreground)]">
      <GlobalNav
        clubName={clubData.clubName}
        navItems={clubData.navItems}
        socials={clubData.socials}
      />
      <main className="relative overflow-hidden pb-4">
        <HeroSection clubName={clubData.clubName} tagline={clubData.tagline} />
        <RosterGrid roster={clubData.roster} />
        <StaffSection staff={clubData.staff} />
        <PartnersSection
          partners={clubData.partners}
          socials={clubData.socials}
        />
      </main>
      <Footer socials={clubData.socials} />
    </div>
  );
}
