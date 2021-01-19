const baseStyles = {
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: 'inherit',
  fontWeight: 'regular',
  borderRadius: 'full',
  userSelect: 'none',
  cursor: 'pointer',
  transition:
    'background-color 0.18s, box-shadow 0.18s, border-color 0.18s, color 0.18s',
  '&:disabled': { cursor: 'not-allowed', opacity: 0.5 },
  '&:active': { boxShadow: 'none' },
  '&[data-is-loading]': { cursor: 'wait' },
};

const buttonTheme = {
  buttons: {
    primary: {
      px: 5,
      py: '6/4',
      color: 'grey900',
      bg: 'primary500',
      borderColor: 'primary500',
      boxShadow: 'sm',
      '&:hover, &:active': {
        color: 'white',
        bg: 'grey900',
        borderColor: 'grey900',
      },
      ...baseStyles,
    },
    outline: {
      px: 5,
      py: '6/4',
      color: 'grey900',
      bg: 'transparent',
      border: '1px',
      borderColor: 'grey900',
      boxShadow: 'sm',
      '&:hover, &:active': {
        color: 'white',
        bg: 'grey900',
      },
      ...baseStyles,
    },
    secondary: {
      px: 5,
      py: '6/4',
      color: 'white',
      bg: 'secondary500',
      borderColor: 'secondary500',
      boxShadow: 'sm',
      '&:hover, &:active': {
        color: 'white',
        bg: 'grey900',
        borderColor: 'grey900',
      },
      ...baseStyles,
    },
    underline: {
      px: 0,
      pt: 0,
      pb: 1,
      color: 'grey900',
      bg: 'transparent',
      borderColor: 'transparent',
      '&::before': {
        content: JSON.stringify(''),
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '2px',
        bg: 'primary500',
        transition: 'background-color 0.2s, left 0.2s, right 0.2s',
      },
      '&:hover, &:active': {
        color: 'primary500',
        '&::before': {
          left: '50%',
          right: '50%',
        },
      },
      ...baseStyles,
    },
  },
};

export default buttonTheme;
