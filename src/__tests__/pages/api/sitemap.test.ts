import { EventEmitter } from 'events';
import { createMocks } from 'node-mocks-http';
import sitemapHandler, { Sitemap } from '~pages/api/sitemap';

describe('[api] sitemap', () => {
  it('should return a sitemap', async (done) => {
    const { req, res } = createMocks(undefined, { eventEmitter: EventEmitter });
    const lastmod = new Date().toISOString();

    jest
      .spyOn<any, string>(Sitemap.prototype, 'fetchMySitemapData')
      .mockImplementation(() => [{ url: 'http://test.com', lastmod }]);

    await sitemapHandler(req as any, res as any);

    res.on('end', () => {
      expect(res._getStatusCode()).toBe(200);
      expect(res._getHeaders()).toHaveProperty(
        'cache-control',
        's-maxage=3600, stale-while-revalidate',
      );
      expect(res._getHeaders()).toHaveProperty('content-type', 'text/xml');
      expect(res._getData()).toContain('<loc>http://test.com/</loc>');
      expect(res._getData()).toContain(`<lastmod>${lastmod}</lastmod>`);
      done();
    });

    jest.restoreAllMocks();
  });

  it('should fail gracefully', async () => {
    const { req, res } = createMocks();

    jest
      .spyOn<any, string>(Sitemap.prototype, 'fetchMySitemapData')
      .mockImplementation(() => {
        throw new Error();
      });
    await sitemapHandler(req as any, res as any);

    expect(res._getStatusCode()).toBe(500);

    jest.restoreAllMocks();
  });
});
