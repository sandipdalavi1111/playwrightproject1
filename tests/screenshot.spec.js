import { test, expect } from '@playwright/test';

test('screenshot', async ({ page }) => {
  await page.goto('https://www.amazon.com');

  // Take screenshot
  await page.screenshot({ path: 'amazon.png', fullPage: true });

  await page.waitForTimeout(5000); // Optional wait to observe
});
