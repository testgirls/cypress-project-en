describe('sucess login scenarios', function(){
  it('logins with valid passwords', function(){
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa').click()

    cy.get('#flash').should('contain', "You logged into a secure area!")
    cy.url().should('eq', 'https://the-internet.herokuapp.com/secure')
  })
})

describe('unsucessfull test scenarios', function(){
  beforeEach(function(){
      cy.visit('https://the-internet.herokuapp.com/login')
  })

  it('fails login with invalid credentials', function(){
    cy.get('#username').type('anotheruser')
    cy.get('#password').type('blablabla')
    cy.get('.fa').click()

  cy.get('#flash').should('contain', "Your username is invalid!")
  cy.url().should('eq', 'https://the-internet.herokuapp.com/login')
  })

  it('fails login with blank password', function(){
    cy.get('#username').type('tomsmith')
    cy.get('.fa').click()

  cy.get('#flash').should('contain', "Your password is invalid!")
  cy.url().should('eq', 'https://the-internet.herokuapp.com/login')
  })

})
