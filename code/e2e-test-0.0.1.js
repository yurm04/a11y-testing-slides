it('SlackContainer submits email address using keyboard', () => {
  cy.get('.accessible-input')
    .type('yuraima@useReact.nyc') // type email address
    .tab() // tab to the submit button
    .type('{enter}') // press the enter key to submit
  
  // check accessible alert for submit success message
  cy.get('.accessible-alert')
    .should('have.text', 'Email successfully submitted!')
})
