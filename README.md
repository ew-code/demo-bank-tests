# demo-bank-tests

# Test Automation training form jaktestowac.pl 

## Links

- course <https://jaktestowac.pl/course/playwright-wprowadzenie/>
- test site <https://demo-bank.vercel.app/>  
if link broken check <https://jaktestowac.pl/lesson/pw1s01l01/>

- code repository <https://github.com/jaktestowac/playwright_automatyzacja_wprowadzenie>

## Commands

- check `NodeJS` version
`node -v`

- new project with Playwright
`npm init playwright@latest`

- record tests for given site
`npx playwright codegen https://demo-bank.vercel.app/`

- run tests without browser GUI
`npx playwright test`

- run tests with browser GUI
`npx playwright test --headed`

- view report
`npx playwright show-report`

- run Trace Viewer on zip file
`npx playwright show-trace trace.zip`

- Runs the end-to-end tests.
`npx playwright test`

 - Starts the interactive UI mode.
`npx playwright test --ui`

- Runs the tests only on Desktop Chrome.
`npx playwright test --project=chromium`

 - Runs the tests in a specific file.
`npx playwright test example`

- Runs the tests in debug mode.
`npx playwright test --debug`

- Auto generate tests with Codegen.
`npx playwright codegen`

- We suggest that you begin by typing:
`npx playwright test`

### Updating Playwright

- check if Playwright should be updated  
`npm outdated @playwright/test`
- update Playwright  
`npm i @playwright/test`
- update browsers  
`npx playwright install`
- verify Playwright version  
`npx @playwright/test --version`

## Playwright Config modifications

- config file `playwright.config.ts`
- disable browsers, i.e. Firefox  

    ```json
    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //   },
    // },
    ```

## Visual Studio Code
- Preview: for README.md
- Auto Save: in File -> Auto Save
- Open Timeline: file context menu

## Playwright snippets

- blur()
- fill() focus on element (without having to click on the item)

- import:

    ```typescript
    import { test, expect } from '@playwright/test';
    ```

- test:

    ```typescript
    test('test description', async ({ page }) => {
        //your code
    });
    ```

- describe:

    ```typescript
     test.describe('Group description', () => {
        //your code
     });
    ```

- running one given test: `test.only`

--------------------------------------------------------
- Arrange Act Assert
ctrl + shift + r
alt + strzałka    przeniesienie lini