import { StatTableData } from "@/lib/types";

type StatTableProps = {
  table: StatTableData;
};

export default function StatTable({ table }: StatTableProps) {
  return (
    <div className="panel-surface rounded-2xl p-4 sm:p-5">
      <h3 className="mb-4 text-lg font-semibold uppercase tracking-[0.11em] text-[color:var(--title-color)]">
        {table.title}
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-y-2 text-left">
          <thead>
            <tr>
              {table.headers.map((header) => (
                <th
                  key={header}
                  className="px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--subtitle-color)]"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="rounded-xl bg-[color:var(--outline-deep)]/20"
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={`${rowIndex}-${cellIndex}`}
                    className="px-3 py-3 text-sm text-[color:var(--foreground)] first:rounded-l-xl last:rounded-r-xl"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
