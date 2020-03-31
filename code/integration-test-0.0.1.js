const AccessibleAlert = ({ message = '' }) => (
  <div className="visually-hidden">
    <p role="alert" data-testid="alert-message">{message}</p>
  </div>
)
