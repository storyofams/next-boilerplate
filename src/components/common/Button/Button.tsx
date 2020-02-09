import styled from 'styled-components'
import {ButtonBase} from './components/ButtonBase'
import {Icon} from '@components'

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// All ButtonBase takes care of all the default stuff
export const PrimaryButton = styled(ButtonBase)`
  background: #38b2ac;
  font-weight: 500;
  box-shadow: ${p => p.theme.shadows.sm};
  &:hover:enabled {
    background: #319795;
  }
`
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const SecondaryButton = styled(ButtonBase).attrs({
  baseColor: 'white',
})`
  font-size: 14px;
  border-radius: 4px;
  color: #797584;
  border: 1px solid #d4d3d8;
  padding: 11px 15px;
  box-shadow: 0px 1px 2px rgba(99, 95, 111, 0.2);
  &:hover:enabled {
    border: 1px solid ${p => p.theme.colors.warning500};
    background: ${p => p.theme.colors.warning100};
    color: ${p => p.theme.colors.grey700};
  }
`
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const UnderlineButtonStyles = styled(ButtonBase)`
  background: transparent;
  font-weight: 600;
  font-size: 14px;
  border-radius: 0px;
  color: #111;
  border-bottom: 3px solid ${p => p.theme.colors.warning500};
  padding: 8px 0px;
  .arrow {
    transition: transform 0.2s;
  }
  &:hover:enabled {
    border-color: ${p => p.theme.colors.yellow600};
    .arrow {
      transform: translate(3px);
    }
  }
`

export const UnderlineButton: React.FC = ({children, ...props}) => {
  return (
    <UnderlineButtonStyles {...props}>
      {children}
      <Icon icon="arrow" className="arrow" />
    </UnderlineButtonStyles>
  )
}
