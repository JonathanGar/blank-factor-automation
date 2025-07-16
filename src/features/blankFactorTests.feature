Feature: Example Feature tests for Blankfactor website

  Scenario: User should be able to copy the text from Machine Learning Card section
    Given I navigate to the index page
    When I accept the site policy
      And I move the mouse over the "Industries Menu Trigger"
      And I click on the "Retirement and Health Link"
      And I am on the "Retirement and Wealth" page
      And I scroll to the section "Powering Innovation In Retirement Services"
      And I move the mouse over the "AI and Machine Learning Card"
      And I copy the text from the "AI and Machine Learning Card Text"
    Then I expect the text captured to contain "Automate your operations"

  Scenario: Validate the Contact page URL and title
    Given I navigate to the index page
    When I accept the site policy
      And I move the mouse over the "Industries Menu Trigger"
      And I click on the "Retirement and Health Link"
      And I am on the "Retirement and Wealth" page
      And I scroll to the footer
      And I click on the "Let's Get Started button"
      And I am on the "Contact" page
    Then I verify the page URL and title once the contact page is loaded
  