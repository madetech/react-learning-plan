import React from 'react'
import PropTypes from 'prop-types'

export default class Theme extends React.Component {
  getChildContext () {
    return { backgroundColor: this.props.backgroundColor }
  }

  render () {
    return this.props.children
  }
}

Theme.propTypes = {
  backgroundColor: PropTypes.string.isRequired
}

Theme.childContextTypes = {
  backgroundColor: PropTypes.string
}
