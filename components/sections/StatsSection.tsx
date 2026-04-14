import SectionReveal from "@/components/ui/SectionReveal";
import StatTable from "@/components/ui/StatTable";
import { StatTableData } from "@/lib/types";

type StatsSectionProps = {
  stats: StatTableData[];
};

export default function StatsSection({ stats }: StatsSectionProps) {
  return (
    <SectionReveal id="stats" className="px-5 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto mt-[-50] max-w-7xl">
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {stats.map((table) => (
            <StatTable key={table.title} table={table} />
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
