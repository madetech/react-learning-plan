import React from 'react'

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
      <div>{this.formatPointsString(this.props.pointsCount)}</div>
    )
  }
}

export default PointsCount
