import Alert from '@reach/alert';
import css from '@styled-system/css';
import styled from 'styled-components';

import { SystemProps, system } from '~/lib';

type status = 'default' | 'success' | 'warning' | 'error';

interface StatusMessageProps extends SystemProps {
  status: status | Boolean;
  type?: 'polite' | 'assertive';
}
// this component alerts screen readers when its rendered.
// should be used together with a formfield + formik

const StatusMessage = styled(Alert).attrs((p) => ({
  type: p.type || 'polite',
}))<StatusMessageProps>(
  (p) =>
    css({
      color: p.status !== 'default' && p.status ? `${p.status}500` : `grey900`,
      fontSize: 2,
      fontWeight: 'medium',
      mt: '2px',
    })(p),
  system,
);

export default StatusMessage;
