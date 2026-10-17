import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const productRoutes = [
  { path: "/products/find-people", name: "Find People", status: "Beta" },
  { path: "/products/cerdas-ai", name: "Cerdas AI", status: "Coming Soon" },
  {
    path: "/products/stock-analyzer",
    name: "AI Stock Analyzer",
    status: "Beta",
  },
];
const routes = [
  { path: "/products", name: "Katalog Produk", status: "" },
  ...productRoutes,
];

for (const route of routes) {
  test(`${route.path}: HTTP, metadata, navigasi, privasi, aksesibilitas dan responsive`, async ({
    page,
  }, testInfo) => {
    const errors: string[] = [];
    const external: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("request", (request) => {
      const url = new URL(request.url());
      if (url.protocol.startsWith("http") && url.hostname !== "127.0.0.1")
        external.push(url.hostname);
    });
    const response = await page.goto(route.path);
    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle(`${route.name} — Digital Products`);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      "content",
      /noindex.*nofollow/,
    );
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      "content",
      `${route.name} — Digital Products`,
    );
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page.locator("html")).toHaveAttribute("lang", "id");
    if (route.status)
      await expect(page.getByText(route.status, { exact: true })).toBeVisible();
    await page.keyboard.press("Tab");
    await expect(
      page.getByRole("link", { name: "Lewati ke konten utama" }),
    ).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.locator("main")).toBeFocused();
    await page
      .locator("details")
      .evaluateAll((elements) =>
        elements.forEach((element) => element.setAttribute("open", "")),
      );
    const accessibility = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "best-practice"])
      .analyze();
    expect(accessibility.violations).toEqual([]);

    // Check actual HTTP destinations and fragment IDs, not only href spelling.
    const links = await page
      .locator("a[href]")
      .evaluateAll((elements) =>
        elements.map((element) => (element as HTMLAnchorElement).href),
      );
    const htmlByPath = new Map<string, string>();
    for (const href of new Set(links)) {
      const url = new URL(href);
      expect(url.origin).toBe(new URL(page.url()).origin);
      if (!htmlByPath.has(url.pathname)) {
        const target = await page.request.get(url.pathname);
        expect(target.status(), href).toBe(200);
        htmlByPath.set(url.pathname, await target.text());
      }
      if (url.hash) {
        const exists = await page.evaluate(
          ({ html, hash }) =>
            Boolean(
              new DOMParser()
                .parseFromString(html, "text/html")
                .getElementById(decodeURIComponent(hash.slice(1))),
            ),
          { html: htmlByPath.get(url.pathname)!, hash: url.hash },
        );
        expect(exists, href).toBe(true);
      }
    }
    expect(external).toEqual([]);
    expect(await page.context().cookies()).toEqual([]);
    await expect(page.locator("form, input")).toHaveCount(0);
    expect(errors).toEqual([]);
    await page.evaluate(() => {
      if (document.activeElement instanceof HTMLElement)
        document.activeElement.blur();
      window.scrollTo({ top: 0, behavior: "instant" });
    });
    await page.screenshot({
      path: testInfo.outputPath("page.png"),
      fullPage: true,
      animations: "disabled",
    });
    await page.setViewportSize({ width: 320, height: 740 });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
  });
}

for (const product of productRoutes) {
  test(`journey beranda → katalog → ${product.name} → kesiapan → katalog`, async ({
    page,
  }, testInfo) => {
    await page.goto("/");
    if (testInfo.project.name === "mobile")
      await page.getByRole("button", { name: "Buka menu" }).click();
    await page
      .getByRole("navigation", { name: "Navigasi utama" })
      .getByRole("link", { name: "Produk", exact: true })
      .click();
    await expect(page).toHaveURL(/\/products$/);
    await page
      .getByRole("link", { name: `Lihat detail ${product.name}`, exact: true })
      .click();
    await expect(page).toHaveURL(new RegExp(`${product.path}$`));
    await expect(
      page.getByRole("heading", { level: 1, name: product.name }),
    ).toBeVisible();
    await page.getByRole("link", { name: "Lihat kesiapan akses" }).click();
    await expect(page).toHaveURL(/#akses$/);
    await expect(
      page.getByRole("heading", { name: "Akses publik belum dibuka." }),
    ).toBeInViewport();
    if (testInfo.project.name === "mobile") {
      await page.getByRole("button", { name: "Buka menu" }).click();
      await page
        .getByRole("navigation", { name: "Navigasi utama" })
        .getByRole("link", { name: "FAQ", exact: true })
        .click();
      await expect(page).toHaveURL(/\/#faq$/);
      await expect(
        page.getByRole("heading", {
          name: "Pertanyaan yang mungkin Anda punya.",
        }),
      ).toBeInViewport();
      await page.goBack();
      await expect(page).toHaveURL(new RegExp(`${product.path}#akses$`));
      await expect(
        page.getByRole("heading", { level: 1, name: product.name }),
      ).toBeVisible();
    }
    await page.getByRole("link", { name: "Lihat produk lain" }).click();
    await expect(page).toHaveURL(/\/products$/);
    await page
      .getByRole("navigation", { name: "Breadcrumb" })
      .getByRole("link", { name: "Beranda" })
      .click();
    await expect(page).toHaveURL(/\/$/);
  });
}

test("slug tidak dikenal menghasilkan 404, bukan halaman produk atau klaim baru", async ({
  page,
}) => {
  const response = await page.goto("/products/tidak-ada");
  expect(response?.status()).toBe(404);
  await expect(
    page.getByRole("link", { name: "Kembali ke katalog" }),
  ).toBeVisible();
});
