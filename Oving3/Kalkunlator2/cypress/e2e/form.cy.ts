describe('Kontaktskjema', () => {
  it('Can be submitted', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })

    cy.on('window:alert', (text) => {
      expect(text).to.equal('Takk for din tilbakemelding!');
    })
  
    cy.visit('/kontaktskjema')
    cy.get('input[name="navn"]').type('Test Navn')
    cy.get('input[name="epost"]').type('test@test.com')
    cy.get('textarea[name="emne"]').type('Test melding')
    cy.get('#rating').select('4')
    cy.get('#sendButton').click()
  })

  it("Can't be submitted if fields are empty", () => {
    cy.visit('/kontaktskjema')
    cy.get("#sendButton").should("be.disabled")
  })

  it("Can't be submitted if email is invalid", () => {
    cy.visit('/kontaktskjema')
    cy.get('input[name="navn"]').type('Test Navn')
    cy.get('input[name="epost"]').type('test')
    cy.get('textarea[name="emne"]').type('Test melding')
    cy.get('#rating').select('4')
    cy.get('#sendButton').should("be.disabled")
  })
})
