"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { RubyColor } from "@/data/colors";
import { downloadName } from "@/data/colors";
import { DownloadButton } from "./DownloadButton";

type ColorDetailProps = {
  color: RubyColor | null;
  onNavigate: (direction: -1 | 1) => void;
  onClose: () => void;
};

const CONTROLS_IDLE_DELAY = 2200;

export function ColorDetail({ color, onNavigate, onClose }: ColorDetailProps) {
  const [controlsVisible, setControlsVisible] = useState(true);
  const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pointerOnControl = useRef(false);

  const showControls = useCallback(() => {
    setControlsVisible(true);
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    hideTimeout.current = setTimeout(() => {
      if (!pointerOnControl.current) setControlsVisible(false);
    }, CONTROLS_IDLE_DELAY);
  }, []);

  useEffect(() => {
    if (!color) return;

    showControls();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        onNavigate(event.key === "ArrowLeft" ? -1 : 1);
        showControls();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };
  }, [color, onClose, onNavigate, showControls]);

  if (!color) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#1f1c18]/45 px-2 py-3 backdrop-blur-sm sm:px-4 sm:py-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${color.code} ${color.name}`}
      onMouseMove={showControls}
      onTouchStart={showControls}
    >
      <div className="relative mx-auto grid h-[min(88vh,900px)] w-full max-w-[90vw] shrink-0 grid-cols-1 overflow-auto bg-[var(--panel)] md:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-0 bg-[#eee7dc]">
          <Image
            src={color.image}
            alt={`${color.code} ${color.name} enlarged material sample`}
            width={1100}
            height={1300}
            className="absolute inset-0 h-full w-full object-cover"
            priority
          />
          {([-1, 1] as const).map((direction) => (
            <button
              key={direction}
              type="button"
              aria-label={direction === -1 ? "Previous color" : "Next color"}
              onClick={() => {
                onNavigate(direction);
                showControls();
              }}
              onMouseEnter={() => {
                pointerOnControl.current = true;
                if (hideTimeout.current) clearTimeout(hideTimeout.current);
                setControlsVisible(true);
              }}
              onMouseLeave={() => {
                pointerOnControl.current = false;
                showControls();
              }}
              className={`focus-ring absolute inset-y-0 ${direction === -1 ? "left-0" : "right-0"} z-10 flex w-16 items-center justify-center text-[#1f1c18] transition-opacity duration-300 sm:w-20 ${controlsVisible ? "opacity-100" : "pointer-events-none opacity-0"}`}
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-[#fffaf0]/55 text-3xl font-light leading-none text-[#1f1c18]/65 transition-colors hover:bg-[#fffaf0]/90 hover:text-[#1f1c18] sm:size-12" aria-hidden="true">
                {direction === -1 ? "‹" : "›"}
              </span>
            </button>
          ))}
        </div>
        <div className="flex min-h-0 flex-col overflow-y-auto p-7 md:p-10">
          <button
            type="button"
            onClick={onClose}
            className="focus-ring self-end text-xs uppercase tracking-[0.24em] text-[var(--muted)]"
          >
            Close
          </button>
          <p className="mt-8 text-xs uppercase tracking-[0.28em] text-[var(--muted)]">{color.code}</p>
          <h2 className="font-editorial mt-2 text-5xl leading-none md:text-6xl">{color.name}</h2>
          <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 text-sm">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">Color</dt>
              <dd className="mt-2">{color.color}</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">Category</dt>
              <dd className="mt-2">{color.category}</dd>
            </div>
          </dl>
          <div className="mt-10">
            <DownloadButton href={color.downloadImage} filename={downloadName(color, "color")}>
              Download Color
            </DownloadButton>
          </div>
        </div>
      </div>
    </div>
  );
}
