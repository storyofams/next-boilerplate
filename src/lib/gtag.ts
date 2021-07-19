declare interface GtagWindow extends Window {
  gtag: any;
}
declare const window: GtagWindow;

export const initGtag = () => {
  const w = window;
  const d = document;
  const l = 'dataLayer';
  w[l] = w[l] || [];
  w[l].push({
    js: new Date().getTime(),
    config: process.env.NEXT_PUBLIC_GTM,
  });

  // add gtm script
  var f = d.getElementsByTagName('script')[0],
    j = d.createElement('script'),
    dl = l !== 'dataLayer' ? '&l=' + l : '';
  j.async = true;
  j.src = `https://www.googletagmanager.com/gtm.js?id=${process.env.NEXT_PUBLIC_GTM}${dl}`;
  f.parentNode.appendChild(j);

  // add innerhtml script
  var s = d.createElement('script');
  s.innerHTML = `
          window.dataLayer = [];

          function gtag(event){dataLayer.push(event);}
          gtag({ 'gtm.start': new Date().getTime(), event:'gtm.js' });
        `;
  f.parentNode.appendChild(s);

  //  add noscript iframe in body
  var n = d.createElement('noscript');
  var i = d.createElement('iframe');
  i.title = 'tag';
  i.src = `https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM}`;
  i.height = '0';
  i.width = '0';
  i.style.display = 'none';
  i.style.visibility = 'hidden';
  n.appendChild(i);
  document.body.appendChild(n);
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  window.gtag('config', process.env.NEXT_PUBLIC_GTM, {
    page_path: url,
  });
};

export const track = (data: any) => {
  window.gtag(data);
};
