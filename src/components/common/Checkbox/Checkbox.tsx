import React from 'react';
import { FormikHandlers } from 'formik';
import { pick, omit } from '@styled-system/props';

import { ISystem } from '~/lib';
import { useId } from '~/hooks';
import { Box, Flex, status, StatusMessage, Text } from '~/components';

import StyledCheckbox from './components/StyledCheckbox';

interface CheckboxProps extends ISystem {
  checked?: boolean;
  onChange?: FormikHandlers['handleChange'];
  statusMessage?: string;
  label?: string;
  status?: status;
  // html props
  disabled?: boolean;
  id?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  status,
  statusMessage,
  id: givenId,
  ...props
}) => {
  const autoId = useId();

  const id = givenId || `checkbox-${autoId}`;

  return (
    <Box {...pick(props)}>
      <Flex alignItems="center">
        <StyledCheckbox id={id} {...omit(props)} />
        {!!label && (
          <Text ml={2} htmlFor={id} as="label">
            {label}
          </Text>
        )}
      </Flex>
      {!!statusMessage && (
        <StatusMessage status={status}>{statusMessage}</StatusMessage>
      )}
    </Box>
  );
};

export default Checkbox;
