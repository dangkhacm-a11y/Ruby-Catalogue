"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { categories, rubyColors, type RubyColor } from "@/data/colors";

type ColorSelectorProps = {
  selected: RubyColor;
  onSelect: (color: RubyColor) => void;
};

export function ColorSelector({ selected, onSelect }: ColorSelectorProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

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
    <aside className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-auto">
      <h2 className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Select Color</h2>
      <label className="mt-5 block">
        <span className="sr-only">Search visual color</span>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search color..."
          className="focus-ring min-h-12 w-full border-b border-[var(--line)] bg-transparent outline-none placeholder:text-[#9a9287]"
        />
      </label>
      <div className="mt-4 flex gap-2 overflow-x-auto">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={`focus-ring min-h-9 whitespace-nowrap border px-3 text-[11px] uppercase tracking-[0.18em] ${
              category === item ? "border-[#1f1c18] text-[#1f1c18]" : "border-[var(--line)] text-[var(--muted)]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-1">
        {filtered.map((item) => {
          const active = item.code === selected.code;
          return (
            <button
              key={item.code}
              type="button"
              onClick={() => onSelect(item)}
              className={`focus-ring grid grid-cols-[58px_1fr] items-center gap-3 border p-2 text-left transition ${
                active
                  ? "border-[#1f1c18] bg-[#fffaf0]"
                  : "border-transparent hover:border-[var(--line)] hover:bg-[#fffaf0]/55"
              }`}
            >
              <Image
                src={item.image}
                alt={`${item.code} ${item.name} thumbnail`}
                width={116}
                height={116}
                className="aspect-square object-cover"
              />
              <span className="min-w-0">
                <span className="block text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">{item.code}</span>
                <span className="mt-1 block truncate text-sm">{item.name}</span>
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
