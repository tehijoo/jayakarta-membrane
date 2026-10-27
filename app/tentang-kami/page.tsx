import type { Metadata } from "next";
import Image from "next/image";
import { Eye, Factory, MapPin, Ruler, Target, Users } from "lucide-react";
import CtaBanner from "@/components/CtaBanner";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { getPhoto } from "@/lib/photos";
import { mapsLink, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: `Kenali ${site.name}, penyedia jasa kanopi dan tenda membrane dengan kantor di Cilodong dan workshop di Cimanggis, Depok.`,
};

/*
 * TODO: profil, nilai, serta visi & misi di halaman ini masih teks contoh.
 * Sesuaikan dengan profil resmi Jayakarta Membrane (tahun berdiri, badan
 * usaha, pengalaman proyek, dan sebagainya).
 */
const values = [
  {
    icon: Ruler,
    title: "Teliti",
    body: "Setiap kanopi dimulai dari pengukuran di lokasi, bukan perkiraan dari foto saja.",
  },
  {
    icon: Users,
    title: "Terbuka",
    body: "Spesifikasi material, jadwal, dan harga dijelaskan di depan, sebelum pekerjaan dimulai.",
  },
  {
    icon: Factory,
    title: "Tuntas",
    body: "Dari produksi di workshop sampai finishing di lokasi, dikerjakan oleh tim yang sama.",
  },
];

const missions = [
  "Membuat kanopi membrane yang aman, rapi, dan sesuai dengan bangunannya.",
  "Memberi penjelasan dan penawaran yang jelas sejak konsultasi pertama.",
  "Menyelesaikan pekerjaan tepat waktu dengan lokasi yang tetap bersih dan aman.",
];

export default function TentangKamiPage() {
  const photo = getPhoto("payung-membrane");

  return (
    <>
      <PageHeader
        eyebrow="Tentang Kami"
        title={
          <>
            Kanopi membrane, <span>dari workshop ke lokasi Anda</span>
          </>
        }
        description={`${site.name} merancang, memproduksi, dan memasang kanopi serta tenda membrane dari Depok.`}
      />

      <section className="pb-20 lg:pb-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <Reveal>
            <SectionHeading
              align="left"
              title={
                <>
                  Siapa <strong>kami</strong>
                </>
              }
            />
            <div className="mt-6 space-y-4 text-base leading-7 text-muted">
              <p>
                <strong className="font-semibold text-ink">{site.name}</strong> adalah penyedia jasa kanopi dan tenda
                membrane. Kami menangani pekerjaan dari pengukuran dan desain, produksi rangka baja dan membrane di workshop,
                hingga pemasangan di lokasi.
              </p>
              <p>
                Pelanggan kami beragam, mulai dari pemilik rumah yang butuh carport atau teras, pengurus masjid dan sekolah,
                sampai pemilik gedung usaha dan kantor.
              </p>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {site.locations.map((loc) => (
                <li key={loc.label}>
                  <a
                    href={mapsLink(loc.lines)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-full gap-3 rounded-2xl bg-paper p-4 ring-1 ring-line transition-colors hover:ring-brand/40"
                  >
                    {loc.label === "Workshop" ? (
                      <Factory size={20} className="mt-0.5 shrink-0 text-brand" />
                    ) : (
                      <MapPin size={20} className="mt-0.5 shrink-0 text-brand" />
                    )}
                    <span>
                      <span className="block text-sm font-semibold text-ink">{loc.label}</span>
                      <span className="mt-1 block text-sm leading-6 text-muted">{loc.lines.join(", ")}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] shadow-xl shadow-ink/10">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 540px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-paper/90 p-5 backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Satu tim, dari awal sampai akhir</p>
                <p className="mt-2 text-sm font-semibold text-ink">Ukur → Desain → Produksi → Pemasangan</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pt-4 pb-20 lg:pb-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              title={
                <>
                  Cara kami <strong>bekerja</strong>
                </>
              }
            />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {values.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 90}>
                <article className="h-full rounded-3xl bg-paper p-8 ring-1 ring-line/80">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-sun">
                    <Icon size={24} />
                  </span>
                  <h3 className="mt-6 text-xl font-bold tracking-[-0.02em] text-ink">{title}</h3>
                  <p className="mt-2 text-[15px] leading-7 text-muted">{body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-4">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal className="h-full">
            <article className="flex h-full flex-col rounded-[32px] bg-brand p-10 text-white">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sun text-ink">
                <Eye size={24} />
              </span>
              <h2 className="mt-6 text-2xl font-bold tracking-[-0.02em]">Visi</h2>
              <p className="mt-3 text-base leading-7 text-white/75">
                Menjadi pilihan utama untuk kanopi dan tenda membrane yang awet dan rapi di Jabodetabek.
              </p>
            </article>
          </Reveal>
          <Reveal delay={90} className="h-full">
            <article className="flex h-full flex-col rounded-[32px] bg-paper p-10 ring-1 ring-line/80">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-sun">
                <Target size={24} />
              </span>
              <h2 className="mt-6 text-2xl font-bold tracking-[-0.02em] text-ink">Misi</h2>
              <ol className="mt-4 space-y-3">
                {missions.map((mission, i) => (
                  <li key={mission} className="flex gap-3 text-[15px] leading-7 text-muted">
                    <span className="font-bold text-brand">{String(i + 1).padStart(2, "0")}</span>
                    {mission}
                  </li>
                ))}
              </ol>
            </article>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
