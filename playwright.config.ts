import { PlaywrightTestConfig, Project, defineConfig } from '@playwright/test';

export const CI: boolean = process.platform === 'win32' || process.platform === 'darwin' ? false : true;

const useConfigs: Project = {
  use: {
    // Browser options
    browserName: 'chromium',

    // Head
    headless: true,

    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 45 * 1000,

    // navigation timeout
    navigationTimeout: 100 * 1000,

    // Data test id attribute pattern
    testIdAttribute: 'data-test_id',

    trace: 'retain-on-failure',

    /* Take a screenshot when test fails. */
    screenshot: 'only-on-failure',

    /* Set the video record to every test https://playwright.dev/docs/test-configuration#record-video */
    video: {
      mode: 'on-first-retry',
      size: {
        width: 1920,
        height: 1080,
      },
    },

    // Viewport size
    viewport: { width: 1920, height: 1200 },
  },
};

const projectConfigs: PlaywrightTestConfig = {
  /* Maximum time one test can run for. */
  timeout: 90 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 20 * 1000,
  },
  /* Test files glob pattern. */
  globalTimeout: CI ? 60 * 60 * 1000 : undefined,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!CI,
  /* Retry on CI only */
  retries: CI ? 2 : 1,
  /* Opt out of parallel tests on CI. */
  workers: CI ? 3 : 1,
  // Limit the number of failures on CI to save resources
  maxFailures: 80,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['list'],
    [
      'junit',
      {
        outputFile: './playwright-report/xml/report.xml',
      },
    ],
    [
      'html',
      {
        outputFolder: './playwright-report/html/',
        open: CI ? 'never' : 'on-failure',
      },
    ],
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: './playwright-report/test-results-artifacts/',

  testDir: './tests',
};

export default defineConfig({
  ...projectConfigs,
  ...useConfigs,

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'setup-dev-chromium',
      testMatch: /setup.ts/,
      grep: /@SetupDev/,
      use: {
        baseURL: 'google.com', // This is just a placeholder. The actual URL is set in the setup url for dev.
      },
    },
    {
      name: 'test-chromium',
      use: {
        browserName: 'firefox',
        baseURL: 'bing.com', // This is just a placeholder. The actual URL is set in the tests execution
      },
      dependencies: ['setup-dev-chromium'],
    },
  ],
});
