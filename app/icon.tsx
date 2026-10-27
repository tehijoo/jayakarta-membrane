import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Favicon digambar dari ikon logo yang sama dengan LogoMark.
// TODO: ganti dengan logo resmi bila sudah ada.
export default function Icon() {
  return new ImageResponse(
    (
      <svg width="64" height="64" viewBox="0 0 40 40">
        <rect width="40" height="40" rx="11" fill="#8e1f2f" />
        <path d="M8 29C14 22.5 19 15 21.5 7c1.8 8.6 5.6 15.2 10.5 22C24.6 26.4 15.4 26.4 8 29Z" fill="#e2a93b" />
        <path d="M21.5 7v24" stroke="#ffffff" strokeOpacity="0.85" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    { ...size },
  );
}
