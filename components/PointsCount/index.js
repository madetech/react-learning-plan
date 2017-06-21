import React from 'react'
import PropTypes from 'prop-types'

class PointsCount extends React.Component {
  formatPointsString (count) {
    if (count === 1) {
      return `${count} point`
    } else {
      return `${count} points`
    }
  }
  render () {
    return (
      <span>{this.formatPointsString(this.props.pointsCount)}</span>
    )
  }
}

PointsCount.propTypes = {
  pointsCount: PropTypes.number.isRequired
}

export default PointsCount
