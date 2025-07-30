import { test, expect } from '@playwright/test';

test('ICAR', async ({ page }) => {
  
  await page.goto('http://demo.guru99.com/test/radio.html');
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.waitForTimeout(2000);

  // Get all radio buttons/checkboxes by name
  const elements = await page.locator('[name="webform"]');
  const count = await elements.count();

  for (let i = 0; i < count; i++) {
    await elements.nth(i).click();
    await page.waitForTimeout(2000);
  }

  await page.close();
});
