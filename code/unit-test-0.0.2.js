it('has the "aria-label" attribute set if an accessibleLabel is passed', () => {
  const ariaLabel = "Submit email to newsletter"
  const button = (
    <AccessibleButton
      accessibleLabel={ariaLabel}>
      👍
    </AccessibleButton>
  )
  const { container } = render(button)
  const renderedButton = getByTestId(container, 'button-el')

  expect(renderedButton).toHaveAttribute('aria-label', ariaLabel)
})
