import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  timeout: 60000,
  expect: {
    timeout: 5000,
  },
  reporter: 'html',
  use: {
    headless: false,
    actionTimeout: 0,
    trace: 'on',
    baseURL: 'https://blankfactor.com',
  },
});