import Image from "next/image";
import type { RubyColor } from "@/data/colors";

type ColorCardProps = {
  color: RubyColor;
  onSelect: (color: RubyColor) => void;
};

export function ColorCard({ color, onSelect }: ColorCardProps) {
  return (
    <button
      type="button"
      className="focus-ring group text-left"
      onClick={() => onSelect(color)}
      aria-label={`View details for ${color.code} ${color.name}`}
    >
      <span className="block overflow-hidden bg-[#eee7dc]">
        <Image
          src={color.image}
          alt={`${color.code} ${color.name} material sample`}
          width={760}
          height={920}
          className="aspect-[4/5] w-full object-cover transition duration-300 group-hover:scale-[1.035]"
        />
      </span>
      <span className="mt-4 flex items-start justify-between gap-3">
        <span>
          <span className="block text-xs uppercase tracking-[0.24em] text-[var(--muted)]">{color.code}</span>
          <span className="mt-1 block font-editorial text-2xl leading-none">{color.name}</span>
        </span>
        <span className="text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">{color.category}</span>
      </span>
    </button>
  );
}
