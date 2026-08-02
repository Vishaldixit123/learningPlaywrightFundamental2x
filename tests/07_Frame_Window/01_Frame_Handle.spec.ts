import { test, expect, Locator, FrameLocator } from "@playwright/test"

test("Frame", async ({ page }) => {

    await page.setViewportSize({
        width: 1500,
        height: 800,
    });

    await page.goto("https://app.thetestingacademy.com/playwright/frames/");

    let heading: Locator = page.getByRole('heading', { name: 'Vehicle registration · iframe practice' });

    expect(heading).toBeVisible({ visible: true });

    const frame: FrameLocator = page.frameLocator("#frame-one");

    await frame.locator('#RESULT_TextField-1').fill('Scorpio');
    await frame.locator('#RESULT_TextField-2').fill('Vishal');
    await frame.locator('#RESULT_TextField-3').fill('MP04YS');
    await frame.locator('#RESULT_RadioButton-1').selectOption('SUV');
    await frame.locator('#RESULT_TextField-4').fill('2024');
    await frame.locator('#RESULT_TextArea-1').fill('Notes textbox');
    await frame.getByRole('button', { name: 'Submit registration' }).click();
    await page.waitForTimeout(3000);
    let data: string = await frame.locator('#vehicle-output').innerText();
    console.log(data)



})