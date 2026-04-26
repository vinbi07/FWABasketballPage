import SectionReveal from "@/components/ui/SectionReveal";
import { Partner, SocialLink } from "@/lib/types";
import Image from "next/image";

type PartnersSectionProps = {
  partners: Partner[];
  socials?: SocialLink[];
};

export default function PartnersSection({
  partners,
  socials = [],
}: PartnersSectionProps) {
  return (
    <SectionReveal id="shop" className="px-5 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto mt-0 max-w-7xl">
        <h2 className="section-title text-center">Partners</h2>
        <div className="mt-6 rounded-2xl p-[2px]">
          <div className="rounded-2xl bg-transparent p-0 sm:p-1">
            <div className="grid grid-cols-3 gap-0 sm:grid-cols-3 lg:grid-cols-6">
              {partners.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.href ?? "#"}
                  aria-label={`${partner.name} website`}
                  className="-m-1 flex h-24 items-center justify-center px-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--theme-ring)] sm:-m-2"
                >
                  <div className="relative h-20 w-full">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      className="partner-logo object-contain"
                      sizes="(max-width: 640px) 40vw, (max-width: 1024px) 22vw, 160px"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
