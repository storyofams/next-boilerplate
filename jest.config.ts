import type { Config } from '@jest/types';

export default {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^~(.*)$': '<rootDir>/src/$1',
  },
  moduleDirectories: [
    'node_modules',
    'src/lib', // a utility folder
    __dirname, // the root directory
  ],
  setupFilesAfterEnv: ['./setup-jest.ts'],
  coverageDirectory: './coverage',
} as Config.InitialOptions;
