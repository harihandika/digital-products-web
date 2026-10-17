import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";
import { products } from "@/content/products";

describe("Homepage Hari 04", () => {
  it("menjelaskan manfaat dan hanya menampilkan tiga produk komersial dengan statusnya", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Software kecil.Dampak besar.",
    );
    expect(screen.getAllByRole("article")).toHaveLength(3);
    for (const product of products) {
      const card = screen.getByRole("article", { name: product.name });
      expect(within(card).getByText(product.status)).toBeVisible();
      expect(within(card).getByText(product.readiness)).toBeVisible();
    }
    expect(
      screen.queryByText(/ProcureFlow|Website_Portofolio/),
    ).not.toBeInTheDocument();
  });

  it("membuka persiapan akses produk tanpa menjanjikan akses publik", async () => {
    const user = userEvent.setup();
    render(<Home />);
    const card = screen.getByRole("article", { name: "Find People" });
    const summary = within(card).getByText("Lihat persiapan akses");
    expect(summary.closest("details")).not.toHaveAttribute("open");
    await user.click(summary);
    expect(summary.closest("details")).toHaveAttribute("open");
    expect(within(card).getByText(/Sebelum pilot:/)).toBeVisible();
  });

  it("membuka dan menutup menu serta memperbarui atribut aksesibilitas", async () => {
    const user = userEvent.setup();
    render(<Home />);
    const button = screen.getByRole("button", { name: "Buka menu" });
    expect(button).toHaveAttribute("aria-expanded", "false");
    await user.click(button);
    expect(screen.getByRole("button", { name: "Tutup menu" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    await user.click(screen.getByRole("link", { name: "Untuk siapa" }));
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("menutup menu dengan Escape dan mengembalikan fokus ke tombol", async () => {
    const user = userEvent.setup();
    render(<Home />);
    await user.click(screen.getByRole("button", { name: "Buka menu" }));
    screen.getByRole("link", { name: "Untuk siapa" }).focus();
    await user.keyboard("{Escape}");
    expect(screen.getByRole("button", { name: "Buka menu" })).toHaveFocus();
  });

  it("menjelaskan kontak, privasi, biaya, dan batasan di FAQ", async () => {
    const user = userEvent.setup();
    render(<Home />);
    const demo = screen.getByText(
      "Bagaimana cara meminta demo atau akses awal?",
    );
    await user.click(demo);
    expect(demo.closest("details")).toHaveAttribute("open");
    expect(
      screen.getByText(/Kanal kontak resmi akan ditambahkan/),
    ).toBeVisible();
    expect(screen.getByText(/Harga belum ditetapkan/)).toBeInTheDocument();
    expect(
      screen.getByText(/Hosting tetap dapat mencatat log teknis/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/bukan nasihat investasi atau jaminan keuntungan/),
    ).toBeInTheDocument();
    expect(screen.queryByRole("form")).not.toBeInTheDocument();
  });

  it("setiap CTA mengarah ke bagian yang ada, tanpa checkout atau tautan kosong", () => {
    const { container } = render(<Home />);
    for (const link of screen.getAllByRole("link")) {
      const href = link.getAttribute("href")!;
      expect(href).toMatch(/^#[a-z-]+$/);
      expect(container.querySelector(href)).toBeInTheDocument();
    }
  });
});
