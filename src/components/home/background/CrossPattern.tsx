export const CrossPattern = () => (
  <svg width="100%" height="100%">
    <pattern
      id="cross-pattern"
      width="32"
      height="32"
      patternUnits="userSpaceOnUse"
    >
      <path
        d="M4.00667 0L9.99334 5.99333L15.9933 0L20 3.99333L14 10L20 15.9933L15.9933 20L9.99334 13.9933L4.00667 20L0 15.9933L6 10L0 3.99333L4.00667 0Z"
        fill="#343434"
      />
    </pattern>

    <rect fill="url(#cross-pattern)" height="100%" width="100%" y="0" x="0" />
  </svg>
);
