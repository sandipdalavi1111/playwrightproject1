import { test, expect } from '@playwright/test';
import fs from 'fs';

test.describe('Facebook Login Flow', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.facebook.com/');
    await page.setViewportSize({ width: 1920, height: 1080 });

    await page.waitForTimeout(1000);
    console.log('Navigated to Facebook login page');

    await page.fill("input[name='email']", '8329080292');
    await page.fill("input[name='pass']", 'Sandip@123');
    await page.click("button[name='login']");
    await page.waitForTimeout(3000);
    console.log('Login process completed');
  });

  test('URL should contain facebook.com after login', async ({ page }) => {
    const currentUrl = await page.url();
    expect(currentUrl).toContain('facebook.com');
    console.log('URL validation completed');
  });
   test('Second test', async ({ page }) => {
    const currentUrl = await page.url();
    expect(currentUrl).toContain('facebook.com');
    console.log('This is Second test');
  });
  

  test.afterEach(async ({ page }, testInfo) => {
    const screenshotPath = "E:/playwright_automation_demo/screenshot/abc.png";
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log('Screenshot saved at:', screenshotPath);
  });

  test.afterAll(async () => {
    console.log('All tests completed. Cleanup done.');
  });



});
