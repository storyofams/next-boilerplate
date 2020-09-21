import Alert from '@reach/alert';
import styled from 'styled-components';
import css from '@styled-system/css';

import { ISystem, system } from '~/lib';

type status = 'default' | 'success' | 'warning' | 'error';

interface IStatusMessage extends ISystem {
  status: status | Boolean;
  type?: 'polite' | 'assertive';
}
// this component alerts screen readers when its rendered.
// should be used together with a formfield + formik

const StatusMessage = styled(Alert).attrs(p => ({
  type: p.type || 'polite',
}))<IStatusMessage>(
  p =>
    css({
      color: p.status !== 'default' && p.status ? `${p.status}500` : `grey900`,
      fontSize: 2,
      fontWeight: 'medium',
      mt: '2px',
    })(p),
  system,
);

export default StatusMessage;
