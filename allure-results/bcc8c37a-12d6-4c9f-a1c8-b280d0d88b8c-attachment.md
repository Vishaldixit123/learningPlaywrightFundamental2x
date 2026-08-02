# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 09_Alert_Dailog/01_Alert_Dailog.spec.ts >> Dailog
- Location: tests/09_Alert_Dailog/01_Alert_Dailog.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByTestId('open-stacked')
    - locator resolved to <button type="button" id="open-stacked" data-testid="open-stacked" class="tta-button is-secondary">Open stacked modal</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <label for="modal-name">Name</label> from <div id="modal-confirm-backdrop" class="modal-backdrop is-open">…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
      - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is not stable
  2 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div id="modal-confirm-backdrop" class="modal-backdrop is-open">…</div> intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <label for="modal-name">Name</label> from <div id="modal-confirm-backdrop" class="modal-backdrop is-open">…</div> subtree intercepts pointer events
  2 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <span class="promo-when">23 May 2026 · 11:00 AM IST</span> from <div role="region" class="tta-promo-banner" aria-label="Announcement: AI Tester Blueprint new batch">…</div> subtree intercepts pointer events
  6 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div id="modal-confirm-backdrop" class="modal-backdrop is-open">…</div> intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <span class="promo-when">23 May 2026 · 11:00 AM IST</span> from <div role="region" class="tta-promo-banner" aria-label="Announcement: AI Tester Blueprint new batch">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div id="modal-confirm-backdrop" class="modal-backdrop is-open">…</div> intercepts pointer events
  - retrying click action
    - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - 'region "Announcement: AI Tester Blueprint new batch" [ref=e2]':
    - generic [ref=e3]: LIVE
    - generic [ref=e5]: AI Tester Blueprint
    - generic [ref=e6]: New batch
    - generic [ref=e7]: "|"
    - generic [ref=e8]: 23 May 2026 · 11:00 AM IST
    - generic [ref=e9]: "|"
    - generic [ref=e10]:
      - text: ₹35,000₹9,999
      - emphasis [ref=e11]: 33% OFF
    - generic [ref=e12]:
      - text: Code
      - code [ref=e13]: AITESTER
    - link "Join" [ref=e14] [cursor=pointer]:
      - /url: https://bit.ly/aitester2026
    - link "Chat on WhatsApp" [ref=e15] [cursor=pointer]:
      - /url: https://sdet.live/WhatsApp
      - text: ☎
    - button "Dismiss banner" [ref=e16] [cursor=pointer]: ×
  - generic [ref=e17]:
    - complementary "Practice navigation" [ref=e18]:
      - generic [ref=e19]:
        - link "T The Testing Academy" [ref=e20] [cursor=pointer]:
          - /url: ../index.html
          - generic [ref=e21]: T
          - strong [ref=e23]: The Testing Academy
        - button "Toggle sidebar" [ref=e24] [cursor=pointer]:
          - img [ref=e25]
      - generic [ref=e28]:
        - img [ref=e29]
        - searchbox / [ref=e32]
        - generic [ref=e33]: /
      - navigation [ref=e34]:
        - generic [ref=e35]:
          - button "JavaScript" [expanded] [ref=e36] [cursor=pointer]:
            - img [ref=e37]
            - generic [ref=e40]: JavaScript
            - img [ref=e41]
          - list [ref=e43]:
            - listitem [ref=e44]:
              - link "Overview" [ref=e45] [cursor=pointer]:
                - /url: ../learn/javascript/index.html
                - img [ref=e47]
                - generic [ref=e50]: Overview
            - listitem [ref=e51]:
              - link "Foundations (ch 1-4)" [ref=e52] [cursor=pointer]:
                - /url: ../learn/javascript/foundations.html
                - generic [ref=e54]: Foundations (ch 1-4)
            - listitem [ref=e55]:
              - link "Control flow (ch 5-7) soon" [ref=e56] [cursor=pointer]:
                - /url: ../learn/javascript/control-flow.html
                - generic [ref=e58]: Control flow (ch 5-7)
                - generic [ref=e59]: soon
            - listitem [ref=e60]:
              - link "Data structures (ch 8-12) soon" [ref=e61] [cursor=pointer]:
                - /url: ../learn/javascript/data-structures.html
                - generic [ref=e63]: Data structures (ch 8-12)
                - generic [ref=e64]: soon
            - listitem [ref=e65]:
              - link "Functions (ch 9 + 13) soon" [ref=e66] [cursor=pointer]:
                - /url: ../learn/javascript/functions.html
                - generic [ref=e68]: Functions (ch 9 + 13)
                - generic [ref=e69]: soon
            - listitem [ref=e70]:
              - link "Async (ch 14-15) soon" [ref=e71] [cursor=pointer]:
                - /url: ../learn/javascript/async.html
                - generic [ref=e73]: Async (ch 14-15)
                - generic [ref=e74]: soon
            - listitem [ref=e75]:
              - link "OOP (ch 16-17) soon" [ref=e76] [cursor=pointer]:
                - /url: ../learn/javascript/oop.html
                - generic [ref=e78]: OOP (ch 16-17)
                - generic [ref=e79]: soon
            - listitem [ref=e80]:
              - link "JS notes" [ref=e81] [cursor=pointer]:
                - /url: ../notes.html
                - img [ref=e83]
                - generic [ref=e87]: JS notes
        - generic [ref=e88]:
          - button "TypeScript" [expanded] [ref=e89] [cursor=pointer]:
            - img [ref=e90]
            - generic [ref=e93]: TypeScript
            - img [ref=e94]
          - list [ref=e96]:
            - listitem [ref=e97]:
              - link "Overview" [ref=e98] [cursor=pointer]:
                - /url: ../learn/typescript/index.html
                - img [ref=e100]
                - generic [ref=e103]: Overview
            - listitem [ref=e104]:
              - link "Setup + basics soon" [ref=e105] [cursor=pointer]:
                - /url: ../learn/typescript/setup.html
                - generic [ref=e107]: Setup + basics
                - generic [ref=e108]: soon
            - listitem [ref=e109]:
              - link "Types deep dive soon" [ref=e110] [cursor=pointer]:
                - /url: ../learn/typescript/types.html
                - generic [ref=e112]: Types deep dive
                - generic [ref=e113]: soon
            - listitem [ref=e114]:
              - link "Interfaces soon" [ref=e115] [cursor=pointer]:
                - /url: ../learn/typescript/interfaces.html
                - generic [ref=e117]: Interfaces
                - generic [ref=e118]: soon
            - listitem [ref=e119]:
              - link "Enums soon" [ref=e120] [cursor=pointer]:
                - /url: ../learn/typescript/enums.html
                - generic [ref=e122]: Enums
                - generic [ref=e123]: soon
            - listitem [ref=e124]:
              - link "Generics soon" [ref=e125] [cursor=pointer]:
                - /url: ../learn/typescript/generics.html
                - generic [ref=e127]: Generics
                - generic [ref=e128]: soon
            - listitem [ref=e129]:
              - link "Access modifiers + classes soon" [ref=e130] [cursor=pointer]:
                - /url: ../learn/typescript/classes.html
                - generic [ref=e132]: Access modifiers + classes
                - generic [ref=e133]: soon
        - generic [ref=e134]:
          - button "Playwright fundamentals" [expanded] [ref=e135] [cursor=pointer]:
            - img [ref=e136]
            - generic [ref=e139]: Playwright fundamentals
            - img [ref=e140]
          - list [ref=e142]:
            - listitem [ref=e143]:
              - link "Curriculum hub" [ref=e144] [cursor=pointer]:
                - /url: ../learn/playwright-fundamentals/index.html
                - generic [ref=e146]: Curriculum hub
            - listitem [ref=e147]:
              - link "Multiple Element Filter" [ref=e148] [cursor=pointer]:
                - /url: ../multiple_element_filter.html
                - img [ref=e150]
                - generic [ref=e153]: Multiple Element Filter
            - listitem [ref=e154]:
              - link "Web Table Directory" [ref=e155] [cursor=pointer]:
                - /url: ../webtable.html
                - img [ref=e157]
                - generic [ref=e162]: Web Table Directory
            - listitem [ref=e163]:
              - link "QA Profile Form" [ref=e164] [cursor=pointer]:
                - /url: ../tables/practice.html
                - img [ref=e166]
                - generic [ref=e169]: QA Profile Form
            - listitem [ref=e170]:
              - link "Companies Table" [ref=e171] [cursor=pointer]:
                - /url: ../tables/webtable.html
                - img [ref=e173]
                - generic [ref=e176]: Companies Table
            - listitem [ref=e177]:
              - link "Tall Buildings Table" [ref=e178] [cursor=pointer]:
                - /url: ../tables/webtable1.html
                - img [ref=e180]
                - generic [ref=e182]: Tall Buildings Table
            - listitem [ref=e183]:
              - link "Custom Dropdowns" [ref=e184] [cursor=pointer]:
                - /url: ../tables/dropdowns.html
                - img [ref=e186]
                - generic [ref=e189]: Custom Dropdowns
            - listitem [ref=e190]:
              - link "Select Box Variants" [ref=e191] [cursor=pointer]:
                - /url: ../tables/select-boxes.html
                - img [ref=e193]
                - generic [ref=e196]: Select Box Variants
            - listitem [ref=e197]:
              - link "Sortable Admin Table" [ref=e198] [cursor=pointer]:
                - /url: ../tables/sortable.html
                - img [ref=e200]
                - generic [ref=e204]: Sortable Admin Table
            - listitem [ref=e205]:
              - link "Cricket Scorecard" [ref=e206] [cursor=pointer]:
                - /url: ../tables/scorecard.html
                - img [ref=e208]
                - generic [ref=e211]: Cricket Scorecard
            - listitem [ref=e212]:
              - link "Frames overview" [ref=e213] [cursor=pointer]:
                - /url: ../frames/index.html
                - img [ref=e215]
                - generic [ref=e217]: Frames overview
            - listitem [ref=e218]:
              - link "Multi-frame frameset" [ref=e219] [cursor=pointer]:
                - /url: ../frames/multi-frames.html
                - img [ref=e221]
                - generic [ref=e226]: Multi-frame frameset
            - listitem [ref=e227]:
              - link "Nested iframes" [ref=e228] [cursor=pointer]:
                - /url: ../frames/nested-iframes.html
                - img [ref=e230]
                - generic [ref=e234]: Nested iframes
            - listitem [ref=e235]:
              - link "Courses frameset" [ref=e236] [cursor=pointer]:
                - /url: ../frames/courses-frameset.html
                - img [ref=e238]
                - generic [ref=e240]: Courses frameset
            - listitem [ref=e241]:
              - link "SVG locators" [ref=e242] [cursor=pointer]:
                - /url: ../widgets/svg.html
                - img [ref=e244]
                - generic [ref=e248]: SVG locators
            - listitem [ref=e249]:
              - link "Shadow DOM" [ref=e250] [cursor=pointer]:
                - /url: ../widgets/shadow-dom.html
                - img [ref=e252]
                - generic [ref=e254]: Shadow DOM
            - listitem [ref=e255]:
              - link "Calendar / date picker" [ref=e256] [cursor=pointer]:
                - /url: ../widgets/calendar.html
                - img [ref=e258]
                - generic [ref=e260]: Calendar / date picker
            - listitem [ref=e261]:
              - link "Drag and drop" [ref=e262] [cursor=pointer]:
                - /url: ../widgets/dnd.html
                - generic [ref=e264]: Drag and drop
            - listitem [ref=e265]:
              - link "Toasts and notifications" [ref=e266] [cursor=pointer]:
                - /url: ../widgets/toasts.html
                - generic [ref=e268]: Toasts and notifications
            - listitem [ref=e269]:
              - link "Native dialogs" [ref=e270] [cursor=pointer]:
                - /url: ../widgets/dialogs.html
                - img [ref=e272]
                - generic [ref=e274]: Native dialogs
            - listitem [ref=e275]:
              - link "Hover menus" [ref=e276] [cursor=pointer]:
                - /url: ../widgets/hover-menu.html
                - img [ref=e278]
                - generic [ref=e280]: Hover menus
            - listitem [ref=e281]:
              - link "Right-click menu" [ref=e282] [cursor=pointer]:
                - /url: ../widgets/context-menu.html
                - img [ref=e284]
                - generic [ref=e286]: Right-click menu
            - listitem [ref=e287]:
              - link "Keyboard navigation" [ref=e288] [cursor=pointer]:
                - /url: ../widgets/keyboard-form.html
                - img [ref=e290]
                - generic [ref=e293]: Keyboard navigation
            - listitem [ref=e294]:
              - link "Windows and Tabs" [ref=e295] [cursor=pointer]:
                - /url: ../widgets/windows-tabs.html
                - generic [ref=e297]: Windows and Tabs
            - listitem [ref=e298]:
              - link "Upload and Download" [ref=e299] [cursor=pointer]:
                - /url: ../widgets/upload-download.html
                - generic [ref=e301]: Upload and Download
            - listitem [ref=e302]:
              - link "Scroll" [ref=e303] [cursor=pointer]:
                - /url: ../widgets/scroll.html
                - img [ref=e305]
                - generic [ref=e308]: Scroll
            - listitem [ref=e309]:
              - link "Assertions (expect)" [ref=e310] [cursor=pointer]:
                - /url: ../widgets/expect.html
                - img [ref=e312]
                - generic [ref=e314]: Assertions (expect)
            - listitem [ref=e315]:
              - link "Test modifiers, hooks, data" [ref=e316] [cursor=pointer]:
                - /url: ../widgets/test-modifiers.html
                - generic [ref=e318]: Test modifiers, hooks, data
            - listitem [ref=e319]:
              - link "Data-driven + POM" [ref=e320] [cursor=pointer]:
                - /url: ../widgets/data-driven.html
                - img [ref=e322]
                - generic [ref=e326]: Data-driven + POM
            - listitem [ref=e327]:
              - link "Network interception" [ref=e328] [cursor=pointer]:
                - /url: ../network/intercept.html
                - img [ref=e330]
                - generic [ref=e332]: Network interception
            - listitem [ref=e333]:
              - link "TTACart demo" [ref=e334] [cursor=pointer]:
                - /url: ../ttacart/index.html
                - img [ref=e336]
                - generic [ref=e340]: TTACart demo
            - listitem [ref=e341]:
              - link "TTAStays booking" [ref=e342] [cursor=pointer]:
                - /url: ../booking/index.html
                - img [ref=e344]
                - generic [ref=e347]: TTAStays booking
            - listitem [ref=e348]:
              - link "Advance Playwright framework" [ref=e349] [cursor=pointer]:
                - /url: ../advance-framework.html
                - img [ref=e351]
                - generic [ref=e354]: Advance Playwright framework
        - generic [ref=e355]:
          - button "Playwright API Testing" [expanded] [ref=e356] [cursor=pointer]:
            - img [ref=e357]
            - generic [ref=e360]: Playwright API Testing
            - img [ref=e361]
          - list [ref=e363]:
            - listitem [ref=e364]:
              - link "Overview" [ref=e365] [cursor=pointer]:
                - /url: ../learn/playwright-api/index.html
                - img [ref=e367]
                - generic [ref=e370]: Overview
            - listitem [ref=e371]:
              - link "CRUD basics" [ref=e372] [cursor=pointer]:
                - /url: ../learn/playwright-api/crud.html
                - generic [ref=e374]: CRUD basics
            - listitem [ref=e375]:
              - link "Auth + Schema" [ref=e376] [cursor=pointer]:
                - /url: ../learn/playwright-api/auth-schema.html
                - generic [ref=e378]: Auth + Schema
            - listitem [ref=e379]:
              - link "Network monitoring" [ref=e380] [cursor=pointer]:
                - /url: ../learn/playwright-api/network.html
                - generic [ref=e382]: Network monitoring
        - generic [ref=e383]:
          - button "Playwright BDD (Cucumber)" [expanded] [ref=e384] [cursor=pointer]:
            - img [ref=e385]
            - generic [ref=e389]: Playwright BDD (Cucumber)
            - img [ref=e390]
          - list [ref=e392]:
            - listitem [ref=e393]:
              - link "Overview" [ref=e394] [cursor=pointer]:
                - /url: ../learn/playwright-cucumber/index.html
                - img [ref=e396]
                - generic [ref=e399]: Overview
            - listitem [ref=e400]:
              - link "Setup + first run" [ref=e401] [cursor=pointer]:
                - /url: ../learn/playwright-cucumber/setup.html
                - generic [ref=e403]: Setup + first run
            - listitem [ref=e404]:
              - link "Data-driven" [ref=e405] [cursor=pointer]:
                - /url: ../learn/playwright-cucumber/data-driven.html
                - generic [ref=e407]: Data-driven
            - listitem [ref=e408]:
              - link "CI + tags + env" [ref=e409] [cursor=pointer]:
                - /url: ../learn/playwright-cucumber/ci-tags-env.html
                - generic [ref=e411]: CI + tags + env
        - generic [ref=e412]:
          - button "Playwright DevOps" [expanded] [ref=e413] [cursor=pointer]:
            - img [ref=e414]
            - generic [ref=e419]: Playwright DevOps
            - img [ref=e420]
          - list [ref=e422]:
            - listitem [ref=e423]:
              - link "NPM Registry (JFrog/Nexus)" [ref=e424] [cursor=pointer]:
                - /url: ../learn/playwright-registry/index.html
                - generic [ref=e426]: NPM Registry (JFrog/Nexus)
            - listitem [ref=e427]:
              - link "Docker setup" [ref=e428] [cursor=pointer]:
                - /url: ../learn/playwright-docker/index.html
                - generic [ref=e430]: Docker setup
            - listitem [ref=e431]:
              - link "Sharding multi-container" [ref=e432] [cursor=pointer]:
                - /url: ../learn/playwright-shard/index.html
                - generic [ref=e434]: Sharding multi-container
        - generic [ref=e435]:
          - button "Playwright AI" [expanded] [ref=e436] [cursor=pointer]:
            - img [ref=e437]
            - generic [ref=e441]: Playwright AI
            - img [ref=e442]
          - list [ref=e444]:
            - listitem [ref=e445]:
              - link "Curriculum hub" [ref=e446] [cursor=pointer]:
                - /url: ../learn/playwright-ai-agents/index.html
                - generic [ref=e448]: Curriculum hub
            - listitem [ref=e449]:
              - link "Framework + AI (V2)" [ref=e450] [cursor=pointer]:
                - /url: ../advance-framework-ai.html
                - generic [ref=e452]: Framework + AI (V2)
            - listitem [ref=e453]:
              - link "TTACart + AI live demo" [ref=e454] [cursor=pointer]:
                - /url: ../ttacart-ai/index.html
                - generic [ref=e456]: TTACart + AI live demo
            - listitem [ref=e457]:
              - link "TTA AI Chat sandbox" [ref=e458] [cursor=pointer]:
                - /url: ../ai-chat/index.html
                - generic [ref=e460]: TTA AI Chat sandbox
        - generic [ref=e461]:
          - button "Playwright MCP" [expanded] [ref=e462] [cursor=pointer]:
            - img [ref=e463]
            - generic [ref=e468]: Playwright MCP
            - img [ref=e469]
          - list [ref=e471]:
            - listitem [ref=e472]:
              - link "Curriculum hub" [ref=e473] [cursor=pointer]:
                - /url: ../learn/playwright-mcp/index.html
                - generic [ref=e475]: Curriculum hub
        - generic [ref=e476]:
          - button "Playwright CLI" [expanded] [ref=e477] [cursor=pointer]:
            - img [ref=e478]
            - generic [ref=e481]: Playwright CLI
            - img [ref=e482]
          - list [ref=e484]:
            - listitem [ref=e485]:
              - link "Curriculum hub" [ref=e486] [cursor=pointer]:
                - /url: ../learn/playwright-cli/index.html
                - generic [ref=e488]: Curriculum hub
            - listitem [ref=e489]:
              - link "SnapLocator (Chrome ext)" [ref=e490] [cursor=pointer]:
                - /url: ../snaplocator.html
                - img [ref=e492]
                - generic [ref=e495]: SnapLocator (Chrome ext)
      - generic [ref=e496]:
        - generic [ref=e497]: © The Testing Academy · 2026
        - button "Toggle dark mode" [ref=e498] [cursor=pointer]:
          - img [ref=e499]
    - generic [ref=e501]:
      - banner [ref=e502]:
        - button "Open sidebar" [ref=e503] [cursor=pointer]:
          - img [ref=e504]
        - generic [ref=e506]:
          - link "Practice" [ref=e507] [cursor=pointer]:
            - /url: ../index.html
          - img [ref=e508]
          - generic [ref=e510]: Widgets
          - img [ref=e511]
          - strong [ref=e513]: Native dialogs
        - generic [ref=e514]:
          - generic [ref=e515] [cursor=pointer]:
            - checkbox "Locator markers" [checked] [ref=e516]
            - generic [ref=e517]: Locator markers
          - generic [ref=e518]: alert · confirm · prompt
          - button "Toggle dark mode" [ref=e519] [cursor=pointer]:
            - img [ref=e520]
            - img [ref=e522]
      - main [ref=e525]:
        - region "Native dialogs & modal stacks" [ref=e526]:
          - generic [ref=e527]: Widget practice · Dialogs
          - heading "Native dialogs & modal stacks" [level=1] [ref=e529]:
            - text: Native
            - emphasis [ref=e530]: dialogs
            - text: "& modal stacks"
          - paragraph [ref=e531]:
            - text: Three browser-native dialogs (
            - code [ref=e532]: alert
            - text: /
            - code [ref=e533]: confirm
            - text: /
            - code [ref=e534]: prompt
            - text: ) plus a custom modal that supports stacking and Escape-to-close. Native dialogs are intercepted by Playwright via
            - code [ref=e535]: page.on('dialog', ...)
            - text: ; custom modals are just DOM you query normally.
        - generic [ref=e536]:
          - generic [ref=e537]:
            - article [ref=e538]:
              - heading "① Browser-native dialogs" [level=2] [ref=e539]
              - paragraph [ref=e540]:
                - text: These call the browser's
                - code [ref=e541]: alert()
                - text: /
                - code [ref=e542]: confirm()
                - text: /
                - code [ref=e543]: prompt()
                - text: . Playwright must register a dialog handler before clicking.
              - generic [ref=e544]:
                - button "Show alert" [ref=e545] [cursor=pointer]
                - button "Show confirm" [ref=e546] [cursor=pointer]
                - button "Show prompt" [ref=e547] [cursor=pointer]
                - button "Stage beforeunload" [ref=e548] [cursor=pointer]
              - generic [ref=e549]:
                - generic [ref=e550]:
                  - generic [ref=e551]: data-testid
                  - text: =show-alert / show-confirm / show-prompt / show-beforeunload
                - generic [ref=e552]:
                  - generic [ref=e553]: handler
                  - text: =page.on('dialog', d => d.accept(...) | d.dismiss())
                - generic [ref=e554]:
                  - generic [ref=e555]: output
                  - text: =data-testid=dialog-output
              - generic [ref=e556]: "{ \"type\": \"prompt\", \"value\": \"Vishal\", \"at\": \"8:28:34 PM\" }"
            - article [ref=e557]:
              - heading "② Custom modal — focus trap + Escape" [level=2] [ref=e558]
              - paragraph [ref=e559]:
                - text: A regular DOM modal — visible via
                - code [ref=e560]: data-testid="modal-confirm"
                - text: . Click
                - emphasis [ref=e561]: Open another
                - text: to stack a second one and confirm Playwright finds the topmost.
              - generic [ref=e562]:
                - button "Open custom modal" [ref=e563] [cursor=pointer]
                - button "Open stacked modal" [ref=e564] [cursor=pointer]
              - generic [ref=e565]:
                - generic [ref=e566]:
                  - generic [ref=e567]: data-testid
                  - text: =open-modal / open-stacked / modal-confirm / modal-stacked / modal-cancel / modal-confirm-action
                - generic [ref=e568]:
                  - generic [ref=e569]: role
                  - text: =dialog · aria-modal=true
                - generic [ref=e570]:
                  - generic [ref=e571]: keys
                  - text: =Escape closes top modal
              - generic [ref=e572]: "{ \"action\": \"open\", \"id\": \"modal-confirm-backdrop\", \"stackSize\": 1 }"
          - complementary [ref=e573]:
            - generic [ref=e574]:
              - heading "What students should practise" [level=3] [ref=e575]
              - list [ref=e576]:
                - listitem [ref=e577]:
                  - text: Register a one-shot
                  - code [ref=e578]: page.once('dialog', ...)
                  - text: before clicking Show alert; assert the message.
                - listitem [ref=e579]:
                  - text: Use
                  - code [ref=e580]: dialog.dismiss()
                  - text: on the confirm and verify the page logs
                  - code [ref=e581]: "dismissed: true"
                  - text: .
                - listitem [ref=e582]:
                  - text: Use
                  - code [ref=e583]: dialog.accept('Hello')
                  - text: on the prompt and assert the output reflects your value.
                - listitem [ref=e584]: Open the custom modal, fill the input, press Enter, and assert the output JSON.
                - listitem [ref=e585]: Stack a second modal, press Escape, and confirm only the top one closed.
            - group [ref=e586]:
              - generic "Playwright solution Native dialog handlers + custom modal interaction. Show solution" [ref=e587] [cursor=pointer]:
                - img [ref=e589]
                - generic [ref=e591]:
                  - strong [ref=e592]: Playwright solution
                  - generic [ref=e593]: Native dialog handlers + custom modal interaction.
                - generic [ref=e594]: Show solution
        - region "JavaScript Alerts" [ref=e595]:
          - generic [ref=e596]: Mini practice · Classic 3-button drill
          - heading "JavaScript Alerts" [level=2] [ref=e598]:
            - text: JavaScript
            - emphasis [ref=e599]: Alerts
          - paragraph [ref=e600]:
            - text: The textbook drill — three buttons, three native dialogs, one result line.
            - strong [ref=e601]: Alert
            - text: ·
            - strong [ref=e602]: Confirm
            - text: ·
            - strong [ref=e603]: Prompt
            - text: . Hook a Playwright
            - code [ref=e604]: page.on('dialog', …)
            - text: handler
            - emphasis [ref=e605]: before
            - text: the click, then assert the
            - code [ref=e606]: data-testid="alerts-result"
            - text: text matches.
        - region "JavaScript Alerts mini practice" [ref=e607]:
          - generic [ref=e608]:
            - heading "Click the button" [level=2] [ref=e609]
            - paragraph [ref=e610]: Each button fires its native dialog. The result line updates after you accept / dismiss / enter text.
            - generic [ref=e611]:
              - generic [ref=e612]:
                - generic [ref=e613]: id
                - text: =js-alert · js-confirm · js-prompt · alerts-result
              - generic [ref=e614]:
                - generic [ref=e615]: data-testid
                - text: =js-alert / js-confirm / js-prompt / alerts-result
              - generic [ref=e616]:
                - generic [ref=e617]: messages
                - text: ": 'I am a JS Alert' · 'I am a JS Confirm' · 'I am a JS prompt'"
            - generic [ref=e618]:
              - button "Click for JS Alert" [ref=e619] [cursor=pointer]
              - button "Click for JS Confirm" [ref=e620] [cursor=pointer]
              - button "Click for JS Prompt" [ref=e621] [cursor=pointer]
            - paragraph [ref=e622]: "Result: —"
          - complementary [ref=e623]:
            - generic [ref=e624]:
              - heading "What to practise" [level=3] [ref=e625]
              - list [ref=e626]:
                - listitem [ref=e627]:
                  - text: Register
                  - code [ref=e628]: page.once('dialog', d => d.accept())
                  - text: before clicking Click for JS Alert; assert result reads
                  - code [ref=e629]: "\"You successfully clicked an alert\""
                  - text: .
                - listitem [ref=e630]:
                  - text: Confirm — try
                  - code [ref=e631]: accept()
                  - text: first, then re-run with
                  - code [ref=e632]: dismiss()
                  - text: ; assert result is
                  - code [ref=e633]: "\"You clicked: Ok\""
                  - text: vs
                  - code [ref=e634]: "\"You clicked: Cancel\""
                  - text: .
                - listitem [ref=e635]:
                  - text: Prompt —
                  - code [ref=e636]: d.accept('Aarav')
                  - text: ; assert result is
                  - code [ref=e637]: "\"You entered: Aarav\""
                  - text: .
                - listitem [ref=e638]:
                  - text: Prompt dismiss —
                  - code [ref=e639]: d.dismiss()
                  - text: ; assert result is
                  - code [ref=e640]: "\"You entered: null\""
                  - text: .
                - listitem [ref=e641]:
                  - text: Read the
                  - code [ref=e642]: dialog.type()
                  - text: and
                  - code [ref=e643]: dialog.message()
                  - text: values to verify exactly what JS sent.
            - group [ref=e644]:
              - 'generic "Playwright solution 4 cases: alert, confirm OK, prompt with text, prompt dismiss. Show solution" [ref=e645] [cursor=pointer]':
                - img [ref=e647]
                - generic [ref=e649]:
                  - strong [ref=e650]: Playwright solution
                  - generic [ref=e651]: "4 cases: alert, confirm OK, prompt with text, prompt dismiss."
                - generic [ref=e652]: Show solution
  - dialog "Confirm your name" [ref=e654]:
    - heading "Confirm your name" [level=3] [ref=e655]
    - paragraph [ref=e656]:
      - text: This is a regular DOM modal — Playwright can
      - code [ref=e657]: fill
      - text: the input and click the buttons normally.
    - generic [ref=e658]:
      - generic [ref=e659]: Name
      - textbox "Name" [active] [ref=e660]:
        - /placeholder: Aarav Sharma
        - text: VishalDixit
    - generic [ref=e661]:
      - button "Cancel" [ref=e662] [cursor=pointer]
      - button "Confirm" [ref=e663] [cursor=pointer]
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
  51 |     await page.getByTestId('open-modal').click();
> 52 |     await page.getByTestId('open-stacked').click();
     |                                            ^ Error: locator.click: Test timeout of 30000ms exceeded.
  53 |     await page.keyboard.press('Escape');
  54 |     await expect(page.getByTestId('modal-stacked')).toBeHidden();
  55 |     await expect(page.getByTestId('modal-confirm')).toBeVisible();
  56 | 
  57 | 
  58 | 
  59 | })
```