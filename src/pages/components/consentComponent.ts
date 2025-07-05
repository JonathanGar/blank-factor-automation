import Component from '../../abstract/component';

class ConsentComponent extends Component {
    get acceptAllButton() {
        return this.rootElement.locator('[data-cky-tag="accept-button"]');
    }
     
};  

export default ConsentComponent;
