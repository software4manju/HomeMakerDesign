import { test, expect } from '@playwright/test';

test('Search for Playwright works', async ({ page }) => {

  await page.goto('https://www.google.com', { waitUntil: 'domcontentloaded' });

  // Handle consent popup if it appears
  const acceptButton = page.getByRole('button', { name: /I agree|Accept all/i });
  if (await acceptButton.isVisible().catch(() => false)) {
    await acceptButton.click();
  }

  // Wait for search textarea
  await page.waitForSelector('#APjFqb', { timeout: 10000 });

  // Fill search text
  await page.locator('#APjFqb').fill('Playwright automation');

  // Press Enter
  await page.keyboard.press('Enter');

  // Validate results page
  await expect(page).toHaveTitle(/Playwright/);
});

test('Click on an Article', async ({ page }) => {

  await page.goto('https://www.google.com', { waitUntil: 'domcontentloaded' });

  // Handle consent popup if it appears
  const acceptButton = page.getByRole('button', { name: /I agree|Accept all/i });
  if (await acceptButton.isVisible().catch(() => false)) {
    await acceptButton.click();
  }

  // Wait for search textarea
  await page.waitForSelector('#APjFqb', { timeout: 10000 });

  // Fill search text
  await page.locator('#APjFqb').fill('Playwright automation');

  // Press Enter
  await page.keyboard.press('Enter');

  // Validate results page
  await expect(page).toHaveTitle(/Playwright/);
});
