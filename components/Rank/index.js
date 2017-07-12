import React from 'react'
import PropTypes from 'prop-types'

class Rank extends React.Component {
  render () {
    return <span>{this.props.ranking}</span>
  }
}

Rank.propTypes = {
  ranking: PropTypes.number.isRequired
}

export default Rank
