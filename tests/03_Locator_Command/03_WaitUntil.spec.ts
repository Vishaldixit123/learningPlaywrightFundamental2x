import { test, expect } from '@playwright/test'

test.describe('wait util', () => {


    test('test wait until', async ({ page }) => {

        await page.goto('https://vwo.com/free-trial', { waitUntil: 'commit' });


    })


    test('test wait until with domcontentloaded', async ({ page }) => {

        await page.goto('https://vwo.com/free-trial', { waitUntil: 'domcontentloaded' });


    })

    test('test wait until with load', async ({ page }) => {

        await page.goto('https://vwo.com/free-trial', { waitUntil: 'load' })

        let title1: string = page.title();

        expect(page.title()).toEqual(title1);


    })

    test('test wait until with network', async ({ page }) => {

        await page.goto('https://vwo.com/free-trial', { waitUntil: 'networkidle' });


    })

})
