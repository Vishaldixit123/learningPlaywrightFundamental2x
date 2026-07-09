import { test, expect, Locator } from '@playwright/test'

test('', async ({ page }) => {

    await page.goto('https://app.vwo.com');

    await expect(page).toHaveTitle('Login - Wingify');

    let image: Locator = page.locator('img[alt=Wingify]');

    expect(image).toBeVisible(); 
})