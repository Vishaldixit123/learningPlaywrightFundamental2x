import { test, expect, Locator } from "@playwright/test"

test('Multi Element Handle ', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
    await page.waitForTimeout(2000);
    const heading: Locator = page.getByRole('heading', { name: 'Student Login' });
    await expect(heading).toBeVisible();
    const allLink: string[] = await page.locator('a.list-group-item').allInnerTexts();
    console.log(allLink.length)
    for (let link of allLink) {
        console.log(link);
        if (link === 'Forgotten Password') {
            await page.getByTestId('forgotten-password-link').click();
        }

    }
    await page.waitForTimeout(2000);

});

test('Multi Element Handle why all', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
    await page.waitForTimeout(2000);
    const heading: Locator = page.getByRole('heading', { name: 'Student Login' });
    await expect(heading).toBeVisible();
    const allLink: Locator[] = await page.locator('a.list-group-item').all();
    console.log(allLink.length)
    for (let link = 0; link < allLink.length; link++) {
        const li = await allLink[link].getAttribute('href');
        console.log(li);
        if (li?.includes('#forgotten-password')) {
            await allLink[link].click();
        }

    }
    await page.waitForTimeout(2000);

});

test('Multi Element Handle with filter', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
    await page.waitForTimeout(2000);
    const heading: Locator = page.getByRole('heading', { name: 'Student Login' });
    await expect(heading).toBeVisible();
    await page.locator('a.list-group-item').filter({ hasText: 'Forgotten Password' }).click();
    await page.waitForTimeout(2000);

});