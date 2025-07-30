import { test, expect } from '@playwright/test';

test('auto suggestion', async ({ page }) => {
  await page.goto('https://www.google.com');
  await page.waitForTimeout(4000);

  // Accept cookies if prompt appears (optional for some regions)
  const acceptBtn = page.locator('button:has-text("Accept all")');
  if (await acceptBtn.isVisible()) {
    await acceptBtn.click();
  }

  // Fill search input using XPath
  await page.locator("//textarea[@id='APjFqb']").fill('real me');
  await page.waitForTimeout(2000); // wait for suggestions

  // Get all suggestion list items
  const suggestions = await page.locator('li[role="presentation"]').all();
  console.log('Total suggestions found:', suggestions.length);

  for (let i = 0; i < suggestions.length; i++) {
    const text = await suggestions[i].innerText();
    console.log(`Suggestion ${i + 1}:`, text);
  }

  await page.waitForTimeout(2000); // Optional pause to view
});
