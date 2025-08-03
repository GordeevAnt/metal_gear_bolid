import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // У страницы заголовок "Главная"
  await expect(page).toHaveTitle(/Главная/);
});