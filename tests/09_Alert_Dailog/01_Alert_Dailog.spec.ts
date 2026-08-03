import { test, expect } from "@playwright/test"

test('Dailog', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/widgets/dialogs')

    page.once('dialog', async dialog => {

        console.log(dialog.type());
        dialog.accept();

    })

    await page.getByRole('button', { name: 'Show alert' }).click();

    page.once('dialog', async dialog => {

        console.log(dialog.type());
        dialog.dismiss();

    })
    await page.getByRole('button', { name: 'Show confirm' }).click();

    page.once('dialog', async dialog => {

        console.log(dialog.type());
        console.log(dialog.message());
        console.log('Prompt default value:', dialog.defaultValue());

        const enteredName = 'Vishal';
        console.log('Entered name value:', enteredName);
        dialog.accept(enteredName);

    })
    await page.getByRole('button', { name: 'Show prompt' }).click();
    await page.waitForTimeout(3000);


    //custom modal. 
    await page.getByRole('button', { name: 'Open custom modal' }).click();
    await page.waitForTimeout(3000);
    const modal = page.getByTestId('modal-confirm');
    await expect(modal).toBeVisible();
    await modal.getByRole('textbox').fill('VishalDixit');
    await page.waitForTimeout(3000);
    await modal.getByTestId('modal-confirm-action').click();
    await expect(modal).toBeHidden();
    await page.waitForTimeout(3000);

    //open-stacked
    await page.getByTestId('open-stacked').click();
    await page.keyboard.press('Escape');
    await expect(page.getByTestId('modal-stacked')).toBeHidden();

    const expectedText = 'You successfully clicked an alert';
    page.once('dialog', async (dialog) => {
        console.log(dialog.type());
        console.log(dialog.message());
        dialog.accept();
    });

    await page.getByRole('button', { name: 'Click for JS Alert' }).click();

    let result = await page.getByTestId('alerts-result').textContent();
    expect(result).toContain(expectedText);


    let name: string = "Vishal Dixit"

    page.once('dialog', async (dialog) => {
        console.log(dialog.type());
        console.log(dialog.message());
        dialog.accept(name);
    });

    await page.getByRole('button', { name: 'Click for JS Prompt' }).click();
    result = await page.getByTestId('alerts-result').textContent();
    expect(result).toContain(name);








})