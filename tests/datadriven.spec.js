import { test, expect } from '@playwright/test';
import xlsx from 'xlsx';

test('data driven', async ({ page }) => {
  const workbook = xlsx.readFile('tests/abc.xlsx');
  const sheet = workbook.Sheets['Sheet1'];

  const email = sheet['A2']?.v || '';
  const password = sheet['A5']?.v|| '';

  //console.log(`Read from Excel → Email: ${email}, Password: ${password}`);

  await page.goto('https://www.facebook.com/');
  await page.waitForTimeout(2000);

  await page.fill('input[name="email"]', email);
  await page.fill('input[name="pass"]', password);
  await page.waitForTimeout(1000);

  await page.click('button[name="login"]');
  await page.waitForTimeout(3000);
});
