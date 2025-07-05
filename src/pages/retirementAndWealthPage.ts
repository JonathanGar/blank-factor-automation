import PageObject from "../abstract/pageObject";

class RetirementAndWealthPage extends PageObject {
    _path = '/retirement-and-wealth';

    get poweringInnovationInRetirementServices() {
        return this.page.locator('h2.section-title:has-text("Powering innovation in retirement services")');
    }

    get aiAndMachineLearningCard() {
        return this.page.locator('.swiper-wrapper .flip-card').nth(2);
    }

    get aiAndMachineLearningCardText() {
        return this.aiAndMachineLearningCard.locator('.card-text.small');
    }

    get letsGetStartedButton() {
        return this.page.getByRole('link', { name: "Let's get started" });
    }
};

export default RetirementAndWealthPage;
