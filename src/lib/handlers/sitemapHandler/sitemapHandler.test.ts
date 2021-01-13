import { createMocks } from 'node-mocks-http';
import { sitemapHandler } from '~/lib/handlers';

describe('[handlers] sitemapHandler', () => {
  it('should return a sitemap', async () => {
    const { req, res } = createMocks();
    const lastmod = new Date().toISOString();

    await sitemapHandler(async () => [{ url: 'http://test.com', lastmod }], {
      cacheMaxAge: 60,
    })(req as any, res as any);

    expect(res._getStatusCode()).toBe(200);
    expect(res._getHeaders()).toHaveProperty(
      'cache-control',
      's-maxage=60, stale-while-revalidate',
    );
    expect(res._getHeaders()).toHaveProperty('content-type', 'text/xml');
    expect(res._getData()).toContain('<loc>http://test.com/</loc>');
    expect(res._getData()).toContain(`<lastmod>${lastmod}</lastmod>`);
  });
});
