import { test, expect } from '@playwright/test';
test('Mouse Left click', async ({ page }) => {
  
await page.goto('https://www.google.co.in/');
await page.click('text=Gmail');
});
