it('adds element for each click 5 times', function() {
  cy.visit('https://the-internet.herokuapp.com/add_remove_elements/')

  var i
  for (i = 0; i < 5; i++){
    cy.get('[onclick="addElement()"]').click()
  }

  cy.get('#elements > ').its('length').should('eq', 5)


})
