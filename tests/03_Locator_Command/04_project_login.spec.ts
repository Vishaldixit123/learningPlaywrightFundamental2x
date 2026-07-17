import { test, expect, Locator } from "@playwright/test"

test('Login verify', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter', { waitUntil: "networkidle" });
    const heading: Locator = page.getByRole('heading', { name: 'Student Login' });
    await expect(heading).toBeVisible();
    await page.waitForTimeout(2000);
    await page.getByLabel('Email Address').fill('sjbdkak@hjdd', { timeout: 3000 });
    await page.getByLabel('Password').fill('dhjs');
    await page.getByRole('button', { name: 'Login to Practice Account' }).click();
    await page.waitForTimeout(2000);
    const url: string = page.url();
    expect(url).toContain('sjbdkak%40hjdd');
    expect(url).toContain('password=dhjs');

});