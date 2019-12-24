import React from 'react'

const DottedLink = ({
  text,
  href,
  style = { borderBottom: 'dotted 1px rgba(255, 255, 255, 0.35)' }
}) =>
  <span
    style={{ ...style }}
    onClick={() => window.open(href, '_blank')}
  >
    {text}
  </span>

export default DottedLink