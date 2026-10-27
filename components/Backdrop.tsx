import MembraneLines from "./MembraneLines";

// Warna cahaya diambil dari token tema, jadi ikut berubah bila palet diganti.
const glow = (token: string, strength: number) =>
  `radial-gradient(closest-side, color-mix(in srgb, var(${token}) ${strength}%, transparent), transparent)`;

/**
 * Latar bersama hero dan header halaman: cahaya emas di kanan atas dengan
 * bentang membrane di bawahnya, pantulan marun di kiri, dan bagian bawah yang
 * memudar ke warna kanvas supaya section berikutnya menyambung tanpa garis
 * batas.
 *
 * Kedua bentang garis dipasang di pojok atas, menjauhi area judul di tengah,
 * supaya teks tetap mudah dibaca.
 */
export default function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-56 right-[-12%] h-[720px] w-[720px] rounded-full" style={{ background: glow("--color-sun", 40) }} />
      <div className="absolute -left-48 top-24 h-[620px] w-[620px] rounded-full" style={{ background: glow("--color-brand", 12) }} />

      {/* Kanan atas: bentang utama, melengkung ke arah pojok. */}
      <MembraneLines
        lines={34}
        fit="xMaxYMin slice"
        className="absolute inset-x-0 top-0 h-[640px] w-full text-brand/25"
        from={[
          [520, -8],
          [1452, -8],
        ]}
        to={[
          [1452, -8],
          [1452, 600],
        ]}
      />
      {/* Kiri atas: cermin yang lebih kecil dan samar, sebagai penyeimbang. */}
      <MembraneLines
        lines={24}
        fit="xMinYMin slice"
        className="absolute inset-x-0 top-0 h-[640px] w-full text-brand/12"
        from={[
          [760, -8],
          [-12, -8],
        ]}
        to={[
          [-12, -8],
          [-12, 420],
        ]}
      />

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-canvas" />
    </div>
  );
}
