import { test } from '@playwright/test';

test('hahha @SetupDev', async ({ page }, testInfo) => {
  // do the setup for dev tests
  console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% setup test %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%');
  //   console.log(' testInfo.project.expect ___ ' + testInfo.project.expect);
  //   console.log(' testInfo.project.globalTimeout ___ ' + testInfo.project.globalTimeout);
  //   console.log(' testInfo.project.fullyParallel ___ ' + testInfo.project.fullyParallel);
  //   console.log(' testInfo.project.forbidOnly ___ ' + testInfo.project.forbidOnly);
  //   console.log(' testInfo.project.workers ___ ' + testInfo.project.workers);
  //   console.log(' testInfo.project.maxFailures ___ ' + testInfo.project.maxFailures);
  console.log(' testInfo.project.timeout ___ ' + testInfo.project.timeout);
  console.log(' testInfo.project.retries ___ ' + testInfo.project.retries);
  console.log(' testInfo.project.outputDir ___ ' + testInfo.project.outputDir);
  console.log(' testInfo.project.testDir ___ ' + testInfo.project.testDir);

  console.log(' testInfo.project.use.browserName ___ ' + testInfo.project.use.browserName);
  console.log(' testInfo.project.use.baseURL ___ ' + testInfo.project.use.baseURL);
  console.log(' testInfo.project.use.headless ___ ' + testInfo.project.use.headless);
  console.log(' testInfo.project.use.actionTimeout ___ ' + testInfo.project.use.actionTimeout);
  console.log(' testInfo.project.use.navigationTimeout ___ ' + testInfo.project.use.navigationTimeout);
  console.log(' testInfo.project.use.testIdAttribute ___ ' + testInfo.project.use.testIdAttribute);
  console.log(' testInfo.project.use.trace ___ ' + testInfo.project.use.trace);
  console.log(' testInfo.project.use.screenshot ___ ' + testInfo.project.use.screenshot);
  console.log(' testInfo.project.use.video ___ ' + JSON.stringify(testInfo.project.use.video));
  console.log(' testInfo.project.use.viewport ___ ' + JSON.stringify(testInfo.project.use.viewport));
  console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%');
});
