import { test, expect } from '@playwright/test';

test('Total no of links', async ({ page }) => {

  await page.goto('https://www.google.co.in/');
  await page.waitForTimeout(2000);

  // Get all <a> elements (links)
  const links = await page.locator('a');
  const count = await links.count();
  console.log('Total number of links:', count);

  // Loop through each link and print its text
  for (let i = 0; i < count; i++) {
    const text = await links.nth(i).innerText();
    console.log(text);
    await page.waitForTimeout(1000);
  }

  await browser.close();
});
