import { When } from '@cucumber/cucumber';

import PageObject from '../../abstract/pageObject';
import pageMap from '../../pages/pageMap';
import { log } from '../../utils/helpers';
import { Page } from '@playwright/test';


When('I move the mouse over the {string}', async function (menuTriggerPath: string) {
  const currentPage: PageObject = this.currentPage;
  await currentPage.getElement(menuTriggerPath).hover();
});

When('I click on the {string}', async function (elementPath: string) {
  const currentPage: PageObject = this.currentPage;
  const element = currentPage.getElement(elementPath);
  await element.waitFor({ state: 'visible' })
  await element.click();
});

When('I am on the {string} page', async function (pageName: string) {
  const PageClass: new (page: Page, baseURL: string) => PageObject = pageMap[pageName];
  if (!PageClass) throw new Error(`No PageObject found for page name: ${pageName}`);
  const pageObject = new PageClass(this.page, this.baseURL);
  this.currentPage = pageObject;
});

When('I scroll to the section {string}', async function (elementPath: string) {
  const currentPage: PageObject = this.currentPage;
  const element = currentPage.getElement(elementPath);
  await element.scrollIntoViewIfNeeded();
});

When('I copy the text from the {string}', async function (elementPath: string) {
  const currentPage: PageObject = this.currentPage;
  const element = currentPage.getElement(elementPath);
  const textContent = await element.textContent();

  if (textContent) {
    this.clipboard = textContent.trim();
    log(`Copied text: ${this.clipboard}`);
  } else {
    throw new Error(`No text found in element: ${elementPath}`);
  }
});

When('I scroll to the footer', async function () {
  const currentPage: PageObject = this.currentPage;
  const footer = currentPage.page.locator('footer');
  await footer.scrollIntoViewIfNeeded();
});

When('I print the text of the title', async function () {
  const currentPage: PageObject = this.currentPage;
  const titleText = await currentPage.getTitle();

  if (titleText) {
    log(`Page title: ${titleText}`);
  } else {
    throw new Error(`No text found in page title`);
  }
});