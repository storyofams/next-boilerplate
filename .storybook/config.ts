import { configure, addDecorator } from '@storybook/react';
import ProviderDecorator from './ProviderDecorator';
import '../public/static/fonts/stylesheet.css';
// automatically import all files ending in *.stories.tsx

addDecorator(ProviderDecorator);
configure(require.context('../src', true, /\.stories\.tsx?$/), module);
