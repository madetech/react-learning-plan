import React from 'react'

class PointsCount extends React.Component {
  formatString (count) {
    if (count === 1) {
      return `${count} point`
    } else {
      return `${count} points`
    }
  }
  render () {
    return (
      <div>{this.formatString(this.props.count)}</div>
    )
  }
}

export default PointsCount
