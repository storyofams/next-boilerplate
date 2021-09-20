import { useEffect } from 'react';

/**
 * Detect user agent and add `data-ios` attribute to document if iOS.
 */
export const UserAgent = () => {
  useEffect(() => {
    // Browser only
    if (typeof window !== 'undefined') {
      const ua = navigator?.userAgent?.toString();
      if (/(iPhone|iPad)/.test(ua)) {
        document.documentElement.setAttribute('data-ios', '');
      }
    }
  }, []);

  return null;
};
