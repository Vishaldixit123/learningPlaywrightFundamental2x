# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 09_Alert_Dailog/01_Alert_Dailog.spec.ts >> Dailog
- Location: tests/09_Alert_Dailog/01_Alert_Dailog.spec.ts:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  getByTestId('modal-confirm')
Expected: visible
Received: hidden
Timeout:  5000ms

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByTestId('modal-confirm')
    14 × locator resolved to <div class="modal" role="dialog" aria-modal="true" id="modal-confirm" data-testid="modal-confirm" aria-labelledby="modal-confirm-title">…</div>
       - unexpected value "hidden"

```

```yaml
- 'region "Announcement: AI Tester Blueprint new batch"':
  - text: LIVE AI Tester Blueprint New batch | 23 May 2026 · 11:00 AM IST | ₹35,000₹9,999
  - emphasis: 33% OFF
  - text: Code
  - code: AITESTER
  - link "Join":
    - /url: https://bit.ly/aitester2026
  - link "Chat on WhatsApp":
    - /url: https://sdet.live/WhatsApp
    - text: ☎
  - button "Dismiss banner": ×
- complementary "Practice navigation":
  - link "T The Testing Academy":
    - /url: ../index.html
    - text: T
    - strong: The Testing Academy
  - button "Toggle sidebar"
  - searchbox /
  - text: /
  - navigation:
    - button "JavaScript" [expanded]
    - list:
      - listitem:
        - link "Overview":
          - /url: ../learn/javascript/index.html
      - listitem:
        - link "Foundations (ch 1-4)":
          - /url: ../learn/javascript/foundations.html
      - listitem:
        - link "Control flow (ch 5-7) soon":
          - /url: ../learn/javascript/control-flow.html
      - listitem:
        - link "Data structures (ch 8-12) soon":
          - /url: ../learn/javascript/data-structures.html
      - listitem:
        - link "Functions (ch 9 + 13) soon":
          - /url: ../learn/javascript/functions.html
      - listitem:
        - link "Async (ch 14-15) soon":
          - /url: ../learn/javascript/async.html
      - listitem:
        - link "OOP (ch 16-17) soon":
          - /url: ../learn/javascript/oop.html
      - listitem:
        - link "JS notes":
          - /url: ../notes.html
    - button "TypeScript" [expanded]
    - list:
      - listitem:
        - link "Overview":
          - /url: ../learn/typescript/index.html
      - listitem:
        - link "Setup + basics soon":
          - /url: ../learn/typescript/setup.html
      - listitem:
        - link "Types deep dive soon":
          - /url: ../learn/typescript/types.html
      - listitem:
        - link "Interfaces soon":
          - /url: ../learn/typescript/interfaces.html
      - listitem:
        - link "Enums soon":
          - /url: ../learn/typescript/enums.html
      - listitem:
        - link "Generics soon":
          - /url: ../learn/typescript/generics.html
      - listitem:
        - link "Access modifiers + classes soon":
          - /url: ../learn/typescript/classes.html
    - button "Playwright fundamentals" [expanded]
    - list:
      - listitem:
        - link "Curriculum hub":
          - /url: ../learn/playwright-fundamentals/index.html
      - listitem:
        - link "Multiple Element Filter":
          - /url: ../multiple_element_filter.html
      - listitem:
        - link "Web Table Directory":
          - /url: ../webtable.html
      - listitem:
        - link "QA Profile Form":
          - /url: ../tables/practice.html
      - listitem:
        - link "Companies Table":
          - /url: ../tables/webtable.html
      - listitem:
        - link "Tall Buildings Table":
          - /url: ../tables/webtable1.html
      - listitem:
        - link "Custom Dropdowns":
          - /url: ../tables/dropdowns.html
      - listitem:
        - link "Select Box Variants":
          - /url: ../tables/select-boxes.html
      - listitem:
        - link "Sortable Admin Table":
          - /url: ../tables/sortable.html
      - listitem:
        - link "Cricket Scorecard":
          - /url: ../tables/scorecard.html
      - listitem:
        - link "Frames overview":
          - /url: ../frames/index.html
      - listitem:
        - link "Multi-frame frameset":
          - /url: ../frames/multi-frames.html
      - listitem:
        - link "Nested iframes":
          - /url: ../frames/nested-iframes.html
      - listitem:
        - link "Courses frameset":
          - /url: ../frames/courses-frameset.html
      - listitem:
        - link "SVG locators":
          - /url: ../widgets/svg.html
      - listitem:
        - link "Shadow DOM":
          - /url: ../widgets/shadow-dom.html
      - listitem:
        - link "Calendar / date picker":
          - /url: ../widgets/calendar.html
      - listitem:
        - link "Drag and drop":
          - /url: ../widgets/dnd.html
      - listitem:
        - link "Toasts and notifications":
          - /url: ../widgets/toasts.html
      - listitem:
        - link "Native dialogs":
          - /url: ../widgets/dialogs.html
      - listitem:
        - link "Hover menus":
          - /url: ../widgets/hover-menu.html
      - listitem:
        - link "Right-click menu":
          - /url: ../widgets/context-menu.html
      - listitem:
        - link "Keyboard navigation":
          - /url: ../widgets/keyboard-form.html
      - listitem:
        - link "Windows and Tabs":
          - /url: ../widgets/windows-tabs.html
      - listitem:
        - link "Upload and Download":
          - /url: ../widgets/upload-download.html
      - listitem:
        - link "Scroll":
          - /url: ../widgets/scroll.html
      - listitem:
        - link "Assertions (expect)":
          - /url: ../widgets/expect.html
      - listitem:
        - link "Test modifiers, hooks, data":
          - /url: ../widgets/test-modifiers.html
      - listitem:
        - link "Data-driven + POM":
          - /url: ../widgets/data-driven.html
      - listitem:
        - link "Network interception":
          - /url: ../network/intercept.html
      - listitem:
        - link "TTACart demo":
          - /url: ../ttacart/index.html
      - listitem:
        - link "TTAStays booking":
          - /url: ../booking/index.html
      - listitem:
        - link "Advance Playwright framework":
          - /url: ../advance-framework.html
    - button "Playwright API Testing" [expanded]
    - list:
      - listitem:
        - link "Overview":
          - /url: ../learn/playwright-api/index.html
      - listitem:
        - link "CRUD basics":
          - /url: ../learn/playwright-api/crud.html
      - listitem:
        - link "Auth + Schema":
          - /url: ../learn/playwright-api/auth-schema.html
      - listitem:
        - link "Network monitoring":
          - /url: ../learn/playwright-api/network.html
    - button "Playwright BDD (Cucumber)" [expanded]
    - list:
      - listitem:
        - link "Overview":
          - /url: ../learn/playwright-cucumber/index.html
      - listitem:
        - link "Setup + first run":
          - /url: ../learn/playwright-cucumber/setup.html
      - listitem:
        - link "Data-driven":
          - /url: ../learn/playwright-cucumber/data-driven.html
      - listitem:
        - link "CI + tags + env":
          - /url: ../learn/playwright-cucumber/ci-tags-env.html
    - button "Playwright DevOps" [expanded]
    - list:
      - listitem:
        - link "NPM Registry (JFrog/Nexus)":
          - /url: ../learn/playwright-registry/index.html
      - listitem:
        - link "Docker setup":
          - /url: ../learn/playwright-docker/index.html
      - listitem:
        - link "Sharding multi-container":
          - /url: ../learn/playwright-shard/index.html
    - button "Playwright AI" [expanded]
    - list:
      - listitem:
        - link "Curriculum hub":
          - /url: ../learn/playwright-ai-agents/index.html
      - listitem:
        - link "Framework + AI (V2)":
          - /url: ../advance-framework-ai.html
      - listitem:
        - link "TTACart + AI live demo":
          - /url: ../ttacart-ai/index.html
      - listitem:
        - link "TTA AI Chat sandbox":
          - /url: ../ai-chat/index.html
    - button "Playwright MCP" [expanded]
    - list:
      - listitem:
        - link "Curriculum hub":
          - /url: ../learn/playwright-mcp/index.html
    - button "Playwright CLI" [expanded]
    - list:
      - listitem:
        - link "Curriculum hub":
          - /url: ../learn/playwright-cli/index.html
      - listitem:
        - link "SnapLocator (Chrome ext)":
          - /url: ../snaplocator.html
  - text: © The Testing Academy · 2026
  - button "Toggle dark mode"
