import { Box, SystemProps } from '@storyofams/react-ui';
import { pick, omit } from '@styled-system/props';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { HeightProps, WidthProps } from 'styled-system';

const getHighestValue = (value: any): number | string => {
  switch (typeof value) {
    case 'number':
      return value;
    case 'object':
      if (Array.isArray(value)) {
        return value
          .map(getHighestValue)
          .sort((a, b) => Number(b) - Number(a))[0];
      }
      return Object.values(value)
        .map(getHighestValue)
        .sort((a, b) => Number(b) - Number(a))[0];
    case 'string':
      if (value.includes('%')) {
        return value;
      }
      return parseInt(value);
  }
};

export type ImageProps = Omit<NextImageProps, 'layout' | 'width' | 'height'> &
  Omit<SystemProps, 'width' | 'height'> &
  (
    | {
        layout: 'fill';
        width?: WidthProps['width'];
        height?: HeightProps['height'];
      }
    | {
        width: WidthProps['width'];
        height: HeightProps['height'];
        layout?: 'fixed' | 'intrinsic' | 'responsive';
      }
  );

/**
 * @description Image component which uses Rebass as Next's Image component. When you use this component and you're not certain of the source
 * domain of the image (i.e. user input) use, make sure to use the `unoptimized` prop. Otherwise declare the domain of the image in the `next.config.js`
 */

export const Image = (props: ImageProps) => {
  const nextImageProps = omit(props) as Omit<
    NextImageProps,
    'width' | 'height'
  >;
  const imageProps = pick(props);

  if (props.layout === 'fill') {
    return (
      <Box {...imageProps} sx={{ position: 'relative' }}>
        {/** @ts-ignore **/}
        <NextImage layout="fill" {...nextImageProps} />
      </Box>
    );
  }

  return (
    <Box {...imageProps}>
      {/** @ts-ignore **/}
      <NextImage
        height={getHighestValue(props.width)}
        width={getHighestValue(props.width)}
        {...nextImageProps}
      />
    </Box>
  );
};
