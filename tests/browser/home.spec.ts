import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("homepage responsif, keyboard, FAQ, dan CTA", async ({
  page,
}, testInfo) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page).toHaveTitle(/Digital Products/);
  await expect(page.locator("html")).toHaveAttribute("lang", "id");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByRole("article")).toHaveCount(3);
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Lewati ke konten utama" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#konten$/);
  await expect(page.locator("main")).toBeFocused();
  if (testInfo.project.name === "mobile") {
    await page.getByRole("button", { name: "Buka menu" }).click();
    await expect(page.getByRole("navigation")).toBeVisible();
    await page.getByRole("link", { name: "Untuk siapa" }).click();
    await expect(
      page.getByRole("button", { name: "Buka menu" }),
    ).toHaveAttribute("aria-expanded", "false");
  }
  await page.getByRole("link", { name: "Temukan produk Anda" }).click();
  await expect(page).toHaveURL(/#produk$/);
  const faq = page.locator("#faq-demo");
  await faq.locator("summary").click();
  await expect(faq).toHaveAttribute("open", "");
  await expect(faq.locator("p")).toBeVisible();
  const firstProduct = page.getByRole("article", { name: "Find People" });
  await firstProduct.locator("summary").click();
  await expect(firstProduct.getByText(/Sebelum pilot:/)).toBeVisible();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  expect(errors).toEqual([]);
  await page.evaluate(() => {
    if (document.activeElement instanceof HTMLElement)
      document.activeElement.blur();
    window.scrollTo({ top: 0, behavior: "instant" });
  });
  await page.screenshot({
    path: testInfo.outputPath("homepage.png"),
    fullPage: true,
    animations: "disabled",
  });
});

test("tidak ada pelanggaran aksesibilitas otomatis pada halaman dan disclosure terbuka", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .locator("details")
    .evaluateAll((elements) =>
      elements.forEach((element) => element.setAttribute("open", "")),
    );
  const result = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "best-practice"])
    .analyze();
  expect(result.violations).toEqual([]);
});

test("tidak mengirim data ke pihak ketiga atau membuat cookie pemasaran", async ({
  page,
}) => {
  const externalRequests: string[] = [];
  page.on("request", (request) => {
    const url = new URL(request.url());
    if (url.protocol.startsWith("http") && url.hostname !== "127.0.0.1")
      externalRequests.push(url.hostname);
  });
  await page.goto("/");
  await page.getByRole("heading", { level: 1 }).waitFor();
  expect(externalRequests).toEqual([]);
  expect(await page.context().cookies()).toEqual([]);
  await expect(page.getByRole("textbox")).toHaveCount(0);
});

test("layar sempit 320px tidak memiliki overflow horizontal", async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 740 });
  await page.goto("/");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});
