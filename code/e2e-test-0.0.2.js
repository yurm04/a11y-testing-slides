describe("Accessibility tests", () => {
  // ...
  
  it('Slack sign up form alerts user of errors in form', () => {
    // ...
  })

  it('SlackContainer submits email address using keyboard', () => {
    cy.get('.accessible-input')
      .type('yuraima@useReact.nyc') // type email address
      .tab() // tab to the submit button
      .type('{enter}') // press the enter key to submit
    
    // check accessible alert for submit success message
    cy.get('.accessible-alert')
      .should('have.text', 'Email successfully submitted!')
  })

  it('Navigates to the "About Us" page and announces page title') {
    // ...
  }
})
