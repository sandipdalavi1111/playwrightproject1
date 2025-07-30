import { test, expect } from '@playwright/test';

test('Alert Popup', async ({ page }) => {
  // Go to the page
  await page.goto('http://demo.guru99.com/test/delete_customer.php');

  // Fill customer ID
  await page.fill('input[name="cusid"]', '12345');

  // Handle first alert popup
  page.once('dialog', async (dialog) => {
    console.log('Alert message:', dialog.message());
    await dialog.accept(); // Accept the first alert
  });

  // Click submit button
  await page.click('input[name="submit"]');

  // Handle second alert popup (if present)
  page.once('dialog', async (dialog) => {
    console.log('Second alert:', dialog.message());
    await dialog.accept(); // Accept the second alert
  });

  await page.waitForTimeout(3000); // Optional wait to observe result
});
