import React from 'react'
import { Styled } from 'theme-ui'
import Bird from './TwitterBird'

const Footer = ({ showWebsite, theme = "dark" }) => (
  <footer className="footer">
    <Styled.a 
      className={`websiteLink ${!showWebsite && 'hideWebsite'}`}
      href="https://a11y-testing.yuraima.com">
        a11y-testing.yuraima.com
    </Styled.a>
    <div className="twitterContainer">
      <Bird theme={theme} />
      <Styled.a 
        className="twitterHandle"
        href="https://www.twitter.com/yurm04">
          @yurm04
      </Styled.a>
    </div>
  </footer>
)

export default Footer
