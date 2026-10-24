"use client";

import Image from "next/image";
import { type RubyColor, downloadName } from "@/data/colors";
import { DownloadButton } from "./DownloadButton";

export function VisualViewer({ color }: { color: RubyColor }) {
  const image = color.visuals.kitchen ?? color.image;

  return (
    <section className="pt-7" aria-live="polite">
      <div className="overflow-hidden bg-[#eee7dc]">
        <Image
          key={image}
          src={image}
          alt={`Kitchen visual for ${color.code} ${color.name}`}
          width={1600}
          height={1050}
          className="aspect-[16/10] w-full animate-[fadeIn_280ms_ease] object-cover"
          priority
        />
      </div>
      <div className="mt-5 flex justify-end">
        <DownloadButton href={image} filename={downloadName(color, "kitchen-preview")}>
          Download 3D Visual
        </DownloadButton>
      </div>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0.3; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
