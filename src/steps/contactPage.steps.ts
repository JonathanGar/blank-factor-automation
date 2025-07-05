import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

import ContactPage from '../pages/contactPage';
import { urlToRegex } from '../utils/helpers';


let contactPage: ContactPage;

Then('I verify the page URL and title once the contact page is loaded', async function () {
  contactPage = new ContactPage(this.page, this.baseURL);
  const urlString = contactPage.path;
  const urlRegex = urlToRegex(urlString);
  await expect(contactPage.page).toHaveURL(urlRegex);
  await expect(contactPage.page).toHaveTitle(contactPage.pageTitle);
});
