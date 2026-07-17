import { test, expect } from '@playwright/test'

test('Verify signUp page have', async ({ page }) => {

    await page.goto('https://vwo.com/free-trial');
    await page.getByPlaceholder('name@yourcompany.com').first().fill('abdhd');
    await page.getByRole('checkbox').check();
    await page.getByRole('button', { name: 'Create a Free Trial Account' }).click();
    let msg = await page.locator("//div[contains(@class,'invalid-reason')]").first().textContent();
    expect(msg).toContain('The email address you entered is incorrect.')


})  