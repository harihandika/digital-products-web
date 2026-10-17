# Digital Products

Website komersial terpisah untuk Find People, Cerdas AI, dan AI Stock Analyzer. Hari 04 menyiapkan homepage; Hari 05 menambahkan katalog dan tiga detail produk berbahasa Indonesia. Website_Portofolio dan ProcureFlow_ERP bukan bagian katalog ini.

## Menjalankan

Node.js 24 dan npm diperlukan. Tidak ada backend, database, API key, atau layanan berbayar yang diperlukan oleh homepage ini.

```sh
npm ci
npm run dev -- --port 3010
```

Route yang tersedia:

- `/` — homepage.
- `/products` — katalog tiga produk dan penjelasan status.
- `/products/find-people` — relay permintaan Telegram dengan balasan manual.
- `/products/cerdas-ai` — rencana belajar adaptif, belum fitur tersedia.
- `/products/stock-analyzer` — dashboard riset dalam pengembangan dengan batas data dan investasi.

CTA mengarah ke detail produk, bagian kesiapan akses, FAQ homepage, atau katalog. Header, breadcrumb, footer, dan tautan produk lainnya menyediakan jalur kembali. Slug produk yang tidak dikenal ditolak sebagai 404. Tidak ada checkout, formulir prospek, kontak eksternal yang belum diverifikasi, maupun endpoint pengumpulan data.

## Validasi

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm run test:e2e
npm audit --omit=dev --audit-level=high
```

Browser test memerlukan Chromium: jalankan `npx playwright install chromium` jika belum tersedia. Untuk memakai Chromium sistem di Linux, jalankan `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/chromium npm run test:e2e`. Jalankan production build dahulu; Playwright menyalakan server produksi pada port 3010. Laporan dan screenshot lokal disimpan di `test-results/` dan tidak di-commit. Hasil aktual ada di [catatan harian](docs/daily-progress.md).

## Struktur

- `src/app/`: layout, metadata, homepage, dan stylesheet responsif.
- `src/components/`: header/menu seluler, footer bersama, ikon lokal, ilustrasi, kartu dan template detail produk.
- `src/content/products.ts` dan `product-details.ts`: konten, kesiapan produk, batasan, alur dan FAQ.
- `tests/`: component test; `tests/browser/`: browser, aksesibilitas, privasi, dan responsive smoke test.
- `docs/`: journey, keputusan arsitektur, risiko, dan status harian.

Konten utama dirender di server dan diprerender saat build. Detail memakai `generateStaticParams` untuk tepat tiga slug dan `dynamicParams = false`; metadata title/description/OpenGraph spesifik per route, dengan noindex dari layout prarilis. Hanya menu navigasi yang membutuhkan state di client. Font sistem dan SVG lokal menghindari unduhan font, gambar stok, dan koneksi pihak ketiga. Disclosure memakai elemen HTML `details`/`summary`.

## Sebelum rilis publik

Ini implementasi prarilis, bukan peluncuran layanan. `robots` masih `noindex, nofollow`. Sebelum mengubahnya, verifikasi kontak/domain, review privacy/terms dan status produk, tetapkan alur prospek yang berfungsi, serta jalankan ulang pemeriksaan. Tambahkan canonical URL hanya setelah domain resmi ditetapkan. Status Beta berarti dalam pengembangan, bukan bukti UAT atau kesiapan operasional.

Deployment produksi, pembayaran, layanan AI, analytics, dan pengiriman pesan tidak diaktifkan. Hosting dan domain dapat menimbulkan biaya sesuai pilihan penyedia; tidak ada klaim biaya hosting nol. Jangan tambahkan secret ke variabel `NEXT_PUBLIC_*` atau source. Jangan menambahkan informasi pribadi pelanggan ke contoh UI.

Untuk persiapan hosting Next.js: install `npm ci`, build `npm run build`, start `npm run start`. Environment variable aplikasi belum diperlukan. Tindakan deploy tetap memerlukan persetujuan pemilik dan review gerbang rilis.
