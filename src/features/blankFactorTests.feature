Feature: Feature tests for Blankfactor technical test

  Scenario: Test automation part
    Given I navigate to the index page
    When I accept the site policy
      And I move the mouse over the "industriesMenuTrigger"
      And I click on the "retirementAndLealthLink"
      And I am on the "Retirement and Wealth" page
      And I scroll to the section "poweringInnovationInRetirementServices"
      And I move the mouse over the "aiAndMachineLearningCard"
      And I copy the text from the "aiAndMachineLearningCardText"
      And I scroll to the footer
      And I click on the "letsGetStartedButton"
      And I am on the "Contact" page
    Then I verify the page URL and title once the contact page is loaded
      And I print the text of the title