import { getPhoto, type Photo } from "./photos";

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: { title: string; text: string }[] }
  | { type: "quote"; text: string };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date (YYYY-MM-DD), dipakai juga untuk lastModified di sitemap. */
  date: string;
  readMinutes: number;
  cover: Photo;
  body: ArticleBlock[];
};

export const articles: Article[] = [
  {
    slug: "faktor-penentu-harga-kanopi-membrane",
    title: "Apa Saja yang Menentukan Harga Kanopi Membrane?",
    excerpt:
      "Dua kanopi membrane dengan luas yang sama bisa berbeda harga cukup jauh. Ini faktor-faktor yang membuat penawaran harga naik atau turun.",
    date: "2026-10-26",
    readMinutes: 4,
    cover: getPhoto("rangka-lengkung"),
    body: [
      {
        type: "p",
        text: "Harga kanopi membrane jarang bisa dipukul rata per meter persegi. Membrane adalah gabungan kain teknis, rangka baja, dan pekerjaan pemasangan, sehingga setiap komponen ikut menentukan angka akhirnya.",
      },
      { type: "h2", text: "Faktor utama" },
      {
        type: "list",
        items: [
          {
            title: "Luas dan bentuk",
            text: "Bentuk sederhana seperti layar segitiga atau lengkung tunggal lebih hemat daripada bentuk bergelombang atau payung bertingkat yang butuh pola potong lebih rumit.",
          },
          {
            title: "Kelas material membrane",
            text: "PVC biasa, PVC berlapis PVDF, dan PTFE berbeda harga dan daya tahannya. Kelas yang lebih tinggi lebih mahal di awal, tetapi lebih awet dan mudah dirawat.",
          },
          {
            title: "Rangka dan tiang",
            text: "Ukuran pipa, ketebalan baja, jumlah tiang, serta finishing cat atau galvanis menentukan kekuatan sekaligus biaya rangka.",
          },
          {
            title: "Pondasi dan kondisi lokasi",
            text: "Tiang yang berdiri di atas tanah butuh pondasi, sedangkan rangka yang menempel ke dinding atau kolom butuh pengecekan kekuatan bangunan.",
          },
          {
            title: "Akses pemasangan",
            text: "Lokasi di lantai atas, jalan sempit, atau area yang tetap beroperasi saat pengerjaan butuh alat dan waktu tambahan.",
          },
        ],
      },
      { type: "h2", text: "Cara mendapat penawaran yang akurat" },
      {
        type: "p",
        text: "Kirim foto lokasi dari beberapa sudut beserta perkiraan panjang dan lebar area. Dari situ kami bisa memberi gambaran awal, lalu angka pastinya ditetapkan setelah survei dan pengukuran di lokasi.",
      },
      {
        type: "quote",
        text: "Saat membandingkan penawaran, cocokkan juga spesifikasinya: kelas membrane, ukuran rangka, dan cakupan garansi. Harga yang sama belum tentu isi pekerjaannya sama.",
      },
    ],
  },
  {
    slug: "cara-merawat-kanopi-membrane",
    title: "Cara Merawat Kanopi Membrane Supaya Tetap Bersih dan Awet",
    excerpt:
      "Perawatan kanopi membrane sebenarnya sederhana. Beberapa kebiasaan kecil ini membantu warnanya tetap cerah dan rangkanya tetap kokoh.",
    date: "2026-10-12",
    readMinutes: 3,
    cover: getPhoto("merapikan-membrane"),
    body: [
      {
        type: "p",
        text: "Membrane dirancang untuk tahan cuaca, tetapi debu, daun, dan genangan yang dibiarkan lama tetap bisa membuat permukaannya kusam. Dengan perawatan rutin, kanopi akan tetap rapi bertahun-tahun.",
      },
      { type: "h2", text: "Perawatan rutin" },
      {
        type: "list",
        items: [
          {
            title: "Bersihkan berkala",
            text: "Siram dengan air bersih lalu sikat pelan memakai sikat berbulu lembut dan sabun ringan. Hindari deterjen keras, pemutih, dan sikat kawat.",
          },
          {
            title: "Singkirkan daun dan ranting",
            text: "Tumpukan daun menahan air dan meninggalkan noda. Bersihkan terutama di bagian talang dan sudut yang lebih rendah.",
          },
          {
            title: "Jangan menginjak membrane",
            text: "Gunakan tangga atau scaffolding dari samping. Beban terpusat dan benda tajam bisa merobek atau meregangkan kain.",
          },
        ],
      },
      { type: "h2", text: "Pemeriksaan setiap beberapa bulan" },
      {
        type: "list",
        items: [
          {
            title: "Ketegangan membrane",
            text: "Membrane yang mulai kendur akan menampung air hujan. Hubungi teknisi untuk mengencangkan ulang sebelum genangan merusak kain.",
          },
          {
            title: "Baut, kabel, dan rangka",
            text: "Cek baut yang longgar dan titik karat pada rangka, terutama setelah angin kencang atau musim hujan panjang.",
          },
        ],
      },
    ],
  },
  {
    slug: "membrane-polikarbonat-atau-alderon",
    title: "Kanopi Membrane, Polikarbonat, atau Alderon: Mana yang Cocok?",
    excerpt:
      "Ketiganya sama-sama populer untuk carport dan teras. Bandingkan kelebihan dan batasannya sebelum memilih.",
    date: "2026-09-30",
    readMinutes: 4,
    cover: getPhoto("teras-rumah"),
    body: [
      {
        type: "p",
        text: "Memilih atap kanopi bukan hanya soal harga. Bentuk bangunan, kebutuhan cahaya, dan kenyamanan saat hujan ikut menentukan bahan mana yang paling pas.",
      },
      {
        type: "list",
        items: [
          {
            title: "Membrane",
            text: "Bisa dibentuk melengkung atau meruncing, menaungi bentang lebar dengan sedikit tiang, sejuk, dan tidak berisik saat hujan. Harganya umumnya lebih tinggi dari polikarbonat.",
          },
          {
            title: "Polikarbonat",
            text: "Tembus cahaya dan relatif terjangkau. Area di bawahnya bisa terasa panas, bunyi hujan cukup keras, dan lembarannya bisa menguning setelah lama terkena matahari.",
          },
          {
            title: "Alderon (UPVC)",
            text: "Meredam panas dan suara hujan dengan baik serta tahan karat. Tidak tembus cahaya dan bentuknya terbatas pada atap miring datar.",
          },
        ],
      },
      { type: "h2", text: "Ringkasnya" },
      {
        type: "p",
        text: "Untuk tampilan ikonik dan area luas tanpa banyak tiang, pilih membrane. Untuk carport hemat yang tetap terang, polikarbonat cukup. Untuk teras yang tenang saat hujan dan tidak perlu cahaya tembus, alderon bisa jadi pilihan.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

const dateFormat = new Intl.DateTimeFormat("id-ID", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Asia/Jakarta",
});

export function formatDate(iso: string) {
  return dateFormat.format(new Date(`${iso}T00:00:00+07:00`));
}
