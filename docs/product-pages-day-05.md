# Hari 05 — katalog dan detail produk

Task `WEB-D05`, prioritas P1, pemilik peran PM + Architect + implementation engineer. Tanggal rencana Jumat, 16 Oktober 2026 (Asia/Jakarta); eksekusi aktual 17 Oktober 2026. Scope hanya `digital-products-web`. Ukuran pekerjaan: empat route menggunakan fondasi Hari 04.

## Audit dan keputusan

Baseline terverifikasi: commit `a6303e8` di branch `feat/day-04-homepage`, working tree bersih. README, source, test, dan dua dokumen Hari 04 diperiksa. Tidak ada AGENTS.md di repository. Homepage, komponen, konten, dan alat uji tersedia; tidak diperlukan scaffold/dependency baru. Panduan dynamic route, generateStaticParams, metadata, dan Link dibaca dari dokumentasi versi Next.js yang terpasang.

Rencana Hari 04 menyebut privacy/terms dan alur prospek sebagai kandidat berikutnya. Prompt Hari 05 yang sekarang membatasi implementasi pada katalog dan tiga detail; privacy/terms serta integrasi kontak ditunda. Tidak mengklaim pekerjaan hari lain selesai.

## Bukti dan batas klaim

| Produk | Dasar konten | Yang boleh dijelaskan | Yang belum dibuktikan |
| --- | --- | --- | --- |
| Find People | `src/content/products.ts`, catatan Hari 04, bukti onboarding sebelumnya tentang relay manual | Relay permintaan layanan Telegram, admin meninjau dan membalas manual; Beta dalam pengembangan | Kesiapan pilot, SLA, reliability, dukungan 24 jam, UAT operasional. Tidak mengklaim pencarian data pribadi atau jawaban AI otomatis. |
| Cerdas AI | Deskripsi rencana di repo ini dan informasi pemilik tentang folder laptop | Rencana satu kategori ujian, pembahasan dan rekomendasi yang perlu divalidasi; Coming Soon | Source, remote, fitur aktual, kategori ujian, dataset, hak konten, skor, akses publik. Semua fitur ditandai rencana, tanpa kategori atau jadwal launch rekaan. |
| AI Stock Analyzer | `src/content/products.ts`, catatan Hari 04, bukti onboarding sebelumnya tentang dashboard riset | Lingkup indikator, watchlist, ringkasan AI untuk riset; Beta dalam pengembangan | Hak penggunaan/distribusi data, akurasi indikator, real-time, nasihat personal, hasil investasi, kesiapan langganan. |

Tidak ada audit ulang atau perubahan pada repository produk lain. Deskripsi detail memperjelas lingkup dan batas konten yang sudah tercatat; tidak mengubah status menjadi layanan tersedia.

## Journey dan arsitektur

1. Homepage/header/footer → `/products`.
2. Kartu katalog/homepage → `/products/{slug}` melalui link detail yang bernama spesifik.
3. Detail → `#akses`, dengan kondisi kesiapan, tanpa pendaftaran/pembayaran palsu.
4. Detail → katalog, FAQ homepage, atau detail dua produk lainnya.
5. Breadcrumb/brand → beranda; navigasi section dari halaman produk memakai `/#...` agar tidak mencari anchor pada halaman yang salah.

Satu template server `ProductDetail` dan konten bertipe per produk; hanya tiga slug diprerender. Unknown slug ditolak 404 dengan jalur kembali ke katalog. Layout produk mempunyai header, main untuk skip link, dan footer bersama dengan homepage. Tidak ada API call, database, dependensi baru, atau environment variable baru. Metadata spesifik per route; noindex tetap aktif sampai gerbang rilis disetujui.

## Acceptance criteria

- Keempat route baru mengembalikan HTTP 200 dan mempunyai satu h1 serta metadata sesuai produk/katalog.
- Setiap produk menampilkan status, kesiapan, sasaran pengguna, lingkup, alur konsep, batasan, FAQ, dan CTA nyata.
- Cerdas AI menyatakan fitur masih rencana; tidak mengklaim dukungan UTBK/CPNS sudah tersedia.
- Semua destination link dan fragment ID diverifikasi dari respons HTTP; header, breadcrumb, produk terkait, dan jalur kembali diuji.
- Navigasi keyboard/skip link dan mobile berjalan; tidak overflow horizontal pada 320 px; axe WCAG A/AA tidak menemukan pelanggaran pada target yang diuji.
- Browser test memeriksa tanpa error JavaScript, request pihak ketiga, cookie, atau form pengumpulan data.
- Homepage Hari 04 tetap diuji. Hasil aktual dan keterbatasan dicatat di daily-progress.

## Review risiko

- **Security/privacy:** tanpa input, secret, pembayaran, analytics, atau request pihak ketiga. Logging hosting tetap mungkin. Kebijakan privasi final belum disusun; bukan klaim compliance.
- **Aksesibilitas:** semantik main/nav/breadcrumb, fokus keyboard, status tertulis, disclosure native. Uji otomatis/Chromium emulasi tidak menggantikan screen reader manusia dan perangkat asli.
- **Performa:** route statis memakai konten lokal; tidak menambah gambar/font eksternal atau pemanggilan AI. Core Web Vitals hosting nyata belum diukur.
- **Lisensi/biaya:** website tidak mendistribusikan data saham atau soal dan tidak memanggil Telegram/AI. Hak data, hak konten, biaya AI dan hosting tetap memerlukan verifikasi sebelum akses produk/penawaran.
- **Dependency:** tidak ada perubahan manifest atau lockfile. Advisory tooling ESLint dari Hari 04 perlu dipantau; hasil audit ulang dicatat terpisah dari audit runtime produksi.

## Handoff dan berikutnya

CerdasAI pada laptop tetap UNVERIFIED; sediakan repo pada task terpisah untuk memeriksa fitur dan satu kategori awal. Untuk source bot dan stock analyzer, audit/UAT detail menjadi task di repository masing-masing. Tidak mengubah Website_Portofolio atau ProcureFlow_ERP.

Hari 06 sesuai program: review webhook, admin authorization dan secret Find People dalam task terpisah pada repo bot. Untuk storefront, pekerjaan lanjutan yang masih terbuka adalah review privacy/terms, kontak resmi dan alur prospek, lalu gerbang rilis. Tidak mengaktifkan layanan atau deploy sebagai bagian Hari 05.
