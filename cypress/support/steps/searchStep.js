import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor/steps';

Given('I open the Google search page', () => {
  cy.visit('https://www.google.com');
});

When('I type {string} into the search field', (searchTerm) => {
  cy.get('input[name="q"]').type(searchTerm);
});

When('I press enter', () => {
  cy.get('input[name="q"]').type('{enter}');
});

Then('I should see results related to {string}', (searchTerm) => {
  cy.contains(searchTerm).should('exist');
});
