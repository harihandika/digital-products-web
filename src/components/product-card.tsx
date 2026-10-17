import { products } from "@/content/products";
import { Icon } from "@/components/icon";
import Link from "next/link";

export function ProductCard({
  product,
}: {
  product: (typeof products)[number];
}) {
  return (
    <article
      id={product.id}
      className={`product-card tone-${product.color}`}
      aria-labelledby={`${product.id}-title`}
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
      <p className="eyebrow product-category">{product.category}</p>
      <h3 id={`${product.id}-title`}>{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <ul className="feature-list">
        {product.features.map((feature) => (
          <li key={feature}>
            <Icon name="check" />
            {feature}
          </li>
        ))}
      </ul>
      <div className="product-bottom">
        <p className="readiness">{product.readiness}</p>
        <Link
          className="product-detail-link"
          href={`/products/${product.id}`}
          aria-label={`Lihat detail ${product.name}`}
        >
          Lihat detail produk <Icon name="arrow" />
        </Link>
        <details className="product-details">
          <summary>
            Lihat persiapan akses <Icon name="arrow" />
          </summary>
          <p>{product.next}</p>
        </details>
      </div>
    </article>
  );
}
