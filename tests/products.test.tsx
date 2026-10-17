import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ProductsPage from "@/app/products/page";
import { ProductDetail } from "@/components/product-detail";
import { products } from "@/content/products";
import { Header } from "@/components/header";

describe("Katalog dan detail Hari 05", () => {
  it("katalog menyajikan tiga produk, status dan tautan detail yang berbeda", () => {
    render(<ProductsPage />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Kenali pilihannya.",
    );
    expect(screen.getAllByRole("article")).toHaveLength(3);
    for (const product of products) {
      const card = screen.getByRole("article", { name: product.name });
      expect(within(card).getByText(product.status)).toBeVisible();
      expect(
        within(card).getByRole("link", {
          name: `Lihat detail ${product.name}`,
        }),
      ).toHaveAttribute("href", `/products/${product.id}`);
    }
  });

  it.each(products)(
    "detail $name membatasi akses dan menyediakan CTA yang nyata",
    (product) => {
      const { container } = render(<ProductDetail product={product} />);
      expect(
        screen.getByRole("heading", { level: 1, name: product.name }),
      ).toBeVisible();
      expect(screen.getByText(product.readiness)).toBeVisible();
      expect(
        screen.getByRole("heading", { name: "Akses publik belum dibuka." }),
      ).toBeVisible();
      expect(
        screen.getByRole("link", { name: "Lihat kesiapan akses" }),
      ).toHaveAttribute("href", "#akses");
      expect(container.querySelector("#akses")).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: "Lihat produk lain" }),
      ).toHaveAttribute("href", "/products");
      const related = screen.getByRole("navigation", {
        name: "Produk lainnya",
      });
      expect(within(related).getAllByRole("link")).toHaveLength(2);
      expect(
        within(related).queryByRole("link", { name: product.name }),
      ).not.toBeInTheDocument();
      expect(container.querySelector("form, input")).not.toBeInTheDocument();
    },
  );

  it("Cerdas AI menyebut scope sebagai rencana, tanpa klaim kategori ujian tersedia", () => {
    render(
      <ProductDetail
        product={products.find((product) => product.id === "cerdas-ai")!}
      />,
    );
    expect(
      screen.getByText(
        /Seluruh lingkup berikut masih merupakan rencana, bukan fitur yang sudah tersedia/,
      ),
    ).toBeVisible();
    expect(
      screen.getByText(/belum mengklaim dukungan UTBK\/SNBT maupun CPNS/),
    ).toBeVisible();
    expect(screen.getByText(/Tidak menjamin kelulusan/)).toBeVisible();
  });

  it("Find People berfokus pada relay manual yang sah", () => {
    render(<ProductDetail product={products[0]} />);
    expect(screen.getByText(/Bukan alat pencarian identitas/)).toBeVisible();
    expect(
      screen.getByText(/Bukan chatbot AI yang menjawab otomatis/),
    ).toBeVisible();
  });

  it("Stock Analyzer tidak menjanjikan keuntungan, real-time, atau hak data tervalidasi", () => {
    render(<ProductDetail product={products[2]} />);
    expect(screen.getByText(/Tidak menjamin keuntungan/)).toBeVisible();
    expect(screen.getByText(/Tidak mengklaim data real-time/)).toBeVisible();
    expect(
      screen.getByText(
        /Hak penggunaan dan distribusi data serta akurasi indikator belum selesai/,
      ),
    ).toBeVisible();
  });

  it("navigasi halaman produk kembali ke homepage dengan anchor yang benar", () => {
    render(<Header home={false} />);
    expect(
      screen.getByRole("link", { name: "Digital Products — beranda" }),
    ).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: "Untuk siapa" })).toHaveAttribute(
      "href",
      "/#kegunaan",
    );
    expect(screen.getByRole("link", { name: "FAQ" })).toHaveAttribute(
      "href",
      "/#faq",
    );
    expect(screen.getByRole("link", { name: "Produk" })).toHaveAttribute(
      "aria-current",
      "true",
    );
  });
});
