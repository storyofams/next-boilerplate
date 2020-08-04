import styled from 'styled-components';
import { system, ISystem } from '~/lib';

const ButtonBase = styled.button<ISystem>`
  border-radius: ${p => p.theme.radii.sm};
  background: #fff;
  color: #fff;
  cursor: pointer;
  padding: 8px 12px;
  font-size: inherit;
  position: relative;
  text-align: center;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  user-select: none;

  vertical-align: bottom;

  transition: background 0.2s, box-shadow 0.15s, border-color 0.2s, color 0.2s;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &:active {
    box-shadow: none;
  }
  &[data-is-loading] {
    cursor: wait;
  }

  ${system}
`;

export default ButtonBase;
