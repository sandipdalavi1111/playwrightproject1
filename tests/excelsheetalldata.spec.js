import { test, expect } from '@playwright/test';
import xlsx from 'xlsx';

test('Excelsheet all data', async ({ page }) => {
  // Load Excel file from full path
  const workbook = xlsx.readFile('E:/playwright_automation_demo/tests/abc.xlsx');

  // Access 'Sheet1'
  const sheet = workbook.Sheets['Sheet1'];
  if (!sheet) {
    throw new Error('Sheet1 not found in Excel file.');
  }

  // Convert entire sheet to JSON (row-wise)
  const data = xlsx.utils.sheet_to_json(sheet, { header: 1 });

  // Print all data row by row
  data.forEach((row, index) => {
    console.log(`Row ${index + 1}:`, row);
  });
});
