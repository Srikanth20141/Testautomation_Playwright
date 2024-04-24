import { test, expect } from '@playwright/test'


test('Login OrangeHRM', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.locator("//button[@type='submit']").click();
  expect(page.getByRole('heading',{name:'Dashboard'})).toBeVisible();
});