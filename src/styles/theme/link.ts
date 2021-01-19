const linkTheme = {
  link: {
    transition:
      'border-color 0.18s ease-in-out, color 0.18s ease-in-out, box-shadow 0.18s ease-in-out, opacity 0.18s ease-in-out, background-color 0.18s ease-in-out',
    cursor: 'pointer',
    '&:hover': { opacity: 0.7 },
    '&:disabled': { opacity: 0.5, cursor: 'not-allowed' },
  },
};

export default linkTheme;
