const componentsTheme = {
  buttons: {
    primary: {
      px: 2,
      py: 1,
      color: 'grey900',
      bg: 'primary500',
      borderColor: 'primary500',
      boxShadow: 'sm',
      '&:hover, &:active': {
        color: 'grey900',
        bg: 'primary400',
        borderColor: 'primary400',
      },
    },
    outline: {
      px: 2,
      py: 1,
      color: 'primary500',
      bg: 'transparent',
      border: '1px',
      borderColor: 'primary500',
      boxShadow: 'sm',
      '&:hover, &:active': {
        color: 'grey900',
        bg: 'primary400',
        borderColor: 'primary400',
      },
    },
    secondary: {
      px: 2,
      py: 1,
      color: 'white',
      bg: 'secondary500',
      borderColor: 'secondary500',
      boxShadow: 'sm',
      '&:hover, &:active': {
        color: 'white',
        bg: 'secondary400',
        borderColor: 'secondary400',
      },
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
        transition: 'background-color 0.2s',
      },
      '&:hover, &:active': {
        color: 'grey900',
        '&::before': {
          bg: 'secondary400',
        },
      },
    },
  },
  forms: {
    checkbox: {
      mr: 1,
      color: 'primary500',
      'input:checked + &': {
        display: 'block',
      },
      'input:disabled ~ &': { cursor: 'not-allowed', opacity: 0.5 },
    },
    input: {
      py: '3/4',
      px: 2,
      fontSize: [3, 2],
      minHeight: '38px',
      color: 'grey900',
      borderColor: 'grey200',
      borderRadius: 'xs',
      transition: 'border-color 0.18s ease-in-out,',
      '::placeholder': {
        color: 'grey200',
      },
      '&:hover': { borderColor: 'grey300' },
      '&:disabled': {
        bg: 'grey200',
        borderColor: 'grey200',
        color: 'grey700',
        cursor: 'not-allowed',
        opacity: 0.5,
        '::placeholder': {
          color: 'grey700',
        },
      },
    },
    textarea: {
      py: '3/4',
      px: 2,
      fontSize: [3, 2],
      minHeight: '38px',
      color: 'grey900',
      borderColor: 'grey200',
      borderRadius: 'xs',
      transition: 'border-color 0.18s ease-in-out,',
      resize: 'vertical',
      '::placeholder': {
        color: 'grey200',
      },
      '&:hover': { borderColor: 'grey300' },
      '&:disabled': {
        bg: 'grey200',
        borderColor: 'grey200',
        color: 'grey700',
        cursor: 'not-allowed',
        opacity: 0.5,
        '::placeholder': {
          color: 'grey700',
        },
      },
    },
    label: {
      fontSize: 2,
    },
    radio: {
      mr: 1,
      color: 'primary500',
      'input:checked + &': {
        display: 'block',
      },
      'input:disabled ~ &': { cursor: 'not-allowed', opacity: 0.5 },
    },
  },
  link: {
    transition:
      'border-color 0.18s ease-in-out, color 0.18s ease-in-out, box-shadow 0.18s ease-in-out, opacity 0.18s ease-in-out, background-color 0.18s ease-in-out',
    cursor: 'pointer',
    '&:hover': { opacity: 0.7 },
    '&:disabled': { opacity: 0.5, cursor: 'not-allowed' },
  },
  text: {
    h1: {
      fontSize: [8, 10],
      fontWeight: 'bold',
      lineHeight: 'medium',
    },
    h2: {
      fontSize: [7, 9],
      fontWeight: 'bold',
      lineHeight: 'medium',
    },
    h3: {
      fontSize: [6, 8],
      fontWeight: 'bold',
      lineHeight: 'medium',
    },
    h4: {
      fontSize: [5, 6],
      fontWeight: 'bold',
      lineHeight: 'medium',
    },
    h5: {
      fontSize: [3, 5],
      fontWeight: 'bold',
      lineHeight: 'medium',
    },
    pxl: {
      fontSize: [2, 4],
      fontWeight: 'regular',
      lineHeight: 'medium',
    },
    plg: {
      fontSize: [2, 3],
      fontWeight: 'regular',
      lineHeight: 'medium',
    },
    pmd: {
      fontSize: [1, 2],
      fontWeight: 'regular',
      lineHeight: 'medium',
    },
    psm: {
      fontSize: 1,
      fontWeight: 'regular',
      lineHeight: 'medium',
    },
    pxs: {
      fontSize: 0,
      fontWeight: 'regular',
      lineHeight: 'medium',
    },
  },
  variants: {
    center: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
};

export default componentsTheme;
