import { test, expect } from '@playwright/test';
test('Mouse over', async ({ page }) => {
 
await page.goto('https://www.google.co.in/');
await page.setViewportSize({ width: 1920, height: 1080 });

await page.hover('text=Gmail');
await page.waitForTimeout(5000);

});
