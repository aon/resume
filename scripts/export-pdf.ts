import { mkdir, readFile } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join } from "node:path";
import puppeteer from "puppeteer";

const VARIANTS: Record<string, string> = {
  dev: "Agustin_Aon_Resume",
  education: "Agustin_Aon_CV_Docencia",
};

const CONTENT_TYPES: Record<string, string> = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".svg": "image/svg+xml",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

const server = createServer(async (req, res) => {
  const path = new URL(req.url ?? "/", "http://localhost").pathname;
  for (const candidate of [path, `${path}/index.html`, `${path}index.html`]) {
    try {
      const data = await readFile(join("dist", candidate));
      res.writeHead(200, { "content-type": CONTENT_TYPES[extname(candidate)] ?? "application/octet-stream" });
      res.end(data);
      return;
    } catch {
      // try next candidate
    }
  }
  res.writeHead(404);
  res.end("Not found");
});
await new Promise<void>((resolve) => server.listen(0, resolve));
const address = server.address();
if (address === null || typeof address === "string") throw new Error("Failed to bind server");

await mkdir("output", { recursive: true });
const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
try {
  for (const [variant, fileName] of Object.entries(VARIANTS)) {
    const page = await browser.newPage();
    await page.goto(`http://localhost:${address.port}/${variant}/`, { waitUntil: "networkidle0" });
    await page.pdf({
      path: `output/${fileName}.pdf`,
      preferCSSPageSize: true,
      printBackground: true,
    });
    await page.close();
    console.log(`Generated output/${fileName}.pdf`);
  }
} finally {
  await browser.close();
  server.close();
}
