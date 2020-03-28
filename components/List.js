import React from 'react'
import { Appear } from 'mdx-deck'

export default ({ children, appear = true, bullets = false }) => {

  function renderChildren() {
    return appear 
      ? (
        <Appear>
          {children}
        </Appear>
      )
      : children
  }

  return (
    <ul style={bullets ? {} : { listStyle: 'none'}}>
      {renderChildren()}
    </ul>
  )
}
