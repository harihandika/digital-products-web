import type { IconName } from "@/components/icon";

export type ProductId = "find-people" | "cerdas-ai" | "stock-analyzer";

export const products: {
  id: ProductId;
  name: string;
  category: string;
  status: "Beta" | "Coming Soon";
  description: string;
  readiness: string;
  icon: IconName;
  color: string;
  features: string[];
  next: string;
}[] = [
  {
    id: "find-people",
    name: "Find People",
    category: "LAYANAN PELANGGAN",
    status: "Beta",
    description:
      "Permintaan pelanggan masuk lewat Telegram. Admin membalas dari satu alur yang sederhana.",
    readiness: "Dalam pengembangan. Pilot publik belum dibuka.",
    icon: "chat",
    color: "violet",
    features: [
      "Relay pesan pengguna ke admin",
      "Balasan manual oleh admin yang berwenang",
      "Fokus pada permintaan layanan yang sah",
    ],
    next: "Sebelum pilot: uji alur admin–pengguna, perlindungan dari penyalahgunaan, dan panduan operasional.",
  },
  {
    id: "cerdas-ai",
    name: "Cerdas AI",
    category: "BELAJAR ADAPTIF",
    status: "Coming Soon",
    description:
      "Rencana teman latihan yang membantu memahami kesalahan dan menentukan topik belajar berikutnya.",
    readiness: "Masih disiapkan. Akses dan kategori ujian belum ditetapkan.",
    icon: "learn",
    color: "green",
    features: [
      "Rencana latihan untuk satu kategori ujian",
      "Pembahasan dan rekomendasi berdasarkan hasil latihan",
      "Konten dan penjelasan AI perlu melalui review",
    ],
    next: "Sebelum akses awal: tetapkan satu kategori ujian, validasi soal, dan uji konsistensi penilaian.",
  },
  {
    id: "stock-analyzer",
    name: "AI Stock Analyzer",
    category: "RISET SAHAM",
    status: "Beta",
    description:
      "Ruang kerja untuk membaca indikator, menyusun watchlist, dan mengeksplorasi konteks analisis saham.",
    readiness: "Dalam pengembangan. Validasi data dan lisensi belum selesai.",
    icon: "chart",
    color: "peach",
    features: [
      "Dashboard riset dan indikator teknikal",
      "Watchlist untuk mengorganisasi pengamatan",
      "Ringkasan AI sebagai bahan riset, bukan rekomendasi personal",
    ],
    next: "Sebelum beta publik: pastikan hak penggunaan data, akurasi indikator, dan batas biaya layanan AI.",
  },
];

export const faqs = [
  {
    id: "akses",
    question: "Apakah produknya sudah bisa digunakan?",
    answer:
      "Belum tersedia untuk akses publik. Find People dan AI Stock Analyzer berstatus Beta dalam pengembangan; Cerdas AI berstatus Coming Soon. Label Beta tidak berarti sudah siap untuk operasional pelanggan. Kesiapan masing-masing produk dijelaskan di atas.",
  },
  {
    id: "demo",
    question: "Bagaimana cara meminta demo atau akses awal?",
    answer:
      "Akses demo dan pendaftaran belum dibuka. Kanal kontak resmi akan ditambahkan setelah diverifikasi. Untuk saat ini, Anda dapat membandingkan produk dan membaca persiapan sebelum akses awal. Tidak ada formulir yang mengumpulkan data Anda di halaman ini.",
  },
  {
    id: "harga",
    question: "Berapa harga dan biaya layanannya?",
    answer:
      "Harga belum ditetapkan. Cakupan setup, dukungan, batas pemakaian, serta biaya pihak ketiga akan dijelaskan sebelum ada penawaran. Belum ada pembayaran atau langganan yang aktif di website ini.",
  },
  {
    id: "privasi",
    question: "Data apa yang dikumpulkan website ini?",
    answer:
      "Halaman ini tidak memakai formulir, pelacak analitik, atau cookie pemasaran. Hosting tetap dapat mencatat log teknis sesuai kebijakan penyedianya. Kebijakan privasi dan ketentuan layanan perlu ditinjau sebelum akses publik dibuka.",
  },
  {
    id: "batasan",
    question: "Apa batas penggunaan dan hasil dari produknya?",
    answer:
      "Find People ditujukan untuk relay permintaan layanan, bukan pencarian data pribadi pihak lain. Cerdas AI tidak menjamin kelulusan dan kontennya perlu divalidasi. AI Stock Analyzer adalah alat bantu riset, bukan nasihat investasi atau jaminan keuntungan.",
  },
];
