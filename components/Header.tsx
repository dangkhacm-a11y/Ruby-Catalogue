"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/catalogue", label: "Color Collection" },
  { href: "/visual", label: "3D Visual" }
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[#f8f5ef]/92 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/catalogue" className="focus-ring flex items-center gap-3" aria-label="RUBY catalogue home">
          <Image
            src="/brand/logo brabd.png"
            alt="RUBY"
            width={1225}
            height={864}
            priority
            className="h-[58px] w-auto object-contain"
          />
          <span className="hidden text-[11px] uppercase tracking-[0.28em] text-[var(--muted)] sm:inline">
            Material Catalogue
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`focus-ring relative py-1 text-xs uppercase tracking-[0.22em] transition-colors duration-300 ${
                  active ? "text-[var(--accent)]" : "text-[var(--muted)] hover:text-[var(--accent)]"
                } after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[var(--accent)] after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100 ${
                  active ? "after:scale-x-100" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="focus-ring border border-[var(--line)] px-3 py-2 text-xs uppercase tracking-[0.2em] md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          Menu
        </button>
      </div>

      {open ? (
        <nav id="mobile-menu" className="border-t border-[var(--line)] px-5 py-4 md:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`focus-ring relative w-fit py-1 text-sm uppercase tracking-[0.22em] transition-colors duration-300 ${
                  pathname === link.href ? "text-[var(--accent)]" : "text-[var(--muted)]"
                } after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[var(--accent)] after:transition-transform after:duration-300 after:content-[''] ${
                  pathname === link.href ? "after:scale-x-100" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
