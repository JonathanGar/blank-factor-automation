import PageObject from '../abstract/pageObject';

class ContactPage extends PageObject {
    _path = '/contact/';

    private _pageTitle = "Contact | Blankfactor";

    get pageTitle() {
        return this._pageTitle;
    }

    get poweringInnovationInRetirementServices() {
        return this.page.locator('h2.section-title:has-text("Powering innovation in retirement services")');
    }
};

export default ContactPage;
