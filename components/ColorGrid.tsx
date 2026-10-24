"use client";

import { useMemo, useState } from "react";
import { categories, rubyColors, type RubyColor } from "@/data/colors";
import { ColorCard } from "./ColorCard";
import { ColorDetail } from "./ColorDetail";

export function ColorGrid() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<RubyColor | null>(null);

  const navigateSelected = (direction: -1 | 1) => {
    if (!selected) return;
    const currentIndex = rubyColors.findIndex((item) => item.code === selected.code);
    const nextIndex = currentIndex + direction;
    if (nextIndex >= 0 && nextIndex < rubyColors.length) setSelected(rubyColors[nextIndex]);
  };

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return rubyColors.filter((item) => {
      const categoryMatch = category === "All" || item.category === category;
      const textMatch =
        normalized.length === 0 ||
        item.code.toLowerCase().includes(normalized) ||
        item.name.toLowerCase().includes(normalized);
      return categoryMatch && textMatch;
    });
  }, [category, query]);

  return (
    <section id="collection" className="mx-auto max-w-7xl px-5 pb-24 pt-8 md:px-8">
      <div className="grid gap-5 border-y border-[var(--line)] py-5 md:grid-cols-[1fr_auto] md:items-center">
        <label className="block">
          <span className="sr-only">Search color</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search color..."
            className="focus-ring min-h-12 w-full bg-transparent text-lg outline-none placeholder:text-[#9a9287]"
          />
        </label>
        <div className="flex gap-2 overflow-x-auto" aria-label="Filter by category">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`focus-ring min-h-10 whitespace-nowrap border px-4 text-xs uppercase tracking-[0.2em] transition ${
                category === item
                  ? "border-[#1f1c18] bg-[#1f1c18] text-[#fffaf0]"
                  : "border-[var(--line)] text-[var(--muted)] hover:border-[#1f1c18] hover:text-[#1f1c18]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4 xl:grid-cols-5">
        {filtered.map((item) => (
          <ColorCard key={item.code} color={item} onSelect={setSelected} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-sm uppercase tracking-[0.22em] text-[var(--muted)]">No colors found.</p>
      ) : null}

      <ColorDetail color={selected} onNavigate={navigateSelected} onClose={() => setSelected(null)} />
    </section>
  );
}
