import { test, expect, Locator } from '@playwright/test'

test('TEST', async ({ page }) => {

    await page.goto('https://app.vwo.com');

    await expect(page).toHaveTitle('Login - Wingify');

    let image: Locator = page.locator('img[alt=Wingify]');

    let button1: Locator = page.getByRole('button', { name: 'Sign up' })

    await page.getByRole('checkbox', { name: 'select' }).check();

    expect(image).toBeVisible();
})