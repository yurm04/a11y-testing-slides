import React from 'react'
import cx from 'classnames'
import Footer from './Footer'

const Layout = ({ children, hideFooter = false, theme = "dark", showWebsite = false, layout }) => (
  <div className={cx('layout', theme, layout)}>
    <div className="childContainer">
      { children }
    </div>
    {!hideFooter && (
      <Footer showWebsite={showWebsite} theme={theme} />
    )}
  </div>
)

export default Layout
