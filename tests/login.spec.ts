import { test, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';
import { LoginPage } from '../pages/login.page';

test.describe('User login to Demobank', () => {
  test.beforeEach(async ({ page }) => {
    // const url = "https://demo-bank.vercel.app/";
    // await page.goto(url);
    await page.goto('/'); //baseURL w playwright config
  });

  test('successful login with correct credentials', async ({ page }) => {
    const userID = loginData.userID;
    const userPassword = loginData.userPassword;
    const expectedUserName = 'Jan Demobankowy';

    const loginPage = new LoginPage(page);
    await loginPage.loginInput.fill(userID);
    await loginPage.passwordInput.fill(userPassword);

    // await page.getByTestId('login-input').fill(userID);
    // await page.getByTestId('password-input').fill(userPassword);
    // await page.getByTestId('login-button').click();

    await expect(page.getByTestId('user-name')).toHaveText(expectedUserName);
  });

  test('unsuccessful login with too short username', async ({ page }) => {
    const tooShortUserId = '1234567';
    const expectedErrorTooShortUserId = 'identyfikator ma min. 8 znaków';

    await page.getByTestId('login-input').fill(tooShortUserId);
    await page.getByTestId('password-input').click();

    await expect(page.getByTestId('error-login-id')).toHaveText(
      expectedErrorTooShortUserId,
    );
  });

  test('unsuccessful login with too short password', async ({ page }) => {
    const userID = loginData.userID;
    const toShortUserPassword = '1234567';
    const expectedToShortPassword = 'hasło ma min. 8 znaków';

    await page.getByTestId('login-input').fill(userID);
    await page.getByTestId('password-input').fill(toShortUserPassword);
    await page.getByTestId('password-input').blur();

    await expect(page.getByTestId('error-login-password')).toHaveText(
      expectedToShortPassword,
    );
  });
});
