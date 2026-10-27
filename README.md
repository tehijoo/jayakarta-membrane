# jayakarta-membrane

Website Jayakarta Membrane: jasa desain, produksi, dan pemasangan kanopi serta tenda membrane (kantor di Cilodong, workshop di Cimanggis, Depok).
Next.js 16 (App Router) + Tailwind CSS v4, semua halaman statis. Struktur dan komponennya sama dengan situs `sinar-atap-mandiri`; palet (marun & emas), font (Outfit), logo, dan semua teksnya berbeda.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Sebelum dipublikasikan

Semua data yang masih contoh ditandai `TODO` di kode (`grep -rn TODO app components lib`).

| Apa | Di mana |
|---|---|
| Jam operasional, area layanan (WA/telepon, email, alamat kantor & workshop sudah asli) | `lib/site.ts` |
| Foto proyek: masih dari company profile PT Sinar Atap Mandiri (workshop yang sama); ganti dengan dokumentasi Jayakarta sendiri bila ada | `public/images/proyek/` + daftar di `lib/photos.ts` |
| Logo (masih logo sementara) | `components/Logo.tsx`, `app/icon.tsx` |
| Profil, nilai, visi & misi | `app/tentang-kami/page.tsx` |
| Jenis material yang benar-benar disediakan | `materials` di `lib/services.ts` |

## Struktur

- `app/`: halaman (beranda, tentang-kami, layanan, galeri, artikel, kontak), plus sitemap, robots, dan favicon.
- `components/home/`: section-section beranda. Carousel foto 3D ada di `Hero.tsx`, dan geometrinya di kelas `.arc` di `app/globals.css`.
- `components/`: komponen bersama (Navbar, Footer, PageHeader, CtaBanner, Process, dan lainnya).
- `lib/`: data usaha (`site.ts`, termasuk dua lokasi: kantor & workshop), foto, layanan, dan artikel.

Carousel 3D memakai 7 foto pertama di `lib/photos.ts`. Jumlahnya harus tetap ganjil supaya loop di layar HP menampilkan semua foto (lihat catatan `.arc` di `globals.css`).
