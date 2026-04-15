export default function LeadershipLoading() {
  return (
    <div className="min-h-screen px-5 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="h-10 w-full max-w-2xl animate-pulse rounded-xl bg-[color:var(--outline-soft)]/20" />
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-80 animate-pulse rounded-2xl border border-[color:var(--outline-soft)]/30 bg-[color:var(--outline-soft)]/10"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
