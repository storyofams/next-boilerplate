import { useState, useEffect } from 'react';

const useDetectKeyboard = (className?: string): boolean => {
  const [isTabbed, setIsTabbed] = useState(false);

  useEffect(() => {
    function handleFirstTab(e: KeyboardEvent) {
      if (e.keyCode === 9) {
        setIsTabbed(true);
        document.body.classList.add(className || 'user-is-tabbing');
        window.removeEventListener('keydown', handleFirstTab);
      }
    }
    function handleMouseMove() {
      setIsTabbed(false);
      document.body.classList.remove(className || 'user-is-tabbing');
      window.removeEventListener('mousemove', handleMouseMove);
    }

    window.addEventListener('keydown', handleFirstTab);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('keydown', handleFirstTab);
      window.addEventListener('mousemove', handleMouseMove);
    };
  }, [className]);

  return isTabbed;
};

export default useDetectKeyboard;
