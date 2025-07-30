import { test, expect } from '@playwright/test';
test('Mouse Double click', async ({ page }) => {
  await page.goto('https://demoqa.com/buttons');
  await page.dblclick("button:has-text('Double Click Me')");
  await page.waitForTimeout(3000);
  await page.close();
});
