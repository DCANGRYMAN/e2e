import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('eu acesso a página do Google', () => {
  cy.visit('https://www.google.com');
});

When('eu digito {string} na busca e aperto enter', (texto) => {
  cy.get('textarea[name="q"]').type(`${texto}{enter}`);
});

Then('os resultados da busca devem aparecer', () => {
  cy.get('#search').should('be.visible');
});
