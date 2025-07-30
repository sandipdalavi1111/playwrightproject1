import { test, expect } from '@playwright/test';

test('auto suggestion practice', async ({ page }) => {
  
  await page.goto('https://www.google.com');
  await page.waitForTimeout(2000); // wait for page to load

  // Type 'real me' into the search box
  await page.fill('textarea[name="q"]', 'real me');
  await page.waitForTimeout(1000); // wait for suggestions

  // Get suggestion elements
  const suggestions = page.locator('ul[role="listbox"] li span');

  // Ensure suggestions loaded
  await suggestions.first().waitFor({ timeout: 5000 });

  // Get and print all suggestions
  const texts = await suggestions.allTextContents();
  console.log('Suggestions:');
  texts.forEach((t, i) => console.log(`${i + 1}: ${t}`));

  

  await page.waitForTimeout(3000);
  await page.close();
});
