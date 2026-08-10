import { test } from "@playwright/test"
import { readCSV } from "../../utils/csv"
import { readXLSX } from "../../utils/xlsx"

type userData = { firstName: string, lastName: string, telephone: string, password: string, subscribeNewsletter: string }

const csvUsers = readCSV('./testData/register.csv') as userData[]
const xlsxUsers = readXLSX('./testData/users.xlsx', 'register') as userData[]

for (const user of csvUsers) {
    test(`Data csv - ${user.firstName} ${user.lastName}`, async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/tables/practice#page');
        await page.getByTestId('first-name').fill(user.firstName)
        await page.getByTestId('last-name').fill(user.lastName)
    })
}

for (const user of xlsxUsers) {
    test(`Data xlsx - ${user.firstName} ${user.lastName}`, async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/tables/practice#page');
        await page.getByTestId('first-name').fill(user.firstName)
        await page.getByTestId('last-name').fill(user.lastName)
    })
}
