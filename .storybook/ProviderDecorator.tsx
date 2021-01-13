import React from "react";

import { Providers } from "../src/components";
import CSSreset from "../src/styles/CSSreset";

const ProviderDecorator = (storyFn) => (
  <Providers>
    <CSSreset />
    {storyFn()}
  </Providers>
);

export default ProviderDecorator;
