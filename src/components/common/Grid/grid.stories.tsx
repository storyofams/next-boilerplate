import React from 'react';
import { Box } from 'rebass/styled-components';

import { Grid } from '~/components';

export default {
  component: Grid,
  title: 'Grid',
};

export const Basic = () => (
  <Box p={5}>
    <h1>
      Grid is a layout utility that adds space above and on the side of items in
      it which in turn creates a grid.
    </h1>
    <Grid rowSize={3} rowGap={3} columnGap={3} mt={4}>
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
          bg="secondary400"
          sx={{ borderRadius: 'xs' }}
        />
      </Box>
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
          bg="secondary400"
          sx={{ borderRadius: 'xs' }}
        />
      </Box>

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
          bg="secondary400"
          sx={{ borderRadius: 'xs' }}
        />
      </Box>
    </Grid>
  </Box>
);

export const Responsive = () => (
  <Box p={5}>
    <Grid rowSize={[1, 2, 3]} rowGap={[1, 1, 3]} columnGap={[1, 1, 3]}>
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
          bg="secondary400"
          sx={{ borderRadius: 'xs' }}
        />
      </Box>
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
          bg="secondary400"
          sx={{ borderRadius: 'xs' }}
        />
      </Box>
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
          bg="secondary400"
          sx={{ borderRadius: 'xs' }}
        />
      </Box>
    </Grid>
  </Box>
);
