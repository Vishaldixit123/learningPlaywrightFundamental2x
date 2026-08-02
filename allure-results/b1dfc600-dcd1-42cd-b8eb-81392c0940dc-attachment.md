# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_Frame_Window/03_framrSet.spec.ts >> Handle FrameSet
- Location: tests/07_Frame_Window/03_framrSet.spec.ts:3:5

# Error details

```
Error: expect(received).toContainEqual(expected) // deep equality

Expected value:  "Sample content"
Received string: "Sample content (courses-acidfree.html)"
```

# Test source

```ts
  1  | import { test, expect, FrameLocator, Locator } from "@playwright/test"
  2  | 
  3  | test('Handle FrameSet', async ({ page }) => {
  4  | 
  5  |     await page.goto('https://app.thetestingacademy.com/playwright/frames/courses-frameset');
  6  | 
  7  | 
  8  |     let frame1: FrameLocator = page.frameLocator('[name=main]');
  9  |     let card: Locator = frame1.getByRole('heading', { name: 'The Testing Academy ' })
  10 |     await expect(card).toBeVisible();
  11 |     await page.waitForTimeout(3000);
  12 |     let frame2: FrameLocator = page.frameLocator('[name=navbar]');
  13 |     await frame2.getByRole('link', { name: 'Sample' }).click()
  14 | 
  15 |     let frame3: FrameLocator = page.frameLocator('[name=content]');
  16 | 
  17 |     let heading: string = await frame3.getByRole('heading', { name: 'Sample content' }).innerText();
  18 | 
> 19 |     expect(heading.trim()).toContainEqual('Sample content');
     |                            ^ Error: expect(received).toContainEqual(expected) // deep equality
  20 |     await page.waitForTimeout(3000);
  21 | 
  22 | 
  23 | 
  24 | 
  25 | })
```