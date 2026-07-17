# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 03_Locator_Command/04_project_login.spec.ts >> Login verify
- Location: tests/03_Locator_Command/04_project_login.spec.ts:3:5

# Error details

```
Error: page.waitForTimeout: Test ended.
```

# Test source

```ts
  1 | import { test, expect, Locator } from "@playwright/test"
  2 | 
  3 | test('Login verify', async ({ page }) => {
  4 |     await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter', { waitUntil: "networkidle" });
  5 |     const heading: Locator = page.getByRole('heading', { name: 'Student Login' });
  6 |     expect(heading).toBeVisible();
> 7 |     page.waitForTimeout(2000);
    |          ^ Error: page.waitForTimeout: Test ended.
  8 | });
```