const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given(`env data from {string}`, (EnvFile) => {
    cy.fixture(EnvFile).then((testdata) => {
        Cypress.env("selectors", testdata.selectors);
        Cypress.env("envInfo", testdata.envInfo);
    }).then(() => {
        cy.wrap(null).should(() => {
            expect(Cypress.env("envInfo")).to.not.be.undefined;
        });
    });
});

  
  

Given(`I set viewport to {string}`, (value) => {
    cy.viewport(value)
})

Given('variable {string} value is {string}', (variableName, variableValue) => {
    Cypress.env('variables', { ...Cypress.env('variables'), [variableName]: variableValue });

});



When(`I open url {string}`, (url) => {
    cy.visit(Cypress.env("envInfo")[url]);
})

When(`I type {string} in {string}`, (textString, selector) => {
    cy.get(Cypress.env("selectors")[selector]) 
        .type(textString);
})


When(`I clear {string} field`, (selector) => {
    cy.get(Cypress.env("selectors")[selector]).clear();
});


When(`I click on {string}`, (selector) => {
    cy.get(Cypress.env("selectors")[selector]).click();
});


When(`I check checkbox {string}`, (selector) => {
    cy.get(Cypress.env("selectors")[selector]).check();
});

When(`I uncheck checkbox {string}`, (selector) => {
    cy.get(Cypress.env("selectors")[selector]).uncheck();
});

When(`I select {string} from {string} dropdown`, (option, selector) => {
    cy.get(Cypress.env("selectors")[selector]).select(option);
});

When(`I wait for {int} seconds`, (seconds) => {
    cy.wait(seconds * 1000);
});

When(`I navigate back`, () => {
    cy.go("back")
})

When(`I navigate forward`, () => {
    cy.go("forward")
})

When(`I reload the page`, () => {
    cy.reload()
})

When(`I reload the page without cache`, () => {
    cy.reload(true)
})

When('I copy text value from {string} to variable {string}', (selector, variableName) => {
    cy.get(Cypress.env("selectors")[selector])
        .invoke('text')
        .then(textValue => {
            Cypress.env('variables', { ...Cypress.env('variables'), [variableName]: textValue.trim() });
        });
});

Then(`the {string} should be displayed`, (selector) => {
    cy.get(Cypress.env("selectors")[selector]).should("be.visible");
});

Then(`the {string} should not be displayed`, (selector) => {
    cy.get(Cypress.env("selectors")[selector]).should("not.exist");
});

Then(`the checkbox {string} should be checked`, (selector) => {
    cy.get(Cypress.env("selectors")[selector]).should("be.checked");
});

Then(`the checkbox {string} should be unchecked`, (selector) => {
    cy.get(Cypress.env("selectors")[selector]).should("not.be.checked");
});

Then(`the dropdown {string} should be selected in {string}`, (option, selector) => {
    cy.get(Cypress.env("selectors")[selector]).contains(option);
});

Then(`url {string} should be opened`, (url) => {
    cy.url().should("equal", url);
});

Then(`url {string} should not be opened`, (url) => {
    cy.url().should("not.equal", url)
})

Then(`url should contain {string}`, (url) => {
    cy.url().should("include", url)
})

Then(`url should not contain {string}`, (url) => {
    cy.url().should("not.include", url)
})

Then('print variable {string}', (variableName) => {
    const variableValue = Cypress.env('variables')[variableName];
    cy.log(`${variableValue}`);
});

Then('the value of variable {string} should be equal to {string}', (variableName, expectedValue) => {
    const variableValue = Cypress.env('variables')[variableName];
    expect(variableValue).to.equal(expectedValue);
});
