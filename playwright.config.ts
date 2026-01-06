import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './E2ETest',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use:{
    browserName: 'chromium',
    headless: true,
  }, 
 });
