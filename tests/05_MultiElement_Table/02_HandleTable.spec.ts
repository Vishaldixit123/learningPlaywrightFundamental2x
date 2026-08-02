import { test } from '@playwright/test';

test('Table', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('https://app.thetestingacademy.com/playwright/webtable');

    const row = page.locator('//table/tbody[@id="employee-body"]/tr');
    const rowNumber = await row.count();

    console.log('Row count:', rowNumber);

    for (let i = 0; i < rowNumber; i++) {
        const cells = row.nth(i).locator('td');
        const cellCount = await cells.count();

        for (let j = 0; j < cellCount; j++) {
            const cellText = (await cells.nth(j).innerText()).trim();

            if (cellText === 'Chennai') {
                await row.nth(i).locator('input').click();
                console.log(`Clicked row ${i + 1} because it contains ${cellText}`);
                break;
            }
        }
    }

    await page.waitForTimeout(3000);
});
