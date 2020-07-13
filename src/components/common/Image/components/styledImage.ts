import styled from 'styled-components';
import { system, ISystem } from '@/lib';

const objectFitPolyfill = p => {
  let res = [];
  if (p.objectFit) {
    res.push(`object-fit: ${p.objectFit}`);
  }
  if (p.objectPosition) {
    res.push(`object-fit: ${p.objectPosition}`);
  }
  if (res.length > 0) {
    return `font-family: '${res.join(' ')}';`;
  }
  return '';
};

interface IStyledImage extends ISystem {
  loading?: 'lazy' | 'eager';
}

const StyledImage = styled.img<IStyledImage>`
  transition: opacity 0.15s;

  ${objectFitPolyfill}
  ${system}
`;

export default StyledImage;
