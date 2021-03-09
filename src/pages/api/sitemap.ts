import {
  createHandler,
  Get,
  Header,
  SetHeader,
} from '@storyofams/next-api-decorators';
import { SitemapStream } from 'sitemap';

// Also make sure to implement the change in next.config.js for the sitemap redirect.

export class Sitemap {
  private async fetchMySitemapData() {
    const res = (await fetch('http://localhost:3000/api/test').then((res) =>
      res.json(),
    )) as any[];
    return res.map((item) => ({
      lastmod: new Date(item.publishedAt).toISOString(),
      img: item.imageSrc,
      url: item.href,
    }));
  }

  @Get()
  @SetHeader('Content-Type', 'text/xml')
  @SetHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate')
  public async sitemap(@Header('host') host: string) {
    const data = await this.fetchMySitemapData();
    const smStream = new SitemapStream({
      hostname: 'https://' + host,
    });

    for (const smItem of data) {
      smStream.write(smItem);
    }

    smStream.end();

    return smStream;
  }
}

export default createHandler(Sitemap);
