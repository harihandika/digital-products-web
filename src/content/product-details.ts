import type { ProductId } from "@/content/products";

type ProductDetail = {
  headline: string;
  introduction: string;
  audience: string;
  scopeLabel: string;
  scopeNote: string;
  workflowLabel: string;
  steps: { title: string; description: string }[];
  limitations: string[];
  questions: { question: string; answer: string }[];
};

export const productDetails: Record<ProductId, ProductDetail> = {
  "find-people": {
    headline: "Percakapan sederhana. Penanganan oleh manusia.",
    introduction:
      "Bot relay untuk membantu meneruskan permintaan layanan dari pengguna Telegram ke admin. Admin meninjau dan membalas secara manual; nama produk ini bukan layanan pencarian data pribadi.",
    audience:
      "Pelaku usaha atau pengelola layanan yang ingin mencoba alur permintaan melalui Telegram dan mempunyai admin untuk menanganinya.",
    scopeLabel: "Lingkup bot yang dikembangkan",
    scopeNote:
      "Fokus pada relay pesan dan balasan manual. Kesiapan operasional masih perlu diuji sebelum pilot.",
    workflowLabel: "Alur relay yang dituju",
    steps: [
      {
        title: "Pengguna mengirim permintaan",
        description:
          "Pengguna menulis pertanyaan layanan lewat Telegram, tanpa perlu menyerahkan data pribadi pihak lain.",
      },
      {
        title: "Admin meninjau pesan",
        description:
          "Permintaan diteruskan kepada admin yang berwenang untuk diperiksa dan ditangani secara manual.",
      },
      {
        title: "Admin mengirim balasan",
        description:
          "Admin menulis jawaban untuk diteruskan kembali kepada pengguna. Respons bergantung pada ketersediaan admin.",
      },
    ],
    limitations: [
      "Bukan alat pencarian identitas, pelacakan, scraping, atau penyebaran data pribadi pihak lain.",
      "Bukan chatbot AI yang menjawab otomatis. Tidak ada janji waktu respons atau dukungan 24 jam.",
      "Konfigurasi bot, perlindungan dari penyalahgunaan, dan uji admin–pengguna harus diselesaikan sebelum pilot.",
      "Pesan diproses melalui Telegram. Ketentuan, privasi, dan ketersediaan platform tersebut tetap berlaku.",
    ],
    questions: [
      {
        question: "Apakah Find People bisa mencari informasi seseorang?",
        answer:
          "Tidak. Tujuannya adalah relay permintaan layanan yang sah dari pengguna ke admin, bukan pencarian atau distribusi data pribadi pihak lain.",
      },
      {
        question: "Apakah pesan langsung dijawab oleh AI?",
        answer:
          "Tidak. Jawaban ditulis oleh admin secara manual. Kecepatan dan isi balasan bergantung pada operator layanan.",
      },
    ],
  },
  "cerdas-ai": {
    headline: "Rencana belajar yang berangkat dari pemahaman.",
    introduction:
      "Konsep platform latihan adaptif untuk membantu peserta ujian memahami kesalahan dan menentukan topik belajar berikutnya. Fitur, konten, serta kategori ujian awal belum final.",
    audience:
      "Calon peserta ujian yang membutuhkan latihan terarah dan pembahasan. Satu kategori ujian akan dipilih lebih dahulu sebelum cakupan diperluas.",
    scopeLabel: "Arah pengembangan yang direncanakan",
    scopeNote:
      "Seluruh lingkup berikut masih merupakan rencana, bukan fitur yang sudah tersedia. Akses dan kategori ujian belum ditetapkan.",
    workflowLabel: "Alur belajar yang direncanakan",
    steps: [
      {
        title: "Berlatih pada satu kategori",
        description:
          "Rencana awal berfokus pada satu kategori ujian dan bank soal yang perlu divalidasi sumber serta kualitasnya.",
      },
      {
        title: "Meninjau jawaban",
        description:
          "Pembahasan direncanakan untuk membantu memahami kesalahan. Penilaian dan penjelasan perlu diuji konsistensinya.",
      },
      {
        title: "Menentukan topik berikutnya",
        description:
          "Rekomendasi latihan berdasarkan hasil merupakan arah pengembangan yang perlu diuji sebelum ditawarkan.",
      },
    ],
    limitations: [
      "Belum tersedia untuk digunakan atau didaftarkan. Tidak ada jadwal peluncuran yang dijanjikan.",
      "Kategori ujian awal belum ditentukan; belum mengklaim dukungan UTBK/SNBT maupun CPNS.",
      "Tidak menjamin kelulusan, kenaikan skor, atau kebenaran setiap penjelasan AI.",
      "Hak penggunaan soal, review pembahasan, privasi peserta, dan batas biaya AI harus ditetapkan sebelum akses awal.",
    ],
    questions: [
      {
        question: "Apakah latihan UTBK atau CPNS sudah tersedia?",
        answer:
          "Belum. Kategori ujian pertama belum ditentukan. Rencana awal akan dibatasi pada satu kategori setelah validasi kebutuhan dan konten.",
      },
      {
        question: "Apakah soalnya resmi dan pembahasannya pasti benar?",
        answer:
          "Belum ada klaim soal resmi. Sumber dan hak penggunaan konten perlu diverifikasi; pembahasan, termasuk yang dibantu AI, perlu melalui review.",
      },
    ],
  },
  "stock-analyzer": {
    headline: "Susun riset. Pahami konteks. Putuskan sendiri.",
    introduction:
      "Dashboard riset saham dalam pengembangan untuk mengeksplorasi indikator teknikal, menyusun watchlist, dan membaca ringkasan AI sebagai bahan kajian. Bukan layanan nasihat investasi personal.",
    audience:
      "Pembelajar pasar saham dan periset mandiri yang ingin mengorganisasi pengamatan, memahami asumsi, dan memeriksa informasi sebelum mengambil keputusan sendiri.",
    scopeLabel: "Lingkup dashboard yang dikembangkan",
    scopeNote:
      "Indikator, sumber data, dan ringkasan masih memerlukan validasi. Beta dalam pengembangan tidak berarti akses publik sudah dibuka.",
    workflowLabel: "Alur riset yang dituju",
    steps: [
      {
        title: "Organisasi pengamatan",
        description:
          "Watchlist membantu menyusun saham yang ingin dipelajari. Pencantuman saham bukan rekomendasi membeli atau menjual.",
      },
      {
        title: "Tinjau indikator",
        description:
          "Indikator teknikal menjadi bahan pengamatan. Perhitungan, kualitas data, dan asumsi perlu diperiksa sebelum digunakan.",
      },
      {
        title: "Baca ringkasan dengan kritis",
        description:
          "Ringkasan AI menjadi konteks tambahan yang bisa keliru, bukan pengganti verifikasi sumber atau keputusan pribadi.",
      },
    ],
    limitations: [
      "Tidak menjamin keuntungan, akurasi prediksi, atau hasil investasi tertentu.",
      "Bukan nasihat investasi personal, layanan transaksi, atau eksekusi order saham.",
      "Hak penggunaan dan distribusi data serta akurasi indikator belum selesai divalidasi; akses publik belum dibuka.",
      "Tidak mengklaim data real-time. Sumber, waktu pembaruan, keterbatasan data, dan biaya AI harus dijelaskan sebelum akses publik.",
    ],
    questions: [
      {
        question: "Apakah ini sinyal beli atau jual yang dijamin?",
        answer:
          "Tidak. Indikator dan ringkasan hanya bahan riset, bukan instruksi transaksi, nasihat investasi personal, atau jaminan keuntungan.",
      },
      {
        question: "Apakah data pasar sudah siap untuk langganan publik?",
        answer:
          "Belum. Hak penggunaan data, kualitas dan waktu pembaruan, akurasi indikator, serta biaya layanan perlu diverifikasi sebelum akses publik atau penawaran langganan.",
      },
    ],
  },
};
