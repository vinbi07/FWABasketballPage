import Footer from "@/components/layout/Footer";
import GlobalNav from "@/components/layout/GlobalNav";
import MediaSection from "@/components/sections/MediaSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ShopProductsSection from "@/components/sections/ShopProductsSection";
import { clubData } from "@/lib/clubData";

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-transparent text-[color:var(--foreground)]">
      <GlobalNav
        clubName={clubData.clubName}
        navItems={clubData.navItems}
        socials={clubData.socials}
      />
      <main className="pb-10">
        <section className="px-5 pt-16 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl"></div>
        </section>
        <ShopProductsSection products={clubData.products} />
        <PartnersSection partners={clubData.partners} />
        <MediaSection media={clubData.media} />
      </main>
      <Footer socials={clubData.socials} />
    </div>
  );
}
