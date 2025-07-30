import { test, expect } from '@playwright/test';

test('scrollbar', async ({ page }) => {
  // Navigate to file upload demo site
  await page.goto('http://demo.guru99.com/test/upload/');
  await page.setViewportSize({ width: 1920, height: 1080 });


  // Path to the file to upload
  const filePath = "E:/SOFTWARE TESTING UPDATED DATA/Selenium/1.Selenium Theory/1.Automation Introduction.docx";

  // Upload the file
  await page.setInputFiles("//input[@id='uploadfile_0']", filePath);

  // Accept terms and conditions
  await page.click("//input[@id='terms']");

  // Click the upload button
  await page.click("//button[@id='submitbutton']");

  
});
