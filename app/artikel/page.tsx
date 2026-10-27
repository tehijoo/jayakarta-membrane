import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";
import CtaBanner from "@/components/CtaBanner";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Panduan Kanopi Membrane",
  description: "Panduan kanopi membrane: faktor penentu harga, cara merawat, dan perbandingan dengan polikarbonat dan alderon.",
};

export default function ArtikelPage() {
  return (
    <>
      <PageHeader
        eyebrow="Artikel"
        title={
          <>
            Panduan <span>kanopi membrane</span>
          </>
        }
        description="Bacaan singkat sebelum memesan: soal harga, perawatan, dan memilih bahan atap."
      />

      <section className="px-6 pb-4 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <Reveal key={article.slug} delay={i * 90}>
              <ArticleCard article={article} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
