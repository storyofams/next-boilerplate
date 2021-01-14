import React from 'react';
import { Box } from 'rebass/styled-components';

import { StatusMessage } from '~/components';

export default {
  component: StatusMessage,
  title: 'StatusMessage',
};

export const Basic = () => (
  <Box p={4} maxWidth="270px" sx={{ flexDirection: 'column' }}>
    <StatusMessage status="default">
      Lorem, ipsum dolor. (default)
    </StatusMessage>
    <StatusMessage status="success">
      Lorem, ipsum dolor. (success)
    </StatusMessage>
    <StatusMessage status="warning">
      Lorem, ipsum dolor. (warning)
    </StatusMessage>
    <StatusMessage status="error">Lorem, ipsum dolor. (error)</StatusMessage>
  </Box>
);
