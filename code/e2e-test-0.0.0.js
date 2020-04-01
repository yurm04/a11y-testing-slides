describe("Accessibility tests", () => {
  beforeEach(() => {
    cy.visit("/")
      .get("main")
      .injectAxe()
  })
  it("Has no detectable accessibility violations on load", () => {
    // will check for accessibility violations
    cy.checkA11y()
  })
})
