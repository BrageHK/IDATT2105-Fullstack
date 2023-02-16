// https://docs.cypress.io/api/introduction/api.html

describe("Calculator testing", () => {
  it("visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Calculator");
  });
});
