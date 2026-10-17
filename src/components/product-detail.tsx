import Link from "next/link";
import { Icon } from "@/components/icon";
import { products } from "@/content/products";
import { productDetails } from "@/content/product-details";

export function ProductDetail({
  product,
}: {
  product: (typeof products)[number];
}) {
  const detail = productDetails[product.id];
  return (
    <>
      <section className={`detail-hero tone-${product.color}`}>
        <div className="shell">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Beranda</Link>
            <span aria-hidden="true">/</span>
            <Link href="/products">Produk</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{product.name}</span>
          </nav>
          <div className="detail-hero-grid">
            <div>
              <p className="eyebrow">{product.category}</p>
              <h1>{product.name}</h1>
              <p className="detail-headline">{detail.headline}</p>
              <p className="catalog-intro">{detail.introduction}</p>
              <div className="hero-actions">
                <Link className="button button-primary" href="#akses">
                  Lihat kesiapan akses <Icon name="arrow" />
                </Link>
                <Link className="text-link" href="/products">
                  Bandingkan produk <Icon name="arrow" />
                </Link>
              </div>
            </div>
            <aside
              className="readiness-panel"
              aria-labelledby="readiness-title"
            >
              <div className="product-card-top">
                <span className="product-icon">
                  <Icon name={product.icon} />
                </span>
                <span
                  className={`status ${product.status === "Beta" ? "status-beta" : "status-soon"}`}
                >
                  <span aria-hidden="true" />
                  {product.status}
                </span>
              </div>
              <h2 id="readiness-title">Kesiapan produk</h2>
              <p>{product.readiness}</p>
              <hr />
              <p className="readiness-caption">
                Belum ada pendaftaran, pembayaran, atau penawaran langganan
                aktif.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section
        className="shell section detail-scope"
        aria-labelledby="scope-title"
      >
        <div>
          <p className="eyebrow">UNTUK SIAPA?</p>
          <h2>Kebutuhan yang ingin dibantu.</h2>
          <p>{detail.audience}</p>
        </div>
        <div>
          <p className="eyebrow">
            {product.status === "Coming Soon"
              ? "RENCANA, BELUM TERSEDIA"
              : "DALAM PENGEMBANGAN"}
          </p>
          <h2 id="scope-title">{detail.scopeLabel}</h2>
          <p>{detail.scopeNote}</p>
          <ul className="feature-list">
            {product.features.map((feature) => (
              <li key={feature}>
                <Icon name="check" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="use-cases" aria-labelledby="workflow-title">
        <div className="shell section">
          <p className="eyebrow">GAMBARAN PENGGUNAAN</p>
          <h2 id="workflow-title">{detail.workflowLabel}</h2>
          <p className="workflow-note">
            Gambaran konsep, bukan demonstrasi layanan yang sudah dibuka untuk
            publik.
          </p>
          <ol className="workflow-grid">
            {detail.steps.map((step, index) => (
              <li key={step.title}>
                <span className="use-number">LANGKAH 0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="shell section detail-boundaries"
        aria-labelledby="limits-title"
      >
        <div>
          <p className="eyebrow">EKSPEKTASI YANG TEPAT</p>
          <h2 id="limits-title">Batasan yang perlu diketahui.</h2>
        </div>
        <ul>
          {detail.limitations.map((limit) => (
            <li key={limit}>{limit}</li>
          ))}
        </ul>
      </section>

      <section className="faq-section" aria-labelledby="product-faq-title">
        <div className="shell section faq-grid">
          <div>
            <p className="eyebrow">PERTANYAAN TENTANG PRODUK</p>
            <h2 id="product-faq-title">Sebelum melanjutkan.</h2>
          </div>
          <div className="faq-list">
            {detail.questions.map((question) => (
              <details key={question.question}>
                <summary>
                  {question.question}
                  <Icon name="plus" />
                </summary>
                <p>{question.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        id="akses"
        className="shell section"
        aria-labelledby="access-title"
      >
        <div className="access-panel">
          <div>
            <p className="eyebrow">KESIAPAN AKSES</p>
            <h2 id="access-title">Akses publik belum dibuka.</h2>
            <p>{product.next}</p>
            <p>
              Harga dan kanal kontak resmi belum ditetapkan. Tidak ada data yang
              perlu Anda kirim atau pembayaran yang perlu dilakukan saat ini.
            </p>
          </div>
          <div className="access-actions">
            <Link className="button button-primary" href="/products">
              Lihat produk lain <Icon name="arrow" />
            </Link>
            <Link className="text-link" href="/#faq">
              Baca FAQ akses & biaya <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </section>

      <nav className="shell related-products" aria-label="Produk lainnya">
        <span>Jelajahi juga</span>
        {products
          .filter((other) => other.id !== product.id)
          .map((other) => (
            <Link href={`/products/${other.id}`} key={other.id}>
              {other.name}
              <Icon name="arrow" />
            </Link>
          ))}
      </nav>
    </>
  );
}
