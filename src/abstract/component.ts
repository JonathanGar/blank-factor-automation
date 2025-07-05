import { Locator, Page } from '@playwright/test';

class Component {
    protected rootSelector: string;
    protected   rootElement: Locator;

    constructor(rootSelector: string, page: Page) {
        this.rootSelector = rootSelector;
        this.rootElement = page.locator(this.rootSelector);
    }
}

export default Component;
