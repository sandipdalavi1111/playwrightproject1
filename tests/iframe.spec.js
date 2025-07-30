import { test, expect } from '@playwright/test';

test('IFrame', async ({ page }) => {
  
  await page.goto('https://demoqa.com/frames');
  await page.setViewportSize({ width: 1920, height: 1080 });

  const frame1 = page.frame({ name: 'frame1' }); // By name
  const heading1 = await frame1.locator('#sampleHeading').textContent();
  console.log('Frame 1 Heading:', heading1);

  await page.close();
});
