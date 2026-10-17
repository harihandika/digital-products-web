import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroIllustration } from "@/components/hero-illustration";
import { ProductCard } from "@/components/product-card";
import { Icon } from "@/components/icon";
import { products, faqs } from "@/content/products";

export default function Home() {
  return (
    <>
      <Header />
      <main id="konten" tabIndex={-1}>
        <section className="hero" id="beranda" aria-labelledby="hero-title">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="hero-label">
                <span className="small-dot" />
                DIBANGUN UNTUK KEBUTUHAN NYATA
              </p>
              <h1 id="hero-title">
                Software kecil.
                <br />
                <span>Dampak besar.</span>
              </h1>
              <p className="hero-description">
                Dari percakapan pelanggan sampai langkah belajar dan riset Anda.
                Temukan produk digital yang dirancang untuk membuat hal rumit
                terasa lebih sederhana.
              </p>
              <div className="hero-actions">
                <a href="#produk" className="button button-primary">
                  Temukan produk Anda <Icon name="arrow" />
                </a>
                <a href="#kegunaan" className="text-link">
                  Lihat kegunaannya{" "}
                  <Icon name="arrow" className="diagonal-arrow" />
                </a>
              </div>
              <p className="hero-note">
                <Icon name="check" />
                Dikembangkan bertahap. Status selalu terbuka.
              </p>
            </div>
            <HeroIllustration />
          </div>
          <div className="shell value-strip">
            <span>TEKNOLOGI YANG MEMBANTU ANDA</span>
            <div>
              <Icon name="chat" />
              Melayani lebih terarah
            </div>
            <div>
              <Icon name="learn" />
              Belajar lebih fokus
            </div>
            <div>
              <Icon name="chart" />
              Riset lebih terstruktur
            </div>
          </div>
        </section>

        <section
          className="section shell"
          id="produk"
          aria-labelledby="products-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">KENALI PRODUK KAMI</p>
              <h2 id="products-title">
                Tiga produk. Tiga cara
                <br />
                untuk melangkah maju.
              </h2>
            </div>
            <p>
              Mulai dari kebutuhan Anda.
              <br />
              Lihat manfaat, batasan, dan kesiapan
              <br className="desktop-break" /> setiap produk sebelum memilih.
            </p>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <p className="catalog-note">
            <span className="small-dot" />
            Semua produk masih dikembangkan. Akses publik dan harga belum
            tersedia.
          </p>
        </section>

        <section
          className="use-cases"
          id="kegunaan"
          aria-labelledby="uses-title"
        >
          <div className="shell section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">MULAI DARI KESEHARIAN ANDA</p>
                <h2 id="uses-title">
                  Kebutuhan berbeda.
                  <br />
                  Solusi yang lebih dekat.
                </h2>
              </div>
              <p>
                Contoh penggunaan yang ingin kami bantu.
                <br />
                Bukan janji hasil, melainkan arah pengembangan.
              </p>
            </div>
            <div className="use-grid">
              <a className="use-card" href="#find-people">
                <span className="use-number">01 / UNTUK PELAKU USAHA</span>
                <h3>
                  Permintaan pelanggan
                  <br />
                  lebih mudah ditangani.
                </h3>
                <p>
                  Untuk usaha yang ingin menerima pertanyaan lewat Telegram dan
                  meneruskannya ke admin untuk dibalas secara manual.
                </p>
                <span className="use-link">
                  Kenali Find People <Icon name="arrow" />
                </span>
              </a>
              <a className="use-card" href="#cerdas-ai">
                <span className="use-number">02 / UNTUK PESERTA UJIAN</span>
                <h3>
                  Tahu apa yang perlu
                  <br />
                  dipelajari berikutnya.
                </h3>
                <p>
                  Untuk calon peserta ujian yang membutuhkan latihan terarah dan
                  pembahasan. Kategori ujian awal masih akan ditentukan.
                </p>
                <span className="use-link">
                  Kenali Cerdas AI <Icon name="arrow" />
                </span>
              </a>
              <a className="use-card" href="#stock-analyzer">
                <span className="use-number">03 / UNTUK PERISET MANDIRI</span>
                <h3>
                  Susun pengamatan.
                  <br />
                  Pahami konteksnya.
                </h3>
                <p>
                  Untuk pembelajar pasar saham yang ingin mengeksplorasi
                  indikator dan watchlist sebagai bahan riset, bukan sinyal
                  keuntungan.
                </p>
                <span className="use-link">
                  Kenali AI Stock Analyzer <Icon name="arrow" />
                </span>
              </a>
            </div>
          </div>
        </section>

        <section
          className="section shell principles-grid"
          id="prinsip"
          aria-labelledby="principles-title"
        >
          <div>
            <p className="eyebrow">KEPERCAYAAN DIMULAI DARI KEJELASAN</p>
            <h2 id="principles-title">
              Dibangun dengan hati-hati.
              <br />
              <span className="muted-heading">Dijelaskan apa adanya.</span>
            </h2>
            <p className="principles-intro">
              Kami memilih menunjukkan apa yang sedang dikerjakan, apa yang
              belum siap, dan apa batasannya.
            </p>
            <a className="text-link" href="#faq">
              Kenali batas & komitmen kami <Icon name="arrow" />
            </a>
          </div>
          <div className="principles-list">
            <div>
              <span className="principle-icon">
                <Icon name="check" />
              </span>
              <div>
                <h3>Status yang transparan</h3>
                <p>
                  Beta dan Coming Soon ditampilkan jelas. Tidak ada klaim
                  pelanggan atau testimoni yang dibuat-buat.
                </p>
              </div>
            </div>
            <div>
              <span className="principle-icon">
                <Icon name="chat" />
              </span>
              <div>
                <h3>Kebutuhan dulu, data secukupnya</h3>
                <p>
                  Halaman ini tidak meminta data pribadi. Tidak ada pelacak
                  pemasaran atau pembayaran yang aktif.
                </p>
              </div>
            </div>
            <div>
              <span className="principle-icon">
                <Icon name="spark" />
              </span>
              <div>
                <h3>AI membantu, Anda memutuskan</h3>
                <p>
                  Penjelasan AI perlu ditinjau. Tidak ada jaminan kelulusan,
                  keuntungan investasi, atau hasil bisnis.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section" id="faq" aria-labelledby="faq-title">
          <div className="shell section faq-grid">
            <div>
              <p className="eyebrow">SEBELUM MELANGKAH</p>
              <h2 id="faq-title">
                Pertanyaan yang
                <br />
                mungkin Anda punya.
              </h2>
              <p>
                Kejelasan sejak awal,
                <br />
                agar ekspektasi tetap tepat.
              </p>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.id} id={`faq-${faq.id}`}>
                  <summary>
                    {faq.question}
                    <Icon name="plus" />
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          className="shell closing-wrap"
          id="mulai"
          aria-labelledby="closing-title"
        >
          <div className="closing">
            <span className="closing-spark" aria-hidden="true">
              ✳
            </span>
            <p className="eyebrow">LANGKAH KECIL, ARAH YANG JELAS</p>
            <h2 id="closing-title">
              Kebutuhan Anda.
              <br />
              Titik awal kami.
            </h2>
            <p>
              Temukan produk yang relevan dan pahami kesiapannya.
              <br />
              Akses demo dan kanal kontak resmi sedang disiapkan.
            </p>
            <Link className="button button-white" href="/products">
              Pilih produk yang sesuai <Icon name="arrow" />
            </Link>
            <span className="closing-note">
              Belum ada pendaftaran atau pembayaran.
            </span>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
