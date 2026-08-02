import { test, expect, Locator } from "@playwright/test"

test('Drag and Drp', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/widgets/dnd');
    await page.getByTestId('card-write-spec').dragTo(page.getByTestId('col-in-progress'))
    await page.waitForTimeout(3000);
    await page.getByTestId('card-review-pr-21').dragTo(page.getByTestId('col-in-progress'))
    await page.waitForTimeout(3000);
    await expect(page.getByTestId('count-in-progress')).toHaveText('2');
    await page.getByTestId('card-update-readme').dragTo(page.getByTestId('col-review'));
    await page.waitForTimeout(3000);
    await expect(page.getByTestId('count-review')).toHaveText('1');

})