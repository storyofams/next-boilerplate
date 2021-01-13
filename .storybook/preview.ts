import ProviderDecorator from "./ProviderDecorator";
import "../public/static/fonts/stylesheet.css";

export const decorators = [ProviderDecorator]

export const parameters = {
  options: {
    storySort: {
        method: 'alphabetical',
        order: ['components'],
    },
  },
};