import { test, expect, Locator, Page } from "@playwright/test"

async function getALLMac(page: Page, value: string): Promise<string[]> {

    let macValue: string[] = [];

    await page.getByPlaceholder('Search for products, brands and more').fill(value);
    await page.waitForTimeout(3000)
    await page.locator("(//*[name()='path' and contains(@class,'dWptfd')])[1]").click();
    await page.waitForTimeout(3000)
    let macCount: Locator[] = await page.locator('a.pIpigb').all();

    for (let mac of macCount) {
        let val: string = await mac.innerText();
        macValue.push(val);
    }

    return macValue;

}

async function clickBar(page: Page, value: string) {
    await page.locator("(//*[name()='svg' and @id='chart-svg']//*[name()='rect' and @data-value = '" + value + "'])").click();

}

test.describe('Test SVG', () => {

    test.beforeEach('Test1', async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/widgets/svg');

    })

    test.skip('Test svg', async ({ page }) => {

        let allVlaue: string[] = await getALLMac(page, 'macmini');
        console.log(allVlaue)
    })

    test.skip('Test svg curcle', async ({ page }) => {

        await page.locator("(//*[name()='svg']//*[name()='circle' and @data-testid='shape-circle-red'])").click();

        await expect(page.locator('#shapes-output')).toContainText('circle-red');

    })

    test.skip('Test svg lIst', async ({ page }) => {

        let allShape: Locator[] = await page.locator("(//*[name()='svg' and @id='shapes-svg']//*[contains(@class,'shape')])").all();

        expect(allShape).toHaveLength(5);

        for (let shape of allShape) {
            await shape.click();
            await page.waitForTimeout(3000)
            await expect(page.locator('.submission-output').first()).not.toBeEmpty();
        }



    })

    test('Test svg bar', async ({ page }) => {

        await clickBar(page, '42');

        await page.waitForTimeout(3000)
        await expect(page.locator('#bars-output')).toContainText('42');

        await page.getByTestId('star-1').scrollIntoViewIfNeeded();
        await page.getByTestId('star-1').click();
        await page.waitForTimeout(3000)
        await expect(page.getByTestId('stars-readout')).toContainText('1')

    })

})