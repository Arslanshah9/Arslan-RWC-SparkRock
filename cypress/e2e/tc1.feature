Feature: Checkout Process
Scenario: Completing the checkout process

        # Login to the App
        Given env data from "sampleEnvData"
        When I open url "baseURL"
        And I type "standard_user" in "usernameField"
        And I type "secret_sauce" in "passwordField"
        And I click on "loginButton"
        Then the "addToCartButton" should be displayed

        # Add a product to the cart
        When I click on "addToCartButton"
        And I click on "cartIcon"
        Then the "itemInCart" should be displayed

        # Go to the next screen and see info details fields
        When I click on "checkoutButton"
        Then the "firstNameField" should be displayed
        And the "lastNameField" should be displayed
        And the "postalCodeField" should be displayed
        And the "continueButton" should be displayed

        # Fill in the fields and go to next page
        When I type "Arslan" in "firstNameField"
        And I type "Shah" in "lastNameField"
        And I type "65030" in "postalCodeField"
        And I click on "continueButton"
        Then the "finishButton" should be displayed

        # Complete the order
        When I click on "finishButton"
        Then the "completeConfirmation" should be displayed
        