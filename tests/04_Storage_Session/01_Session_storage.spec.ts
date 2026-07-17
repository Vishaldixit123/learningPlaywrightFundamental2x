const { chromium } = require('playwright');

const baseUrl = 'https://app.wingify.com/#/login';

async function saveSession() {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(baseUrl, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.locator('#login-username').fill('opg73@singleuseemail.site');
    await page.locator('#login-password').fill('Wingify@4321');
    await page.getByRole('button', { name: 'Sign in' }).first().click();
    await page.waitForTimeout(2000);
    await page.waitForURL('**/dashboard', { timeout: 20000 });
    await context.storageState({ path: 'user_session.json' });
    await browser.close();
}

saveSession().catch((err) => {
    console.error(err);
    process.exit(1);
});