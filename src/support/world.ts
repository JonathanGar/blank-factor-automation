import { setWorldConstructor, Before, After, setDefaultTimeout, World, Status } from '@cucumber/cucumber';
import { chromium, firefox, webkit, Browser, Page, BrowserContext } from 'playwright';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';


dotenv.config();
setDefaultTimeout(60 * 1000);

const baseURL = process.env.BASE_URL;
const headless = process.env.HEADLESS === 'true';
const screenshots = process.env.SCREENSHOTS === 'true';
const snapshots = process.env.SNAPSHOTS === 'true';

class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  baseURL: string = baseURL;
}

setWorldConstructor(CustomWorld);

Before(async function (this: CustomWorld) {
  const browserName = process.env.BROWSER || 'chromium';
  const browserType = {
    chromium,
    firefox,
    webkit
  }[browserName];
  this.browser =  await browserType.launch({ headless: headless });
  this.context = await this.browser.newContext({
  });
  this.page = await this.context.newPage();
  await this.context.tracing.start({ screenshots: screenshots, snapshots: snapshots });
});

After(async function (this: CustomWorld) {
  await this.context.tracing.stop({ path: 'trace.zip' });
  if (this.page) await this.page.close();
  if (this.context) await this.context.close();
  if (this.browser) await this.browser.close();
});

After(async function (scenario) {
  if (scenario.result?.status === Status.FAILED) {
    const screenshot = await this.page.screenshot();
    const fileName = `screenshot-${Date.now()}.png`;
    const outputPath = path.join('reports/screenshots', fileName);
    fs.mkdirSync('reports/screenshots', { recursive: true });
    fs.writeFileSync(outputPath, screenshot);
    await this.attach(screenshot, 'image/png');
  }
});