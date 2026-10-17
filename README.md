# Digital Products

Website komersial terpisah untuk Find People, Cerdas AI, dan AI Stock Analyzer. Implementasi Hari 04: satu homepage berbahasa Indonesia. Website_Portofolio dan ProcureFlow_ERP bukan bagian katalog ini.

## Menjalankan

Node.js 24 dan npm diperlukan. Tidak ada backend, database, API key, atau layanan berbayar yang diperlukan oleh homepage ini.

```sh
npm ci
npm run dev -- --port 3010
```

Route yang dibuat: `/`. Navigasi, use case, dan CTA mengarah ke anchor pada halaman yang sama. Tidak ada halaman detail, checkout, formulir prospek, kontak eksternal yang belum diverifikasi, maupun endpoint pengumpulan data.

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
- `src/components/`: header/menu seluler, ikon lokal, ilustrasi, kartu produk.
- `src/content/products.ts`: konten, kesiapan produk, dan FAQ.
- `tests/`: component test; `tests/browser/`: browser, aksesibilitas, privasi, dan responsive smoke test.
- `docs/`: journey, keputusan arsitektur, risiko, dan status harian.

Konten utama dirender di server dan diprerender saat build. Hanya menu navigasi yang membutuhkan state di client. Font sistem dan SVG lokal menghindari unduhan font, gambar stok, dan koneksi pihak ketiga. Disclosure memakai elemen HTML `details`/`summary`.

## Sebelum rilis publik

Ini implementasi prarilis, bukan peluncuran layanan. `robots` masih `noindex, nofollow`. Sebelum mengubahnya, verifikasi kontak/domain, review privacy/terms dan status produk, tetapkan alur prospek yang berfungsi, serta jalankan ulang pemeriksaan. Tambahkan canonical URL hanya setelah domain resmi ditetapkan. Status Beta berarti dalam pengembangan, bukan bukti UAT atau kesiapan operasional.

Deployment produksi, pembayaran, layanan AI, analytics, dan pengiriman pesan tidak diaktifkan. Hosting dan domain dapat menimbulkan biaya sesuai pilihan penyedia; tidak ada klaim biaya hosting nol. Jangan tambahkan secret ke variabel `NEXT_PUBLIC_*` atau source. Jangan menambahkan informasi pribadi pelanggan ke contoh UI.

Untuk persiapan hosting Next.js: install `npm ci`, build `npm run build`, start `npm run start`. Environment variable aplikasi belum diperlukan. Tindakan deploy tetap memerlukan persetujuan pemilik dan review gerbang rilis.
