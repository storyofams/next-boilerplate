import FontFaceObserver from 'fontfaceobserver';

const Fonts = () => {
  const domainDisp = new FontFaceObserver('Domaine Disp');
  const inter = new FontFaceObserver('Inter');

  Promise.all([domainDisp.load(), inter.load()]).then(() => {
    document.documentElement.classList.add('font-loaded');
  });
};

export default Fonts;
