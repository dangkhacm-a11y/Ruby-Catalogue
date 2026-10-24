import { Suspense } from "react";
import { VisualPageClient } from "@/components/VisualPageClient";

export default function VisualPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <p className="text-xs uppercase tracking-[0.34em] text-[var(--muted)]">Prepared Interior Preview</p>
        <h1 className="font-editorial mt-4 text-6xl leading-none md:text-8xl">3D Visual</h1>
      </section>
      <Suspense fallback={<div className="mx-auto max-w-7xl px-5 pb-24 text-[var(--muted)] md:px-8">Loading visual...</div>}>
        <VisualPageClient />
      </Suspense>
    </main>
  );
}
