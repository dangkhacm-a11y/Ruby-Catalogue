import Link from "next/link";
import { ColorGrid } from "@/components/ColorGrid";
import { rubyColors } from "@/data/colors";

export default function CataloguePage() {
  return (
    <main>
      <section className="mx-auto grid min-h-[72vh] max-w-7xl content-end gap-10 px-5 pb-14 pt-20 md:px-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.34em] text-[var(--muted)]">Premium Material Collection</p>
          <h1 className="font-editorial mt-6 max-w-4xl text-7xl font-semibold leading-[0.88] md:text-8xl lg:text-9xl">
            RUBY
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            A digital material catalogue for reviewing RUBY color samples from the supplied collection.
          </p>
        </div>
        <div className="border-l border-[var(--line)] pl-6">
          <p className="font-editorial text-4xl leading-tight">{rubyColors.length} sample colors</p>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            Browse by code or material category, and download any sample directly.
          </p>
          <Link
            href="#collection"
            className="focus-ring mt-7 inline-flex min-h-11 items-center justify-center bg-[var(--accent)] px-5 text-xs font-medium uppercase tracking-[0.22em] text-[#fffaf0] transition hover:bg-[#684a38]"
          >
            Browse Colors
          </Link>
        </div>
      </section>
      <ColorGrid />
    </main>
  );
}
