import React, { FC, useRef, useEffect } from 'react';

import { SystemProps } from '~/lib';

import StyledImage from './components/styledImage';

export interface ImageProps extends SystemProps {
  objectFit?: 'cover' | 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  objectPosition?: string;
  loading?: 'lazy' | 'eager';
  src: string;
  placeholder?: string;
}

const hasNativeLazyLoadSupport =
  typeof HTMLImageElement !== `undefined` &&
  `loading` in HTMLImageElement.prototype &&
  false;

const cache = {};
function addToCache(src) {
  cache[src] = true;
}
function isInCache(src) {
  return cache[src];
}

function fetchImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = url;
    image.onload = resolve;
    image.onerror = reject;
  });
}

function loadImage(target) {
  const image = target.src ? target : target.querySelector('img');
  // eslint-disable-next-line prefer-destructuring
  const src = image.dataset.src;
  fetchImage(src).then(() => {
    addToCache(src);
    image.src = src;
  });
}

let io;

function getIO() {
  if (
    typeof io === `undefined` &&
    typeof window !== `undefined` &&
    window.IntersectionObserver
  ) {
    io = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            loadImage(entry.target);
            console.log('loaded');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: `200px` },
    );
  }

  return io;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const Img: FC<ImageProps> = ({
  objectFit = 'cover',
  objectPosition = 'center center',
  loading = 'lazy',
  placeholder,
  src,
  ...rest
}) => {
  const imgref = useRef();

  useEffect(() => {
    if (!hasNativeLazyLoadSupport) {
      const observer = getIO();

      if (observer) {
        const target = imgref.current;
        if (target) {
          observer.observe(target);
          return () => {
            observer.unobserve(target);
          };
        }
      }
    } else {
      loadImage(imgref.current);
    }
  }, []);

  const props = { objectFit, objectPosition, ...rest };

  const hasIO = typeof window !== `undefined` && window.IntersectionObserver;

  if (loading === 'eager' || !hasIO || isInCache(src)) {
    return <StyledImage src={src} {...props} />;
  }

  return (
    <StyledImage
      loading={loading}
      ref={imgref}
      src={placeholder || ''}
      data-src={src}
      {...props}
    />
  );
};

export default Img;
