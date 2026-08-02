# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 08_Keyword_Hover_DropDown_Drag/03_Drag_Drop.spec.ts >> Drag and Drp
- Location: tests/08_Keyword_Hover_DropDown_Drag/03_Drag_Drop.spec.ts:3:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  getByTestId('count-review')
Expected: "1"
Received: "0"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for getByTestId('count-review')
    14 × locator resolved to <span class="column-count" data-testid="count-review">0</span>
       - unexpected value "0"

```

```yaml
- text: "0"
```

# Test source

```ts
  1  | import { test, expect, Locator } from "@playwright/test"
  2  | 
  3  | test('Drag and Drp', async ({ page }) => {
  4  |     await page.goto('https://app.thetestingacademy.com/playwright/widgets/dnd');
  5  |     await page.getByTestId('card-write-spec').dragTo(page.getByTestId('col-in-progress'))
  6  |     await page.waitForTimeout(3000);
  7  |     await page.getByTestId('card-review-pr-21').dragTo(page.getByTestId('col-in-progress'))
  8  |     await page.waitForTimeout(3000);
  9  |     await expect(page.getByTestId('count-in-progress')).toHaveText('2');
  10 |     await page.getByTestId('card-review-pr-21').dragTo(page.getByTestId('col-review'));
  11 |     await page.waitForTimeout(3000);
> 12 |     await expect(page.getByTestId('count-review')).toHaveText('1');
     |                                                    ^ Error: expect(locator).toHaveText(expected) failed
  13 | 
  14 | })
```