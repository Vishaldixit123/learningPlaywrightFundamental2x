import { test, expect, FrameLocator, Locator } from "@playwright/test"

test('Handle Nasted Frame', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/frames/nested-iframes');

    let card: Locator = page.locator('#nested-iframes-card');

    await expect(card).toBeVisible();

    let frame1: FrameLocator = page.frameLocator('#pact1');
    await frame1.getByLabel('Tool used at this level', { exact: true }).fill('Testing');
    await page.waitForTimeout(3000);
    let frame2: FrameLocator = frame1.frameLocator('#pact2');
    await frame2.getByLabel('Framework used at this level', { exact: true }).fill('Selenuim');
    await page.waitForTimeout(3000);
    let frame3: FrameLocator = frame2.frameLocator('#pact3');
    await frame3.getByLabel('Language used at this level', { exact: true }).fill('Playwright');
    await page.waitForTimeout(3000);
})