import {randomString, randomDate} from '../support/helper'

describe('Create Employee Spec', () => {
  before('Login', () => {
    cy.login()
  })

  it('Create New Employee and Verify it is Created', () => {
    const firstName = randomString(4)
    const lastName = randomString(5)
    const email = `${firstName}.${lastName}@cafetownsend.com`
    
    cy
      // create Employee
      .get('#bAdd').click()
      .get('[ng-model="selectedEmployee.firstName"]').type(firstName)
      .get('[ng-model="selectedEmployee.lastName"]').type(lastName)
      .get('[ng-model="selectedEmployee.startDate"]').type(randomDate())
      .get('[ng-model="selectedEmployee.email"]').type(email)
      .get('.formFooter').click()
    
    // assert
      .get('#employee-list').should('contain', `${firstName} ${lastName}`)
  })
})