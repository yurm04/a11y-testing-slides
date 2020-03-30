const AccessibleButton = ({
  disabled = false,
  children, 
  type = "button", 
  handleOnClick, 
  accessibleLabel 
}) => (
  <div
    disabled={disabled}
    type={type}
    onClick={handleOnClick}
    data-testid='button-el'
    // only add an aria-label if an accessibleLabel is passed in props
    {...accessibleLabel && { 'aria-label': accessibleLabel }}
  >
    {children}
  </div>
)
