/*
 * Semua data usaha ada di sini, supaya nomor WA, alamat, dan lainnya cukup
 * diganti di satu tempat. Nilai bertanda TODO masih contoh.
 */
export const site = {
  name: "Jayakarta Membrane",
  tagline: "Jasa Kanopi & Tenda Membrane",
  description:
    "Jayakarta Membrane mengerjakan desain, produksi, dan pemasangan kanopi serta tenda membrane untuk rumah, fasilitas umum, dan gedung usaha. Kantor dan workshop kami ada di Depok.",
  url: "https://www.jayakartamembrane.com",
  // Dipakai untuk WhatsApp dan telepon. Format internasional tanpa "+" atau spasi.
  whatsapp: "6281322220648",
  phoneDisplay: "0813-2222-0648",
  email: "jayakartamembrane@gmail.com",
  locations: [
    {
      label: "Kantor",
      lines: ["Perum Villa Pertiwi Blok F6 No. 11, Sukamaju", "Cilodong, Kota Depok, Jawa Barat 16415"],
    },
    {
      label: "Workshop",
      lines: ["Jl. Bukit Cengkeh 2 No. 4 Blok I-6, Tugu", "Cimanggis, Kota Depok, Jawa Barat 16451"],
    },
  ],
  // TODO
  hours: "Senin – Sabtu, 08.00 – 17.00 WIB",
  // TODO
  serviceArea: "Jabodetabek dan sekitarnya",
} as const;

export function waLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function mapsLink(lines: readonly string[]) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(lines.join(", "))}`;
}

export const telLink = `tel:+${site.whatsapp}`;

/** Pesan pembuka WhatsApp yang dipakai tombol-tombol konsultasi umum. */
export const consultMessage = `Halo ${site.name}, saya ingin konsultasi tentang kanopi membrane.`;

export const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/tentang-kami" },
  { label: "Layanan", href: "/layanan" },
  { label: "Proyek", href: "/galeri" },
  { label: "Artikel", href: "/artikel" },
  { label: "Kontak", href: "/kontak" },
];
