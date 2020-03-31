const SlackSignupContainer = ({ submitEmail, errorMessage }) => {
  const [email, setEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [showError, setShowError] = useState(false)

  const validateEmailAddress = (e) => {
    // ... check to see if the email address is valid
    // ... if invalid showError = true
  }

  return (
    <form
      className="slack-form">
      <h2>Enter your email to join our Slack!</h2>
      <AccessibleInput 
        type="email"
        name="email"
        placeHolder="yuraima@useReact.com"
        onBlur={validateEmailAddress}
        className={showError ? 'error' : ''}
      />
      <AccessibleButton
        accessibleLabel="Submit email address"
        disabled={!isValidEmail}
        handleOnClick={submitEmail}>
        Submit
      </AccessibleButton>
      <AccessibleAlert 
        message={showError && errorMessage} />
    </form>
  )
}
