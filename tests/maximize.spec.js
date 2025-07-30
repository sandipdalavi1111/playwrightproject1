import { test, expect } from '@playwright/test';
test('maximize', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });

  await page.goto('https://www.facebook.com');
  console.log("1234");
});

