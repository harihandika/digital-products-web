import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/product-detail";
import { products } from "@/content/products";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.id }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.id === slug);
  if (!product) notFound();
  const title = `${product.name} — Digital Products`;
  return {
    title,
    description: product.description,
    openGraph: {
      title,
      description: product.description,
      locale: "id_ID",
      type: "website",
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((item) => item.id === slug);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
