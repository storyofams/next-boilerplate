import React from 'react';
import { FormikHandlers } from 'formik';
import { pick, omit } from '@styled-system/props';
import { ISystem } from '~/lib';
import { StatusMessage, Flex, Text, status, Box } from '~/components';
import StyledCheckbox from './components/StyledCheckbox';
import { useId } from '~/hooks';

interface ICheckbox extends ISystem {
  checked?: boolean;
  onChange?: FormikHandlers['handleChange'];
  statusMessage?: string;
  label?: string;
  status?: status;
  // html props
  disabled?: boolean;
  id?: string;
}

const Checkbox: React.FC<ICheckbox> = ({
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
