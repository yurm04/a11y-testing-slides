import React from 'react'
import Footer from './Footer'

const lightTheme = {
  backgroundColor: '#E5E5E5',
  width: '100vw',
  height: '100vh',
}

const themes = { dark: {}, light: lightTheme }

const Layout = ({ children, hideFooter = false, theme = "dark" }) => (
  <div className='layout' style={themes[theme]}>
    { children }
    HELLO
  </div>
)

export default Layout
