declare interface GtagWindow extends Window {
  gtag: any;
}
declare const window: GtagWindow;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  window.gtag('config', process.env.NEXT_PUBLIC_GTM, {
    page_path: url,
  });
};

export const track = (data: any) => {
  try {
    window.gtag(data);
  } catch (e) {}
};
