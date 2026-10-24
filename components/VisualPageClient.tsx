"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ColorSelector } from "@/components/ColorSelector";
import { VisualInfo } from "@/components/VisualInfo";
import { VisualViewer } from "@/components/VisualViewer";
import { findRubyColor, type RubyColor } from "@/data/colors";

export function VisualPageClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selected = findRubyColor(searchParams.get("color"));

  function handleSelect(color: RubyColor) {
    router.replace(`/visual?color=${color.code}`, { scroll: false });
  }

  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-24 md:px-8 lg:grid-cols-[0.32fr_0.68fr]">
      <ColorSelector selected={selected} onSelect={handleSelect} />
      <div>
        <VisualInfo color={selected} />
        <VisualViewer color={selected} />
      </div>
    </section>
  );
}
