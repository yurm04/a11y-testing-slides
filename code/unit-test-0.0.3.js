it('can have focus', () => {
  const button = (
    <AccessibleButton>
      This button is accessible
    </AccessibleButton>
  )
  const { container } = render(button)
  const renderedButton = getByTestId(container, 'button-el')
  
  renderedButton.focus()
  expect(renderedButton).toHaveFocus()
})
