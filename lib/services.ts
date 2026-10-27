import { getPhoto, type Photo } from "./photos";

export type Service = {
  id: string;
  title: string;
  summary: string;
  details: string[];
  uses: string[];
  photo: Photo;
};

export const services: Service[] = [
  {
    id: "rumah",
    title: "Kanopi Rumah",
    summary:
      "Peneduh carport, teras, dan taman yang ringan dilihat, sejuk di bawahnya, dan memberi kesan modern pada tampak depan rumah.",
    details: [
      "Bentang membrane yang lebar membuat carport untuk dua sampai tiga mobil cukup ditopang sedikit tiang, sehingga mobil leluasa keluar masuk.",
      "Bentuk dan warna membrane kami sesuaikan dengan lebar lahan serta warna cat rumah, supaya kanopi terlihat menyatu dengan bangunan.",
    ],
    uses: ["Carport", "Teras", "Taman", "Rooftop", "Balkon"],
    photo: getPhoto("carport-lengkung"),
  },
  {
    id: "fasilitas-umum",
    title: "Fasilitas Umum",
    summary:
      "Area teduh untuk masjid, sekolah, taman kota, dan ruang tunggu yang menampung banyak orang sekaligus.",
    details: [
      "Membrane meneruskan sebagian cahaya matahari, jadi area di bawahnya tetap terang di siang hari tanpa terasa terik.",
      "Posisi tiang kami atur di tepi area supaya tidak mengganggu saf, lapangan, atau jalur orang lalu lalang, dan air hujan dialirkan ke titik buang yang jelas.",
    ],
    uses: ["Masjid", "Sekolah", "Taman Kota", "Area Manasik", "Ruang Tunggu"],
    photo: getPhoto("masjid"),
  },
  {
    id: "gedung-usaha",
    title: "Gedung Usaha & Kantor",
    summary:
      "Kanopi untuk drop-off, area parkir, fasad, dan food court yang sekaligus menjadi ciri khas tampilan gedung.",
    details: [
      "Bentuk membrane yang khas mudah dikenali dari jalan, sementara pengunjung dan kendaraan di bawahnya terlindung dari panas dan hujan.",
      "Kami terbiasa mengikuti jadwal proyek, gambar kerja, dan kebutuhan dokumen dari pemilik gedung maupun kontraktor utama.",
    ],
    uses: ["Drop-off", "Area Parkir", "Fasad Gedung", "Food Court", "Gerbang"],
    photo: getPhoto("fasad-gedung"),
  },
];

/*
 * Ringkasan umum kelas material membrane yang lazim di pasaran.
 * TODO: sesuaikan dengan material yang benar-benar disediakan Jayakarta Membrane.
 */
export const materials = [
  {
    name: "PVC",
    full: "Kain polyester berlapis PVC",
    points: ["Pilihan paling umum untuk rumah dan usaha", "Mudah dibentuk dan harganya terjangkau", "Banyak pilihan warna"],
  },
  {
    name: "PVC + PVDF",
    full: "PVC dengan lapisan atas PVDF",
    points: [
      "Permukaan lebih tahan kotoran dan sinar UV",
      "Warna bertahan lebih lama di area yang terkena matahari langsung",
      "Lebih mudah dibersihkan",
    ],
  },
  {
    name: "PTFE",
    full: "Fiberglass berlapis PTFE",
    points: ["Untuk bangunan publik berskala besar", "Sangat awet dan tidak mudah kotor", "Investasi awal paling tinggi"],
  },
];
