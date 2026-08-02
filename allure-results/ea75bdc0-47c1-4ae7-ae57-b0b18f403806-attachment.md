# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 04_Storage_Session/02_TestVWODashboard_NoCustomReport.spec.ts >> go directly to settings — no login
- Location: tests/04_Storage_Session/02_TestVWODashboard_NoCustomReport.spec.ts:11:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /settings/
Received string:  "https://app.wingify.com/#/login"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × unexpected value "https://app.wingify.com/#/login"

```

```yaml
- main "Application main content":
  - img "Wingify"
  - paragraph: Sign in to Wingify platform
  - list:
    - listitem:
      - text: Email address
      - textbox "Email address":
        - /placeholder: Enter email ID
        - text: opg73@singleuseemail.site
    - listitem:
      - text: Password
      - textbox "Password":
        - /placeholder: Enter password
      - button "Toggle password visibility":
        - img
    - listitem:
      - button "Forgot Password?"
    - listitem:
      - text: Remember me
      - img
    - listitem:
      - button "Sign in"
    - listitem:
      - heading "Or" [level=6]
    - listitem:
      - button "Sign in with Google":
        - img
        - text: Sign in with Google
    - listitem:
      - button "Sign in using SSO":
        - img
        - text: Sign in using SSO
    - listitem:
      - button "Sign in with Passkey":
        - img
        - text: Sign in with Passkey
    - listitem:
      - text: Don't have an account?
      - link "Start a free trial":
        - /url: https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage
    - listitem:
      - text: By continuing, you agree to Wingify's
      - link "Privacy policy":
        - /url: https://wingify.com/privacy-policy/?utm_medium=app&utm_source=login-page&utm_campaign=legal_privacy_login
      - text: "&"
      - link "Terms":
        - /url: https://wingify.com/terms/?utm_medium=website&utm_source=login-page&utm_campaign=legal_terms_login
      - text: .
  - img "Wingify abtasty logo"
  - img
  - img "Wingify abtasty logo"
  - heading "Welcome to Wingify!" [level=1]
  - heading "app.vwo.com has transitioned to app.wingify.com" [level=2]
  - heading "Your plans, features, and data remain unchanged." [level=2]
  - link "Learn More":
    - /url: https://vwo.com/product-updates/vwo-wingify-aligning-our-domain/
    - text: Learn More
    - img
- img:
  - text: "'"
  - img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | 
  4  | test("go directly to dashboard — no login", async ({ page }) => {
  5  |     await page.goto("https://app.wingify.com/#/dashboard/get-started?accountId=1227004");
  6  |     await expect(page).toHaveURL(/dashboard/);
  7  |     console.log("Dashboard loaded — no login needed ✅");
  8  |     await page.waitForTimeout(3000);
  9  | });
  10 | 
  11 | test("go directly to settings — no login", async ({ page }) => {
  12 |     await page.goto("https://app.wingify.com/#/settings/accounts/general?accountId=1227007");
> 13 |     await expect(page).toHaveURL(/settings/);
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  14 |     console.log("Settings loaded — still logged in ✅");
  15 |     await page.waitForTimeout(3000);
  16 | });
```