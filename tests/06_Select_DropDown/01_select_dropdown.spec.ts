import { test, expect, Page } from "@playwright/test";


async function selectValue(page: Page, value: string, salector: string): Promise<void> {

    await page.locator(salector).click();
    await page.getByRole('option', { name: value }).click();
    await page.waitForTimeout(3000);
    await page.keyboard.press('Escape')


}

async function selectAllValue(page: Page, salector: string): Promise<string[]> {
    await page.locator(salector).click();
    let allValue: string[] = await page.getByRole('option').allInnerTexts();
    await page.keyboard.press('Escape')
    return allValue;
}



test('Select option', async ({ page }) => {
    await page.setViewportSize({ width: 1800, height: 900 });
    await page.goto('https://app.thetestingacademy.com/playwright/tables/dropdowns');
    await selectValue(page, 'Python', '#lang-trigger');

    let values: string[] = await selectAllValue(page, '#framework-trigger');
    ;

    for (let value of values) {
        console.log(value);
    }
    await selectValue(page, 'Vue', '#framework-trigger');
    await selectValue(page, 'Mid-level (4-6 years)', '#experience-trigger');

    await page.getByRole('button', { name: 'Save selection' }).click();



})