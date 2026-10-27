import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";
import GalleryGrid from "./GalleryGrid";

export const metadata: Metadata = {
  title: "Proyek Kanopi Membrane",
  description: `Foto proyek kanopi membrane ${site.name}: carport, masjid, fasad gedung, dan proses pemasangan di lokasi.`,
};

export default function GaleriPage() {
  return (
    <>
      <PageHeader
        eyebrow="Proyek"
        title={
          <>
            Galeri <span>proyek membrane</span>
          </>
        }
        description="Pilih kategori, lalu ketuk foto untuk melihatnya lebih besar."
      />

      <section className="px-6 pb-4 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <GalleryGrid />
        </div>
      </section>

      <CtaBanner
        title="Mau kanopi seperti ini di tempat Anda?"
        description="Kirim foto lokasinya lewat WhatsApp. Kami usulkan bentuk dan ukuran yang pas untuk area Anda."
      />
    </>
  );
}
