it('does NOT render "aria-label" if accessibleLabel is not passed', () => {
  const button = (
    <AccessibleButton>
      This button is accessible
    </AccessibleButton>
  )
  const { container } = render(button)
  const renderedButton = getByTestId(container, 'button-el')

  expect(renderedButton).not.toHaveAttribute('aria-label')
})

