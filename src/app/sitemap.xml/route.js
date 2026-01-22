export async function GET() {
  const baseUrl = "https://www.pranaymasulkar.com";

  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
      <loc>${baseUrl}/about</loc>
    </sitemap>
    <sitemap>
      <loc>${baseUrl}/works</loc>
    </sitemap>
    <sitemap>
      <loc>${baseUrl}/contact</loc>
    </sitemap>
  </sitemapindex>`;

  return new Response(sitemapIndex, {
    headers: { "Content-Type": "application/xml" },
  });
}
