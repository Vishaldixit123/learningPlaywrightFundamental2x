import { test, expect } from "@playwright/test"

test.describe('Test Download', () => {

    test.beforeEach('Test1', async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/widgets/upload-download');
    })

    test('download', async ({ page }) => {

        let [fileDownload] = await Promise.all([page.waitForEvent('download'), page.getByTestId('download-text').click()])

        await fileDownload.saveAs('./tests/fileDownload/' + fileDownload.suggestedFilename())


    })

    test('download json', async ({ page }) => {

        let [fileDownload] = await Promise.all([page.waitForEvent('download'), page.getByTestId('download-json').click()])

        await fileDownload.saveAs('./tests/fileDownload/' + fileDownload.suggestedFilename())


    })
    test('download static', async ({ page }) => {

        let [fileDownload] = await Promise.all([page.waitForEvent('download'), page.getByTestId('download-static').click()])

        await fileDownload.saveAs('./tests/fileDownload/' + fileDownload.suggestedFilename())


    })

    test.afterEach('Closing page', async ({ page }) => {
        await page.close();
    })
})