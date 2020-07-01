module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@config(.*)$': '<rootDir>/src/config$1',
    '^@graphql(.*)$': '<rootDir>/src/graphql$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@lib(.*)$': '<rootDir>/src/lib$1',
    '^@styles(.*)$': '<rootDir>/src/styles$1',
  },
  moduleDirectories: [
    'node_modules',
    'src/lib', // a utility folder
    __dirname, // the root directory
  ],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', './jest.setup.js'],
}
