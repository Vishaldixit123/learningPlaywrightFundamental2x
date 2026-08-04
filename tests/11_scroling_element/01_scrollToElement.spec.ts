import { test, expect, Locator } from "@playwright/test"

test.describe('Test Download', () => {

    test.beforeEach('Test1', async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/widgets/scroll');
    })

    test.skip('Scroll to the element', async ({ page }) => {

        let button: Locator = page.getByRole('button', { name: 'Confirm scroll-through' })
        await page.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);
        })
        await page.waitForTimeout(3000);
        if (await button.isEnabled()) {
            await button.click();
        } else {
            console.log('Button is not enable')
        }

    })
    test('Scroll to the Top', async ({ page }) => {

        let button: Locator = page.getByRole('button', { name: 'Confirm scroll-through' })
        await page.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);
        })
        await page.waitForTimeout(3000);
        if (await button.isEnabled()) {
            await button.click();
        } else {
            console.log('Button is not enable')
        }

        await page.evaluate(() => {
            window.scrollTo(0, 0)
        })
        await page.waitForTimeout(4000);
    })
})