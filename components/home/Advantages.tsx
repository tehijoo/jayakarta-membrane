import { CloudRain, Factory, HardHat, Ruler, Sparkles, Sun, Wind } from "lucide-react";
import MembraneLines from "../MembraneLines";
import Reveal from "../Reveal";
import { site } from "@/lib/site";

/** Lingkaran berwarna di dalam headline. */
function HeadlineBadge({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <span
      aria-hidden
      className={`mx-1 inline-flex h-[0.8em] w-[0.8em] shrink-0 translate-y-[0.05em] items-center justify-center rounded-full align-middle ${className}`}
    >
      {children}
    </span>
  );
}

const glow = (token: string, strength: number) =>
  `radial-gradient(closest-side, color-mix(in srgb, var(${token}) ${strength}%, transparent), transparent)`;

export default function Advantages() {
  return (
    <section id="keunggulan" className="relative overflow-hidden py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <h2 className="mx-auto max-w-4xl text-balance text-center text-[28px] font-bold leading-[1.15] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[46px]">
            Dirakit di workshop sendiri
            <HeadlineBadge className="bg-brand text-sun">
              <Sparkles className="h-[55%] w-[55%]" strokeWidth={2.4} />
            </HeadlineBadge>
            dan dipasang tim sendiri,{" "}
            <span className="text-muted/70">
              supaya hasilnya
              <HeadlineBadge className="bg-sun text-ink">
                <Sun className="h-[58%] w-[58%]" strokeWidth={2.4} />
              </HeadlineBadge>
              sesuai gambar
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-7 tracking-[-0.01em] text-muted">
            {site.name} menangani setiap tahap pekerjaan: ukur lokasi, gambar desain, produksi rangka dan membrane, sampai
            pemasangan dan finishing di lokasi Anda.
          </p>
        </Reveal>

        <div className="relative mt-14 lg:mt-16">
          {/*
            Kartu-kartunya semi transparan, jadi butuh warna di belakangnya
            untuk diburamkan; di atas kanvas polos backdrop-blur tidak
            menampilkan apa-apa.
          */}
          <div aria-hidden className="pointer-events-none absolute -inset-x-40 -top-48 bottom-0 blur-3xl">
            <span className="absolute -left-24 top-0 h-[760px] w-[760px] rounded-full" style={{ background: glow("--color-brand", 26) }} />
            <span className="absolute -right-16 -top-10 h-[720px] w-[720px] rounded-full" style={{ background: glow("--color-sun", 36) }} />
          </div>

          <div className="relative grid gap-4 lg:grid-cols-4 lg:grid-rows-2">
            {/* Workshop: kartu besar kiri */}
            <Reveal className="lg:col-span-2 lg:row-span-2">
              <article className="relative flex h-full min-h-[300px] flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-brand/90 via-brand-dark/95 to-ink/95 p-7 text-white shadow-xl shadow-brand/25 ring-1 ring-inset ring-white/15 backdrop-blur-2xl lg:min-h-[440px]">
                <MembraneLines
                  lines={30}
                  fit="xMaxYMin slice"
                  className="absolute inset-0 h-full w-full text-sun/35"
                  from={[
                    [560, -8],
                    [1452, -8],
                  ]}
                  to={[
                    [1452, -8],
                    [1452, 560],
                  ]}
                />
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/12 ring-1 ring-inset ring-white/25">
                  <Factory className="h-7 w-7 text-sun" />
                </span>
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Workshop Sendiri</p>
                  <h3 className="mt-3 max-w-sm text-2xl font-bold leading-snug tracking-[-0.02em] lg:text-[28px]">
                    Rangka dan membrane dipotong serta dirakit di workshop kami di Cimanggis, Depok.
                  </h3>
                </div>
              </article>
            </Reveal>

            {/* Material: kartu lebar atas */}
            <Reveal delay={80} className="lg:col-span-2">
              <article className="flex h-full min-h-[200px] flex-col justify-between rounded-3xl bg-paper/60 p-7 shadow-xl shadow-ink/5 ring-1 ring-inset ring-white/80 backdrop-blur-2xl">
                <div className="flex flex-wrap gap-2">
                  {[
                    { icon: Sun, label: "Tahan UV" },
                    { icon: CloudRain, label: "Kedap air" },
                    { icon: Wind, label: "Kuat menahan angin" },
                  ].map(({ icon: Icon, label }) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-1.5 rounded-full bg-paper px-3 py-1.5 text-xs font-semibold text-ink-soft shadow-sm ring-1 ring-line/70"
                    >
                      <Icon size={14} className="text-brand" />
                      {label}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Material</p>
                  <h3 className="mt-2 text-xl font-bold tracking-[-0.02em] text-ink">
                    Membrane yang kencang, kuat ditarik, dan cocok untuk cuaca tropis.
                  </h3>
                </div>
              </article>
            </Reveal>

            {/* Rangka */}
            <Reveal delay={160}>
              <article className="flex h-full min-h-[200px] flex-col justify-between rounded-3xl bg-ink/90 p-7 text-white shadow-xl shadow-ink/20 ring-1 ring-inset ring-white/10 backdrop-blur-2xl">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-inset ring-white/15">
                  <HardHat className="h-6 w-6 text-sun" />
                </span>
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Rangka</p>
                  <h3 className="mt-2 text-lg font-bold leading-snug tracking-[-0.02em]">
                    Las rapi, rangka diperhitungkan untuk beban angin.
                  </h3>
                </div>
              </article>
            </Reveal>

            {/* Ukur lokasi */}
            <Reveal delay={240}>
              <article className="flex h-full min-h-[200px] flex-col justify-between rounded-3xl bg-sun/85 p-7 text-ink shadow-xl shadow-sun/20 ring-1 ring-inset ring-white/50 backdrop-blur-2xl">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white">
                  <Ruler className="h-6 w-6" />
                </span>
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">Ukur Lokasi</p>
                  <h3 className="mt-2 text-lg font-bold leading-snug tracking-[-0.02em]">
                    Diukur langsung di tempat sebelum produksi dimulai.
                  </h3>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
