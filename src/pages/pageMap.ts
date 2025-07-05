import IndexPage from './indexPage';
import RetirementAndWealthPage from './retirementAndWealthPage';
import ContactPage from './contactPage';
import PageObject from '../abstract/pageObject';
import { Page } from '@playwright/test';

const pageMap: Record<string,  new (page: Page, baseURL: string) => PageObject> = {
  'Index': IndexPage,
  'Retirement and Wealth': RetirementAndWealthPage,
  'Contact': ContactPage,
};
export default pageMap;