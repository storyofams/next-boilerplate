import {DocsPage, DocsContainer} from '@storybook/addon-docs/blocks'

import ProviderDecorator from "./ProviderDecorator";
import { viewPorts } from './viewports';
import * as nextImage from 'next/image';
import "../public/static/fonts/stylesheet.css";
import { Box } from 'rebass/styled-components';

export const decorators = [ProviderDecorator]

export const parameters = {
  viewPort: {
    viewports: viewPorts
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  options: {
    storySort: {
        method: 'alphabetical',
        order: ['intro', 'components'],
    },
  },
};


Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => {
    return <Box {...props}><img sx={props} {...props} /></Box>;
  },
});
