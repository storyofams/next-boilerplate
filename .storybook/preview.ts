import {DocsPage, DocsContainer} from '@storybook/addon-docs/blocks'

import ProviderDecorator from "./ProviderDecorator";
import { viewPorts } from './viewports';
import "../public/static/fonts/stylesheet.css";

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
        order: ['components'],
    },
  },
};
