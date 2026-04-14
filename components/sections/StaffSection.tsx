import SectionReveal from "@/components/ui/SectionReveal";
import StaffCard from "@/components/ui/StaffCard";
import { StaffMember } from "@/lib/types";

type StaffSectionProps = {
  staff: StaffMember[];
};

export default function StaffSection({ staff }: StaffSectionProps) {
  return (
    <SectionReveal className="px-5 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="section-title">Coaching Staff</h2>
        <div className="mt-6 grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-4 lg:gap-5">
          {staff.map((member) => (
            <StaffCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
