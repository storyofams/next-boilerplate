import React from 'react';
import { Box } from 'rebass/styled-components';

import { Grid } from '~/components';

export default {
  component: Grid,
  title: 'components/Grid',
};

export const Basic = (args) => (
  <Box>
    <h1>
      Grid is a layout utility that adds space above and on the side of items in
      it which in turn creates a grid.
    </h1>
    <Grid {...args}>
      <Box>
        <Box
          width="100%"
          height="40px"
          bg="secondary400"
          sx={{ borderRadius: 'xs' }}
        />
      </Box>
      <Box>
        <Box
          width="100%"
          height="40px"
          sx={{ borderRadius: 'xs' }}
          bg="secondary400"
        />
      </Box>
      <Box>
        <Box
          width="100%"
          height="40px"
          sx={{ borderRadius: 'xs' }}
          bg="secondary400"
        />
      </Box>
      <Box>
        <Box
          width="100%"
          height="40px"
          sx={{ borderRadius: 'xs' }}
          bg="secondary400"
        />
      </Box>

      <Box>
        <Box
          width="100%"
          height="40px"
          sx={{ borderRadius: 'xs' }}
          bg="secondary400"
        />
      </Box>
      <Box>
        <Box
          width="100%"
          height="40px"
          sx={{ borderRadius: 'xs' }}
          bg="secondary400"
        />
      </Box>
    </Grid>
  </Box>
);

Basic.args = {
  rowSize: 3,
  rowGap: 2,
  columnGap: 2,
  mt: 2,
};

Basic.argTypes = {
  rowSize: { control: { type: 'number', min: 0, step: 1 } },
  rowGap: { control: { type: 'number', min: 0, step: 1 } },
  columnGap: { control: { type: 'number', min: 0, step: 1 } },
};

export const Responsive = (args) => (
  <Box>
    <Grid {...args}>
      <Box>
        <Box
          width="100%"
          height="40px"
          sx={{ borderRadius: 'xs' }}
          bg="secondary400"
        />
      </Box>
      <Box>
        <Box
          width="100%"
          height="40px"
          sx={{ borderRadius: 'xs' }}
          bg="secondary400"
        />
      </Box>
      <Box>
        <Box
          width="100%"
          height="40px"
          sx={{ borderRadius: 'xs' }}
          bg="secondary400"
        />
      </Box>
      <Box>
        <Box
          width="100%"
          height="40px"
          sx={{ borderRadius: 'xs' }}
          bg="secondary400"
        />
      </Box>
      <Box>
        <Box
          width="100%"
          height="40px"
          sx={{ borderRadius: 'xs' }}
          bg="secondary400"
        />
      </Box>
      <Box>
        <Box
          width="100%"
          height="40px"
          sx={{ borderRadius: 'xs' }}
          bg="secondary400"
        />
      </Box>
    </Grid>
  </Box>
);

Responsive.args = {
  rowSize: [1, 2, 4],
  rowGap: [1, 1, 2],
  columnGap: [1, 1, 2],
};

Responsive.argTypes = {
  rowSize: { control: { type: 'text' } },
  rowGap: { control: { type: 'text' } },
  columnGap: { control: { type: 'text' } },
};
