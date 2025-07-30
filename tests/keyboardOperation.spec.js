import { test, expect } from '@playwright/test';

test('Keyboard operation', async ({ page }) => {
  

await page.goto('https://www.amazon.in/');
await page.setViewportSize({ width: 1920, height: 1080 });
await page.click("//select[@aria-describedby='searchDropdownDescription']");


for (let i = 0; i < 5; i++) {
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(1000);
  }

  await page.waitForTimeout(3000);

  await page.keyboard.press('Enter');
});

// await page.keyboard.press('ArrowDown');
// await page.keyboard.press('ArrowUp');
// await page.keyboard.press('ArrowLeft');
// await page.keyboard.press('ArrowRight');
// await page.keyboard.press('Enter');
// await page.keyboard.press('Escape');
// await page.keyboard.press('Backspace');
// await page.keyboard.press('Tab');
// await page.keyboard.press('Delete');
// await page.keyboard.press('Shift');
// await page.keyboard.press('Control');
// await page.keyboard.press('Alt');
// await page.keyboard.press('Meta'); // Windows key or Command on Mac
// await page.keyboard.press('Home');
// await page.keyboard.press('End');
// await page.keyboard.press('PageUp');
// await page.keyboard.press('PageDown');
// await page.keyboard.press('F1');
// await page.keyboard.press('F12');
// await page.keyboard.press('Space');
