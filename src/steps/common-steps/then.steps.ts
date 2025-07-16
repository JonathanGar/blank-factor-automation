import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

import { log } from "../../utils/helpers";

Then('I expect the text captured to contain {string}', async function (expectedText: string) {
  if(this.clipboard) {
    expect(this.clipboard).toContain(expectedText);
  } else {
    log('There is not text in the clipboard');
  }
});