describe('SlackSignupContainer', () => {

  // ... other tests

  it('renders visibly hidden alert on input blur without valid email', () => {
    const errorMessage = 'Please enter a valid email address'
    const { container } = render(<SlackSignup errorMessage={errorMessage} submitEmail={() => {}} />)
    const renderedInput = getByTestId(container, "input")
    const renderedAlert = getByTestId(container, "alert-message")
    
    /**
     * there should be no error message when the slack 
     * sign up component renders
     */
    renderedInput.focus()
    expect(renderedAlert).not.toHaveTextContent()

    /**
     * when we blur without a valid email address the
     * alert component should now contain our error message
     */
    renderedInput.blur()
    expect(renderedAlert).toHaveTextContent(errorMessage)
  })

  // ... other tests

})
