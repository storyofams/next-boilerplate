const formTheme = {
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
};

export default formTheme;
