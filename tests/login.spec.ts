import { test, expect } from '@playwright/test'


test.skip('Login OrangeHRM', async ({ page }) => {
  // const login = new loginPage(page);

  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.getByText('Forgot your password').click({ delay: 1000 });
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.locator("//button[@type='submit']").click();

  //await page.getByRole('heading').getByText('Dashboard')
  expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible({});
  expect(page.getByRole('paragraph', { name: 'Forgot your password? ' })).toBeVisible({});
  await page.waitForSelector('', { timeout: 5_000 });

  //await page.waitForSelector('#username', { state: 'attached' });
  await page.getByRole('checkbox').check();
});

test('screenshots ', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  //Element screenshot
  await page.getByAltText('company-branding').screenshot({ path: './screenshots/element.png' });
  // current page screenshot
  await page.screenshot({ path: './screenshots/page.png' });
  // full page screenshot
  await page.screenshot({ path: './screenshots/fullpage.png', fullPage: true });
});