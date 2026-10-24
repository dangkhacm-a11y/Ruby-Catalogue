import type { RubyColor } from "@/data/colors";

export function VisualInfo({ color }: { color: RubyColor }) {
  return (
    <section className="border-b border-[var(--line)] pb-7">
      <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">{color.code}</p>
      <h1 className="font-editorial mt-2 text-5xl leading-none md:text-7xl">{color.name}</h1>
      <dl className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <dt className="text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">Color</dt>
          <dd className="mt-2">{color.color}</dd>
        </div>
        <div>
          <dt className="text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">Category</dt>
          <dd className="mt-2">{color.category}</dd>
        </div>
      </dl>
    </section>
  );
}
