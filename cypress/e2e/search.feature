Feature: Pesquisa no Google

  Scenario: Pesquisar por uma palavra-chave no Google
    Given I open the Google search page
    When I type "Cypress" into the search field
    And I press enter
    Then I should see results related to Cypress
