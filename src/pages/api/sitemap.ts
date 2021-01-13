import {
  sitemapHandler,
  SitemapHandlerDataFetcher,
} from '@storyofams/react-helpers';

/**
 * Also make sure to implement the change in next.config.js for the sitemap redirect.
 */

const fetchMySitemapData: SitemapHandlerDataFetcher = async () => {
  const res = (await fetch('/myapi').then((res) => res.json())) as any[];
  return res.map((item) => ({
    lastmod: new Date(item.publishedAt).toISOString(),
    img: item.imageSrc,
    url: item.href,
  }));
};

export default sitemapHandler(fetchMySitemapData, { cacheMaxAge: 3600 });
