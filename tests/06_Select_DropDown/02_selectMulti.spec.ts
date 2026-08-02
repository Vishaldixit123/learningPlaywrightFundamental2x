import { test, expect, Page } from "@playwright/test"

async function selectMultiple(page: Page, values: string[], selector: string) {
    await page.getByTestId(selector).click();
    for (let value of values) {
        await page.getByRole('option', { name: value }).click();
        await page.waitForTimeout(2000);
    }
    await page.keyboard.press('Escape')

}
async function selectAsync(page: Page, value: string, selector: string): Promise<string[]> {
    await page.getByTestId(selector).click();
    await page.getByTestId(selector).fill(value);
    await page.waitForTimeout(2000);
    const options = page.getByRole('option');
    const count = await options.count();
    const values: string[] = [];
    for (let i = 0; i < count; i++) {
        const text = await options.nth(i).innerText();
        values.push(text);

        if (text === 'Bengaluru') {
            await options.nth(i).click();
            break;
        }
    }
    await page.keyboard.press('Escape')
    return values;

}

test('Select multiple value', async ({ page }) => {
    await page.setViewportSize({ width: 1850, height: 900 });
    await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');
    await selectMultiple(page, ['Playwright', 'JUnit'], 'rs-multi-input');
    let selectValues: string[] = await selectAsync(page, 'En', 'rs-async-input');
    console.log(selectValues)

})