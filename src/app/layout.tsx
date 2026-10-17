import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Products — Software kecil. Dampak besar.",
  description:
    "Kenali Find People, Cerdas AI, dan AI Stock Analyzer. Produk digital untuk layanan pelanggan, belajar adaptif, dan riset saham dengan status pengembangan yang transparan.",
  robots: { index: false, follow: false },
  openGraph: {
    locale: "id_ID",
    type: "website",
    title: "Digital Products — Solusi untuk langkah berikutnya",
    description:
      "Jelajahi tiga produk digital dan kesiapan aksesnya. Dalam pengembangan.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>
        <a href="#konten" className="skip-link">
          Lewati ke konten utama
        </a>
        {children}
      </body>
    </html>
  );
}
