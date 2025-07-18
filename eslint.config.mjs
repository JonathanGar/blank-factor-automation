import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['src/**/*.ts'],
    plugins: { playwright },
    rules: {
      ...playwright.configs.recommended.rules,
      'playwright/no-standalone-expect': 'off'
    }
  },
  {
    ignores: ['node_modules', 'dist', 'playwright-report', 'test-results', 'cucumber-report', 'reports', 'generate-report.js']
  }
];