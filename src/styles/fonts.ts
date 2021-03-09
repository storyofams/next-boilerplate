import FontFaceObserver from 'fontfaceobserver';

const Fonts = () => {
  const domainDisp = new FontFaceObserver('Domaine Disp');
  const inter = new FontFaceObserver('Inter');

  Promise.all([domainDisp.load(), inter.load()]).then(
    () => {
      console.info('Successfully loaded fonts');
      document.documentElement.classList.add('font-loaded');
    },
    () => {
      console.warn('Error while loading fonts');
    },
  );
};

export default Fonts;
