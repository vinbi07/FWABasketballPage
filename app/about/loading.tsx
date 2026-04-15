export default function AboutLoading() {
  return (
    <div className="min-h-screen px-5 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-4">
        <div className="h-5 w-36 animate-pulse rounded-full bg-[color:var(--outline-soft)]/25" />
        <div className="h-10 w-full max-w-3xl animate-pulse rounded-xl bg-[color:var(--outline-soft)]/20" />
        <div className="h-24 w-full max-w-5xl animate-pulse rounded-2xl bg-[color:var(--outline-soft)]/15" />
      </div>
    </div>
  );
}
