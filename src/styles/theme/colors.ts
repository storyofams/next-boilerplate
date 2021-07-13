const neutrals = {
  white: '#ffffff',
  grey100: '#F5F6F6',
  grey200: '#EEF0F0',
  grey300: '#D0D3D2',
  grey500: '#939A99',
  grey700: '#575B5B',
  grey800: '#3B403F',
  grey900: '#151817',
  warning50: '#FEFCE8',
  warning100: '#FEF08A',
  warning300: '#FACC15',
  warning600: '#CA8A04',
  warning800: '#713F12',
  success50: '#F0FDF4',
  success100: '#BBF7D0',
  success300: '#4ADE80',
  success600: '#16A34A',
  success800: '#14532D',
  error50: '#FEF2F2',
  error100: '#FEE2E2',
  error300: '#F66754',
  error600: '#DC2626',
  error800: '#7F1D1D',
  transparent: 'rgba(255, 255, 255, 0);',
};

const primary = {
  primary100: '#F4F6F5',
  primary200: '#CAD1CD',
  primary400: '#97A49D',
  primary600: '#62776B',
  primary800: '#2E493A',
};

const green = {
  green100: '#FBFCFA',
  green200: '#EEF2E6',
  green400: '#DEE6CF',
  green600: '#CDD9B6',
  green800: '#BCCC9E',
};

const yellow = {
  yellow100: '#FEFCFA',
  yellow200: '#FAF3E5',
  yellow400: '#F5E7CC',
  yellow600: '#F0DBB2',
  yellow800: '#EBCF98',
};

const brown = {
  brown100: '#FDFDFC',
  brown200: '#F8F5F0',
  brown400: '#F3ECE1',
  brown600: '#ECE2D2',
  brown800: '#E6D8C3',
};

const pink = {
  pink100: '#FEFCFB',
  pink200: '#FAEFED',
  pink400: '#F7E0DB',
  pink600: '#F2D1C9',
  pink800: '#EEC1B7',
};

const blue = {
  blue100: '#FCFDFD',
  blue200: '#F0F7F6',
  blue400: '#E2F1EE',
  blue600: '#D4E9E5',
  blue800: '#C5E2DC',
};

const variants = {
  ...green,
  ...yellow,
  ...brown,
  ...pink,
  ...blue,
};

const colors = {
  ...primary,
  ...variants,
  ...neutrals,
};

export default colors;
