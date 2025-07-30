import { test, expect } from '@playwright/test';
import https from 'https';
import http from 'http';
import { URL } from 'url';

test('Broken links', async ({ page }) => {
  await page.goto('https://www.google.com');
  await page.waitForTimeout(2000);

  // Extract all href values
  const links = await page.$$eval('a', anchors =>
    anchors.map(a => a.href).filter(href => href)
  );

  console.log(`🔗 Total links found: ${links.length}\n`);

  for (const link of links) {
    await checkLink(link);
    await new Promise(r => setTimeout(r, 500)); // Pause to avoid rate-limiting
  }
});

// Check each link
async function checkLink(linkUrl) {
  try {
    const urlObj = new URL(linkUrl);
    const lib = urlObj.protocol === 'https:' ? https : http;

    return new Promise((resolve) => {
      const req = lib.request(
        {
          method: 'GET',
          hostname: urlObj.hostname,
          path: urlObj.pathname + urlObj.search,
          timeout: 5000,
        },
        (res) => {
          if (res.statusCode === 200) {
            console.log(`✅ ${linkUrl} - OK`);
          } else if (res.statusCode === 404) {
            console.log(`❌ ${linkUrl} - Broken (404 Not Found)`);
          } else if (res.statusCode >= 400) {
            console.log(`❌ ${linkUrl} - Broken (Status ${res.statusCode})`);
          } else {
            console.log(`ℹ️  ${linkUrl} - Status ${res.statusCode}`);
          }
          res.resume(); // Drain response
          resolve();
        }
      );

      req.on('error', () => {
        console.log(`❌ ${linkUrl} - Error (Could not connect)`);
        resolve();
      });

      req.end();
    });
  } catch (err) {
    console.log(`❌ ${linkUrl} - Invalid URL`);
  }
}
