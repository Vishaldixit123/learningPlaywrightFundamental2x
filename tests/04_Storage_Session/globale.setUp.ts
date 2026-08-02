import path from 'path';
import { chromium, type FullConfig } from '@playwright/test';

const baseUrl = 'https://app.wingify.com/#/login';
const storageStatePath = path.resolve(__dirname, '../../user_session.json');

async function saveSession() {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
        await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
        await page.waitForTimeout(2000);
        await page.locator('#login-username').fill('opg73@singleuseemail.site');
        await page.locator('#login-password').fill('Wingify@4321');
        await page.getByRole('button', { name: 'Sign in' }).first().click();
        await page.waitForURL('**/dashboard', { timeout: 30000 });
        await context.storageState({ path: storageStatePath });
    } finally {
        await browser.close();
    }
}

export default async function globalSetup(_config: FullConfig) {
    await saveSession();
}