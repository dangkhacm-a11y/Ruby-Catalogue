type DownloadButtonProps = {
  href: string;
  filename: string;
  children: React.ReactNode;
  variant?: "dark" | "light";
};

export function DownloadButton({ href, filename, children, variant = "dark" }: DownloadButtonProps) {
  const classes =
    variant === "dark"
      ? "bg-[var(--accent)] text-[#fffaf0] hover:bg-[#684a38]"
      : "border border-[var(--line)] text-[#1f1c18] hover:border-[#1f1c18]";

  return (
    <a
      className={`focus-ring inline-flex min-h-11 items-center justify-center px-5 text-xs font-medium uppercase tracking-[0.22em] transition ${classes}`}
      href={href}
      download={filename}
    >
      {children}
    </a>
  );
}
