# Hari 04 — journey dan arsitektur homepage

Task: `WEB-D04`, prioritas P1. Peran: Product Manager + Architect + implementation engineer. Scope: `harihandika/digital-products-web`. Tanggal rencana: 15 Oktober 2026 (Asia/Jakarta); eksekusi: 17 Oktober 2026. Estimasi lingkup: satu sesi implementasi dan validasi; bukan komitmen tanggal rilis.

## Bukti awal dan perubahan rencana

Checkout dan origin GitHub telah diperiksa. Repo tidak mempunyai commit, source, README, AGENTS.md, atau catatan Hari 01–03; remote tidak mengembalikan refs. Pekerjaan hari sebelumnya tidak diasumsikan selesai. Perubahan rencana: buat scaffold Next.js App Router + TypeScript + Tailwind dan alat uji sebagai prasyarat terkecil, lalu implementasikan hanya homepage Hari 04.

Bukti kontekstual dari onboarding sebelumnya: source Find People mendukung bot relay manual Telegram; AI Stock Analyzer mempunyai backend riset dan frontend. Pengujian onboarding tidak membuktikan peluncuran produk. CerdasAI hanya dilaporkan berada di laptop pengguna pada `C:\Users\harih\Documents\AI + Software Enggineer\CerdasAI`; source, remote, serta fitur aktual belum dapat diverifikasi. Tidak ada akses ke filesystem laptop dari task cloud. Tidak ada perubahan pada repository lain.

## Journey

| Langkah | Kebutuhan pengunjung | Bagian / perilaku |
| --- | --- | --- |
| Pahami | Apa manfaat website ini? | Hero, CTA ke katalog dan use case. |
| Bandingkan | Produk mana yang relevan? | Tiga kartu dengan manfaat, status, batasan dan persiapan akses. |
| Cocokkan | Apakah ini untuk saya? | Contoh pelaku usaha, peserta ujian, periset mandiri; link ke kartu terkait. |
| Percaya | Apa bukti dan batas janji? | Transparansi pengembangan, data minimal, kendali manusia. |
| Putuskan | Bisa mencoba, berapa biaya, data apa? | FAQ disclosure dengan jawaban jujur. |
| Lanjutkan | Apa langkah yang tersedia sekarang? | CTA untuk memilih produk; pemberitahuan demo/kontak belum dibuka. |

Tidak ada kontak resmi yang diberikan. Karena itu tidak dibuat nomor WhatsApp, email, formulir sukses palsu, atau tombol daftar yang tidak bekerja. CTA saat ini adalah navigasi eksplorasi, bukan konversi lead. Integrasi kontak adalah pekerjaan lanjutan setelah kanal diverifikasi.

## Keputusan implementasi

- Next.js + TypeScript + Tailwind mengikuti arah program. Homepage statis, tanpa mandatory backend/database.
- Komponen terpisah untuk Header, ProductCard, Icon, HeroIllustration; konten terpusat agar status mudah direview.
- Sistem font lokal, tanpa gambar pelanggan, tracker, API AI, atau data pasar. Ilustrasi percakapan diberi label contoh dan bukan bukti pelanggan.
- Status Find People dan AI Stock Analyzer: **Beta, dalam pengembangan**. Pilot/akses publik belum dibuka; tidak mengklaim closed beta tervalidasi. Cerdas AI: **Coming Soon**, kategori ujian belum dipilih.
- Trust dibangun dengan komitmen dan batasan, bukan testimoni, logo klien, jumlah pengguna, keuntungan saham, atau hasil ujian buatan.
- Halaman dan elemen interaktif diuji pada desktop, viewport seluler, dan lebar 320 px. Navigasi keyboard, skip link, focus ring, reduced motion, hierarchy heading, bahasa halaman, serta disclosure menggunakan HTML semantik.
- Metadata deskriptif dan OpenGraph tersedia. Noindex dipertahankan hingga review rilis. Tidak mengarang domain/canonical URL.

## Acceptance criteria dan bukti

1. Ada hero, tepat tiga produk komersial, use case, trust, FAQ, dan CTA pada `/`.
2. Semua produk mempunyai label status dan penjelasan kesiapan; ERP/personal portfolio tidak masuk katalog.
3. Semua link mengarah ke target nyata. Menu, disclosure, dan skip link berfungsi lewat keyboard.
4. Tidak ada overflow horizontal pada desktop, mobile, dan 320 px; tidak ada error JavaScript pada journey browser yang diuji.
5. Tidak ada request pihak ketiga atau cookie pada smoke test homepage. Tidak ada form atau input data pelanggan.
6. Lint, typecheck, component test, build, browser test, axe, dan audit dependensi produksi dijalankan; hasil aktual dicatat di daily-progress.

## Risiko dan gerbang lanjutan

| Area | Keputusan / pekerjaan berikutnya |
| --- | --- |
| Keamanan | Tidak ada auth/form/API/secrets untuk scope ini. Review ulang sebelum menerima lead. Audit dependency adalah snapshot advisory saat dijalankan, bukan jaminan bebas kerentanan. |
| Aksesibilitas | Uji otomatis dan keyboard melengkapi review visual; belum ada audit screen reader manusia atau pengujian semua perangkat. |
| Privasi | Tidak ada analytics atau form. Log hosting tetap mungkin ada. Dokumen privacy/terms formal perlu review sebelum publikasi. |
| Performa | Static prerender, font sistem, SVG kecil; tidak ada API call saat render. Belum mengukur Core Web Vitals pada hosting nyata atau Lighthouse produksi. |
| Lisensi data | Homepage tidak mengunduh atau mendistribusikan data saham. Hak data, ketepatan indikator, dan batas AI Stock Analyzer tetap gate produk tersendiri. |
| Konten belajar | Tidak mengimpor soal atau mengklaim soal resmi. Verifikasi sumber dan kategori Cerdas AI sebelum halaman detail. |
| Biaya | Tidak ada pemanggilan Telegram/Anthropic/Gemini, pembayaran, atau resource berbayar yang diaktifkan. Hosting/domain dan biaya produk belum ditetapkan. |

## Handoff CerdasAI dan Hari 05

CerdasAI tidak dapat di-push dari folder Windows melalui mesin cloud ini. Pemilik perlu menghubungkan remote GitHub yang benar dari laptop atau menyediakan repository tersebut pada task terpisah. Sebelum push, periksa `git status`, remote, `.gitignore`, secret, serta file data lokal. Jangan mengunggah `.env`, token, data peserta, atau direktori dependency. Jangan menganggap repository baru sudah ada atau membuat remote berdasarkan tebakan.

Hari 05: halaman katalog/detail tiga produk, draft privacy/terms, dan alur prospek setelah kanal kontak diverifikasi. Verifikasi source CerdasAI sebelum mengubah klaim fiturnya. Harga, pembayaran, deployment, dan aktivasi kanal kontak tetap membutuhkan keputusan pemilik. Perubahan lintas repo memerlukan task/handoff terpisah.
