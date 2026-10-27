/*
 * Logo sementara: layar membrane emas yang ditarik dari tiga titik, di dalam
 * kotak marun, dan wordmark teks.
 * TODO: ganti dengan logo resmi Jayakarta Membrane bila sudah ada.
 */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <rect width="40" height="40" rx="11" fill="#8e1f2f" />
      <path d="M8 29C14 22.5 19 15 21.5 7c1.8 8.6 5.6 15.2 10.5 22C24.6 26.4 15.4 26.4 8 29Z" fill="#e2a93b" />
      <path d="M21.5 7v24" stroke="#ffffff" strokeOpacity="0.85" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function Logo({
  variant = "dark",
  className = "",
}: {
  /** "dark" = teks gelap untuk latar terang; "light" = teks putih untuk latar gelap. */
  variant?: "dark" | "light";
  className?: string;
}) {
  const light = variant === "light";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-10 w-10 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className={`text-[18px] font-bold tracking-[-0.02em] ${light ? "text-white" : "text-ink"}`}>
          Jayakarta
        </span>
        <span className={`mt-1 text-[9.5px] font-semibold uppercase tracking-[0.34em] ${light ? "text-sun" : "text-brand"}`}>
          Membrane
        </span>
      </span>
    </span>
  );
}
