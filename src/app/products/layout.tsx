import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header home={false} />
      <main id="konten" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  );
}
