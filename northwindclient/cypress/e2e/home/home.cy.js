/// <reference types="cypress" />

describe('Test front end', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3344')
  })

  it('it should load home', () => {
    cy.get('h1').should('have.text', 'Customer List')
  })

})
