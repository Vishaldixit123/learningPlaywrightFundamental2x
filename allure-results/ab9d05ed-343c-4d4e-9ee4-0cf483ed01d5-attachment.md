# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 06_Select_DropDown/01_select_dropdown.spec.ts >> Select option
- Location: tests/06_Select_DropDown/01_select_dropdown.spec.ts:21:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import { test, expect, Page } from "@playwright/test";
  2  | 
  3  | 
  4  | async function selectValue(page: Page, value: string, salector: string): Promise<void> {
  5  | 
  6  |     await page.locator(salector).click();
  7  |     await page.pause();
> 8  |     await page.getByRole('option', { name: value }).click();
     |                                                     ^ Error: locator.click: Target page, context or browser has been closed
  9  |     await page.waitForTimeout(3000);
  10 |     await page.keyboard.press('Escape')
  11 | 
  12 | 
  13 | }
  14 | 
  15 | async function selectAllValue(page: Page, salector: string): Promise<string[]> {
  16 |     await page.locator(salector).click();
  17 |     let allValue: string[] = await page.getByRole('option').allInnerTexts();
  18 |     await page.keyboard.press('Escape')
  19 |     return allValue;
  20 | }
  21 | 
  22 | test('Select option', async ({ page }) => {
  23 |     await page.setViewportSize({ width: 1800, height: 900 });
  24 |     await page.goto('https://app.thetestingacademy.com/playwright/tables/dropdowns');
  25 |     await selectValue(page, 'Python', '#lang-trigger');
  26 | 
  27 |     let values: string[] = await selectAllValue(page, '#framework-trigger');
  28 |     ;
  29 | 
  30 |     for (let value of values) {
  31 |         console.log(value);
  32 |     }
  33 |     await selectValue(page, 'Vue', '#framework-trigger');
  34 |     await selectValue(page, 'Mid-level (4-6 years)', '#experience-trigger');
  35 | 
  36 |     await page.getByRole('button', { name: 'Save selection' }).click();
  37 | 
  38 | 
  39 | 
  40 | })
```