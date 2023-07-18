// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

export default {
  testEnvironment: 'jest-environment-node',
  transform: {},
  moduleFileExtensions: [`js`, `jsx`, `ts`, `tsx`, `json`, `node`, `mjs`],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)', '**/jest.config.mjs']
};
