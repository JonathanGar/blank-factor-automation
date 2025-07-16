import { Locator, Page } from '@playwright/test';
import { get } from 'lodash';

import { elementMap } from '../utils/elementNameMap';

abstract class PageObject {
    protected _page: Page;
    protected _baseURL: string;
    protected _path: string;

    constructor(page: Page, baseURL: string) {
        this._page = page;
        this._baseURL = baseURL;
    }

    get page() {
        return this._page;
    }

    get baseURL() {
        return this._baseURL;
    }

    get path() {
        return this._path;
    }

   setPage(page: Page) {
        this._page = page;
    }

    setBaseURL(baseURL: string) {
        this._baseURL = baseURL;
    }

    setPath(path: string) {
        this._path = path;
    }

    async open() {
        const loadPageTimeout = parseInt(process.env.LOAD_PAGE_TIMEOUT || '60000', 10);
        try {
            await new Promise(res => setTimeout(res, 2000));
            await this.page.goto(this._baseURL + this._path, { timeout: loadPageTimeout });
        } catch (e) {
            console.warn('First navigation failed, retrying...', e.message);
            await this.page.reload({ timeout: 60000 });
        }
    }

    async getTitle() {
        return await this.page.title();
    }

    async getH1() {
        return this.page.locator('h1');
    }

    getElement(elementName: string): Locator {
        const elementPath = elementMap[elementName] || elementName;
        const element = get(this, elementPath);
        if (!element) {
            throw new Error(`Element not found on current page: ${elementName}`);
        }        
        return element;
    }
};

export default PageObject;
