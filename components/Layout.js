import React from 'react'
import Footer from './Footer'

const Layout = ({ children, hideFooter = false }) => (
  <div className="layout">
    { children }
    {!hideFooter && (
      <Footer />
    )}
  </div>
)

export default Layout
