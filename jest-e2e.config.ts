import jestConfig from './jest.config';

export default {
  ...jestConfig,
  testEnvironment: './prisma/prisma-test-environment.ts',
  testRegex: '.e2e-spec.ts$',
};