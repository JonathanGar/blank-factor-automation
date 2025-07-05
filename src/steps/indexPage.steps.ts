import { Given, When } from '@cucumber/cucumber';

import IndexPage from '../pages/indexPage';


let indexPage: IndexPage;

Given('I navigate to the index page', async function () {
  indexPage = new IndexPage(this.page, this.baseURL);
  this.currentPage = indexPage;
  await indexPage.open();
});

When('I accept the site policy', async function () {
  await indexPage.consentComponent.acceptAllButton.click();
});

