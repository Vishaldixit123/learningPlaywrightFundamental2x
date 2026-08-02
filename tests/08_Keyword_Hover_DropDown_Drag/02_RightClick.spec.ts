import { test, expect, Locator } from "@playwright/test"

test('Handle Nasted Frame', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/widgets/context-menu');

    await page.getByTestId('ctx-target').click({ button: "right" });
    await page.waitForTimeout(3000)

    let allMenu: Locator[] = await page.locator('#ctx-menu li button span:first-child').all();

    for (let menu of allMenu) {
        if ((await menu.textContent())?.includes('Copy')) {
            await menu.click();
            break;

        }
        console.log(await menu.textContent())
    }

    // for(let i =0 ;i<allMenu.length-1;i++){

    //     console.log(await allMenu[i].nth(i).textContent());

    // }
    // await page.locator('button[data-action = copy]').click();

})