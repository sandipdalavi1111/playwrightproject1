import { test, expect } from '@playwright/test';

test('Window handling', async ({ page, context }) => {

  await page.goto('http://demo.guru99.com/popup.php');
  await page.waitForTimeout(2000);

  // Wait for new popup window/tab to open
  const [popup] = await Promise.all([
    context.waitForEvent('page'),      // Correct: wait for a new page in the context
    page.click('text=Click Here')      // Trigger the popup
  ]);

  await popup.waitForLoadState();

  // Fill email and submit in popup
  await popup.fill('input[name="emailid"]', 'gaurav.3n@gmail.com');
  await popup.waitForTimeout(1000);
  await popup.click('input[name="btnLogin"]');
  await popup.waitForTimeout(2000);

  await popup.close();
});
