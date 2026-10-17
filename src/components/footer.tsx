import Link from "next/link";
import { Brand } from "@/components/header";

export function Footer() {
  return (
    <footer className="shell site-footer">
      <div>
        <Brand />
        <p>Produk digital untuk kebutuhan nyata.</p>
      </div>
      <p>
        © 2026 Digital Products.
        <br />
        <span>Dalam pengembangan · Belum dibuka untuk publik</span>
      </p>
      <Link href="/products" className="text-link">
        Semua produk <span aria-hidden="true">→</span>
      </Link>
      <a href="#konten" className="text-link">
        Kembali ke atas <span aria-hidden="true">↑</span>
      </a>
    </footer>
  );
}
