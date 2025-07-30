import { test, expect } from '@playwright/test';
test('List box', async ({ page }) => {

  await page.setViewportSize({ width: 1920, height: 1080 });

  await page.goto('https://techcanvass.com/Examples/multi-select.html');
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.waitForTimeout(1000);

  // Select option by index (e.g., 3rd item - value='audi')
  const options = await page.locator('select').locator('option');
  const value = await options.nth(2).getAttribute('value');
  await page.selectOption('select', value);
  await page.waitForTimeout(5000);

  //await browser.close();
});
