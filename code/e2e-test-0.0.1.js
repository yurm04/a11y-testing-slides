describe("Accessibility tests", () => {
  // ...
  
  it('Has alternative text set for all organizer images', () => {
    cy.get('ul.organizers-ul img')
      .should(($img) => {
        // should have 5 img elements
        expect($img).to.have.length(5)

        // get alt text values for each element
        const altValues = $img.map((i, el) => {
          return Cypress.$(el).attr('alt')
        })

        // there should be 5 alt text values
        expect(altValues).to.have.lengthOf(5)
      })
  })
})
