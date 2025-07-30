import { test, expect } from '@playwright/test';

test('scrollbar', async ({ page }) => {
  // Navigate to file upload demo site
  await page.goto('https://www.facebook.com/');
  await page.waitForTimeout(2000);

    // Scroll down by 1000px
  await page.evaluate(() => {
    window.scrollBy(0, 1000);
  });

  await page.waitForTimeout(2000);

  // Scroll up by 1000px
  await page.evaluate(() => {
   window.scrollBy(0, -1000);
  });

  await page.waitForTimeout(2000);
  await page.close();

});
