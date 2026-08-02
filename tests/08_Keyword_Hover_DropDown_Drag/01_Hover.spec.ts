import { test, expect, Locator } from "@playwright/test"

test('Handle Nasted Frame', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');

    await page.getByTestId('nav-add-ons').hover();
    await page.getByTestId('test-id-Insurance').click()
    await page.keyboard.press('Escape');
    await page.waitForTimeout(3000)
})