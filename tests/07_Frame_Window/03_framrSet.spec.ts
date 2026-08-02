import { test, expect, FrameLocator, Locator } from "@playwright/test"

test('Handle FrameSet', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/frames/courses-frameset');


    let frame1: FrameLocator = page.frameLocator('[name=main]');
    let card: Locator = frame1.getByRole('heading', { name: 'The Testing Academy ' })
    await expect(card).toBeVisible();
    await page.waitForTimeout(3000);
    let frame2: FrameLocator = page.frameLocator('[name=navbar]');
    await frame2.getByRole('link', { name: 'Sample' }).click()

    let frame3: FrameLocator = page.frameLocator('[name=content]');

    let heading: string = await frame3.getByRole('heading', { name: 'Sample content' }).innerText();

    expect(heading.trim()).toContain('Sample content (courses-acidfree.html)');
    await page.waitForTimeout(3000);




})