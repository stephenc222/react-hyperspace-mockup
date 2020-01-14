import React from 'react'
import PropTypes from 'prop-types'

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

DottedLink.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  href: PropTypes.string,
  style: PropTypes.object
}

export default DottedLink