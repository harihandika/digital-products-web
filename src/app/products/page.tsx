import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { Icon } from "@/components/icon";
import { products } from "@/content/products";

const title = "Katalog Produk — Digital Products";
const description =
  "Bandingkan Find People, Cerdas AI, dan AI Stock Analyzer: kebutuhan, lingkup, batasan, serta kesiapan akses yang transparan.";
export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, locale: "id_ID", type: "website" },
};

export default function ProductsPage() {
  return (
    <>
      <section className="catalog-hero">
        <div className="shell">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Beranda</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Produk</span>
          </nav>
          <p className="eyebrow">KATALOG PRODUK</p>
          <h1>
            Mulai dari kebutuhan.
            <br />
            <span>Kenali pilihannya.</span>
          </h1>
          <p className="catalog-intro">
            Tiga fokus yang berbeda: layanan pelanggan, latihan adaptif, dan
            riset saham. Pahami lingkup dan batasannya sebelum memilih.
          </p>
          <p className="availability-note">
            <Icon name="check" />
            Dalam pengembangan. Akses publik, demo, dan harga belum tersedia.
          </p>
        </div>
      </section>
      <section className="shell section" aria-labelledby="catalog-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">BANDINGKAN ARAH PRODUK</p>
            <h2 id="catalog-title">Pilih fokus Anda.</h2>
          </div>
          <p>
            Beta berarti masih dikembangkan. Coming Soon berarti konsep masih
            disiapkan.
          </p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>
      <section className="catalog-guidance">
        <div className="shell section guidance-grid">
          <div>
            <p className="eyebrow">SEBELUM MEMILIH</p>
            <h2>
              Manfaatnya jelas.
              <br />
              Batasnya juga.
            </h2>
          </div>
          <div>
            <p>
              Find People berfokus pada relay layanan yang sah, bukan pencarian
              data pribadi. Cerdas AI masih berupa rencana dan tidak menjamin
              kelulusan. AI Stock Analyzer membantu riset, bukan memberikan
              nasihat investasi personal atau menjamin keuntungan.
            </p>
            <Link className="text-link" href="/#faq">
              Baca FAQ akses, harga, dan privasi <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
