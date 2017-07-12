import React from 'react'
import PropTypes from 'prop-types'

export default class DependencyInjector extends React.Component {
  getChildContext() {
    return {rand: Math.random};
  }


  render () {
    return this.props.children;
  }
}

DependencyInjector.childContextTypes = {
  rand: PropTypes.func
}
