import PageObject from '../abstract/pageObject';
import ConsentComponent from './components/consentComponent';

class IndexPage extends PageObject {
    _path = '/';

    consentComponent = new ConsentComponent('[data-cky-tag="notice"]', this.page);

    get industriesMenuTrigger() {
        return this.page.locator('.industries-mega-menu-wrap').getByRole('link', { name: 'Industries' });
    }
    
    get retirementAndLealthLink() {
        return this.page.getByRole('link', { name: 'Retirement and wealth' });
    }
};

export default IndexPage;
