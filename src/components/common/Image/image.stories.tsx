import React from 'react';
import Image from './Image';

export default {
  component: Image,
  title: 'Image',
};

export const normal = () => (
  <>
    size200
    <Image size="200px" src="http://placekitten.com/200/300" />
    objectfit contain
    <Image
      size="200px"
      objectFit="contain"
      src="http://placekitten.com/200/300"
    />
    objectposition 0 0
    <Image
      size="200px"
      objectPosition="0% 0%"
      src="http://placekitten.com/200/300"
    />
    auto height
    <Image width="200px" src="http://placekitten.com/200/300" />
    auto width
    <Image height="200px" src="http://placekitten.com/200/300" />
  </>
);

//@ts-ginore
const array = [...Object(Array(300)).keys()];

export const lazyLoadStressTest = () => (
  <>
    The dimensions must be specified for this to work. So either height+width,
    flex-basis etc.. or a placeholder with the same dimensions
    {array.map((i) => (
      <Image
        key={i}
        size="200px"
        src="https://res.cloudinary.com/demo/image/upload/w_1500/woman.png"
        placeholder="https://res.cloudinary.com/demo/image/upload/w_20/woman.png"
      />
    ))}
  </>
);