- banner:
  - button "Open sidebar"
  - link "Practice":
    - /url: ../index.html
  - text: Widgets
  - strong: Native dialogs
  - checkbox "Locator markers" [checked]
  - text: Locator markers alert · confirm · prompt
  - button "Toggle dark mode"
- main:
  - region "Native dialogs & modal stacks":
    - text: Widget practice · Dialogs
    - heading "Native dialogs & modal stacks" [level=1]:
      - text: Native
      - emphasis: dialogs
      - text: "& modal stacks"
    - paragraph:
      - text: Three browser-native dialogs (
      - code: alert
      - text: /
      - code: confirm
      - text: /
      - code: prompt
      - text: ) plus a custom modal that supports stacking and Escape-to-close. Native dialogs are intercepted by Playwright via
      - code: page.on('dialog', ...)
      - text: ; custom modals are just DOM you query normally.
  - article:
    - heading "① Browser-native dialogs" [level=2]
    - paragraph:
      - text: These call the browser's
      - code: alert()
      - text: /
      - code: confirm()
      - text: /
      - code: prompt()
      - text: . Playwright must register a dialog handler before clicking.
    - button "Show alert"
    - button "Show confirm"
    - button "Show prompt"
    - button "Stage beforeunload"
    - text: "data-testid =show-alert / show-confirm / show-prompt / show-beforeunload handler =page.on('dialog', d => d.accept(...) | d.dismiss()) output =data-testid=dialog-output { \"type\": \"prompt\", \"value\": \"Vishal\", \"at\": \"8:29:15 PM\" }"
  - article:
    - heading "② Custom modal — focus trap + Escape" [level=2]
    - paragraph:
      - text: A regular DOM modal — visible via
      - code: data-testid="modal-confirm"
      - text: . Click
      - emphasis: Open another
      - text: to stack a second one and confirm Playwright finds the topmost.
    - button "Open custom modal"
    - button "Open stacked modal"
    - text: "data-testid =open-modal / open-stacked / modal-confirm / modal-stacked / modal-cancel / modal-confirm-action role =dialog · aria-modal=true keys =Escape closes top modal { \"action\": \"close\", \"id\": \"modal-stacked-backdrop\", \"reason\": \"escape\", \"stackSize\": 0 }"
  - complementary:
    - heading "What students should practise" [level=3]
    - list:
      - listitem:
        - text: Register a one-shot
        - code: page.once('dialog', ...)
        - text: before clicking Show alert; assert the message.
      - listitem:
        - text: Use
        - code: dialog.dismiss()
        - text: on the confirm and verify the page logs
        - code: "dismissed: true"
        - text: .
      - listitem:
        - text: Use
        - code: dialog.accept('Hello')
        - text: on the prompt and assert the output reflects your value.
      - listitem: Open the custom modal, fill the input, press Enter, and assert the output JSON.
      - listitem: Stack a second modal, press Escape, and confirm only the top one closed.
    - group:
      - strong: Playwright solution
      - text: Native dialog handlers + custom modal interaction. Show solution
  - region "JavaScript Alerts":
    - text: Mini practice · Classic 3-button drill
    - heading "JavaScript Alerts" [level=2]:
      - text: JavaScript
      - emphasis: Alerts
    - paragraph:
      - text: The textbook drill — three buttons, three native dialogs, one result line.
      - strong: Alert
      - text: ·
      - strong: Confirm
      - text: ·
      - strong: Prompt
      - text: . Hook a Playwright
      - code: page.on('dialog', …)
      - text: handler
      - emphasis: before
      - text: the click, then assert the
      - code: data-testid="alerts-result"
      - text: text matches.
  - region "JavaScript Alerts mini practice":
    - heading "Click the button" [level=2]
    - paragraph: Each button fires its native dialog. The result line updates after you accept / dismiss / enter text.
    - text: "id =js-alert · js-confirm · js-prompt · alerts-result data-testid =js-alert / js-confirm / js-prompt / alerts-result messages : 'I am a JS Alert' · 'I am a JS Confirm' · 'I am a JS prompt'"
    - button "Click for JS Alert"
    - button "Click for JS Confirm"
    - button "Click for JS Prompt"
    - paragraph: "Result: —"
    - complementary:
      - heading "What to practise" [level=3]
      - list:
        - listitem:
          - text: Register
          - code: page.once('dialog', d => d.accept())
          - text: before clicking Click for JS Alert; assert result reads
          - code: "\"You successfully clicked an alert\""
          - text: .
        - listitem:
          - text: Confirm — try
          - code: accept()
          - text: first, then re-run with
          - code: dismiss()
          - text: ; assert result is
          - code: "\"You clicked: Ok\""
          - text: vs
          - code: "\"You clicked: Cancel\""
          - text: .
        - listitem:
          - text: Prompt —
          - code: d.accept('Aarav')
          - text: ; assert result is
          - code: "\"You entered: Aarav\""
          - text: .
        - listitem:
          - text: Prompt dismiss —
          - code: d.dismiss()
          - text: ; assert result is
          - code: "\"You entered: null\""
          - text: .
        - listitem:
          - text: Read the
          - code: dialog.type()
          - text: and
          - code: dialog.message()
          - text: values to verify exactly what JS sent.
      - group:
        - strong: Playwright solution
        - text: "4 cases: alert, confirm OK, prompt with text, prompt dismiss. Show solution"
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test"
  2  | 
  3  | test('Dailog', async ({ page }) => {
  4  | 
  5  |     await page.goto('https://app.thetestingacademy.com/playwright/widgets/dialogs')
  6  | 
  7  |     page.once('dialog', async dialog => {
  8  | 
  9  |         console.log(dialog.type());
  10 |         dialog.accept();
  11 | 
  12 |     })
  13 | 
  14 |     await page.getByRole('button', { name: 'Show alert' }).click();
  15 | 
  16 |     page.once('dialog', async dialog => {
  17 | 
  18 |         console.log(dialog.type());
  19 |         dialog.dismiss();
  20 | 
  21 |     })
  22 |     await page.getByRole('button', { name: 'Show confirm' }).click();
  23 | 
  24 |     page.once('dialog', async dialog => {
  25 | 
  26 |         console.log(dialog.type());
  27 |         console.log(dialog.message());
  28 |         console.log('Prompt default value:', dialog.defaultValue());
  29 | 
  30 |         const enteredName = 'Vishal';
  31 |         console.log('Entered name value:', enteredName);
  32 |         dialog.accept(enteredName);
  33 | 
  34 |     })
  35 |     await page.getByRole('button', { name: 'Show prompt' }).click();
  36 |     await page.waitForTimeout(3000);
  37 | 
  38 | 
  39 |     //custom modal. 
  40 |     await page.getByRole('button', { name: 'Open custom modal' }).click();
  41 |     await page.waitForTimeout(3000);
  42 |     const modal = page.getByTestId('modal-confirm');
  43 |     await expect(modal).toBeVisible();
  44 |     await modal.getByRole('textbox').fill('VishalDixit');
  45 |     await page.waitForTimeout(3000);
  46 |     await modal.getByTestId('modal-confirm-action').click();
  47 |     await expect(modal).toBeHidden();
  48 |     await page.waitForTimeout(3000);
  49 | 
  50 |     //open-stacked
  51 |     await page.getByTestId('open-stacked').click();
  52 |     await page.keyboard.press('Escape');
  53 |     await expect(page.getByTestId('modal-stacked')).toBeHidden();
> 54 |     await expect(page.getByTestId('modal-confirm')).toBeVisible();
     |                                                     ^ Error: expect(locator).toBeVisible() failed
  55 | 
  56 | 
  57 | 
  58 | })
```