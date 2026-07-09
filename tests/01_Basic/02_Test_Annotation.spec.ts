import { test, expect } from '@playwright/test'

test('Has Title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
})
