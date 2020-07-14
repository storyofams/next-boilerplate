import { useEffect, useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';

const useIsMobile = () => {
  const theme = useContext(ThemeContext);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () =>
      setIsMobile(
        window.innerWidth < Number(theme.breakpoints.md.replace(/\D/g, '')),
      );

    checkIfMobile();

    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, [theme.breakpoints.md]);

  return isMobile;
};

export default useIsMobile;
