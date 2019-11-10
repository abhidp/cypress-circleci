import { emp } from './helper'

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

Cypress.Commands.add('createEmployee', (filename) => {
	cy
		//write emp data to fixture 
		.writeFile(`cypress/fixtures/${filename}.json`, emp)
	
		.get('#bAdd').click()
    .get('[ng-model="selectedEmployee.firstName"]').type(emp.firstName)
    .get('[ng-model="selectedEmployee.lastName"]').type(emp.lastName)
    .get('[ng-model="selectedEmployee.startDate"]').type(emp.date)
    .get('[ng-model="selectedEmployee.email"]').type(emp.email)
    .get('.formFooter').click()
	
	empCreated()
})

const empCreated = () => {
	cy.get('#employee-list').should('contain', `${emp.firstName} ${emp.lastName}`)
}