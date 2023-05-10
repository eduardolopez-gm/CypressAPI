/* eslint-disable no-undef */
/// <reference types="Cypress" />
describe('CRUD operations', () => {
  it('GET API testing Using Cypress ', () => {
    cy.request('GET', 'https://reqres.in/api/users?page=2').should((response) => {
      expect(response.status).to.eq(200)
    })
  })
  it('POST API testing Using Cypress ', () => {
    cy.request('POST', 'https://reqres.in/api/users', {
      name: 'Kailash P',
      job: 'QAAutomationLabs'
    }).should((response) => {
      expect(response.status).to.eq(201)
    })
  })
  it('PUT API testing Using Cypress', () => {
    cy.request('PUT', 'https://reqres.in/api/users/2', {
      name: 'QAAutomationLabs',
      job: 'QA Automation Engg'
    }).should((response) => {
      expect(response.status).to.eq(200)
    })
  })
  it('DELETE API testing Using Cypress ', () => {
    cy.request('DELETE', 'https://reqres.in/api/users/2').should((response) => {
      expect(response.status).to.eq(204)
    })
  })
})
