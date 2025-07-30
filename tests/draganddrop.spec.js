import { test, expect } from '@playwright/test';

test('draganddrop', async({page}) => {
  
  await page.goto('https://demo.guru99.com/test/drag_drop.html');
    await page.setViewportSize({ width: 1920, height: 1080 });


  const source = page.locator("//div[@id='products']//ul//li[2]//a");
  const target = page.locator("(//li[@class='placeholder'])[2]");

  await source.dragTo(target);

 // await page.waitForTimeout(60000); // keep window open for 60 seconds
});

