/// <reference types="cypress" />

context('W3Schools', () => {
  beforeEach(() => {
    cy.visit('https://www.w3schools.com/')
  })

  it('Clicking Colour Picker in W3Schools', () => {
    cy.findAllByAltText("Colorpicker").click();
  })

})
