import { Page } from "@playwright/test";
import { BasePage } from "../BasePage";

//Common functions for login to application
export async function navigateToUrl(page: Page) {
  const base = new BasePage(page);
  await base.navigateToUrl()
}