import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Icon } from "@/components/icon";

export default function NotFound() {
  return (
    <>
      <Header home={false} />
      <main
        id="konten"
        tabIndex={-1}
        className="shell section product-not-found"
      >
        <p className="eyebrow">404 · HALAMAN TIDAK DITEMUKAN</p>
        <h1>
          Belum ada halaman
          <br />
          di alamat ini.
        </h1>
        <p>
          Periksa alamat atau kembali ke katalog untuk melihat produk yang
          tersedia.
        </p>
        <Link className="button button-primary" href="/products">
          Kembali ke katalog <Icon name="arrow" />
        </Link>
      </main>
      <Footer />
    </>
  );
}
