const req = (require as any).context(
  '!@svgr/webpack?{"icon":"true","svgo":"true"}!./library',
  false,
  /\.svg$/,
);

export default req;
