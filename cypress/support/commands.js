Cypress.Commands.add('login', () => {
  cy.visit(`${Cypress.env('baseUrl')}/login`)
    .get('[ng-model="user.name"]').type(Cypress.env('username'))
    .get('[ng-model="user.password"]').type(Cypress.env('password'))
    .get('#login-form').submit()
  loggedIn()
})

const loggedIn=() => {
  cy.location('pathname').should('eq', '/employees')
    .get('#greetings')
    .should('be.visible')
    .should('have.text', `Hello ${Cypress.env('username')}`)
}