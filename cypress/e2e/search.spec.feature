describe("ChatGPT e2e test", () => {
  it("Testa se a API Key foi carregada corretamente", () => {
    const apiKey = Cypress.env("OPENAI_API_KEY");
    cy.log("API Key: " + apiKey);
    expect(apiKey, "API Key carregada").to.not.be.undefined;
  });

  it("Pesquisa o significado da cor azul e envia com Enter", () => {
    cy.visit("https://www.google.com");
    cy.get("body").then(($body) => {
      if ($body.find('button:contains("Aceitar tudo")').length) {
        cy.contains("Aceitar tudo").click();
      }
    });

    cy.get('textarea[name="q"]').type("significado da cor azul{enter}");
    cy.get("#search").should("contain.text", "azul");
  });
});
