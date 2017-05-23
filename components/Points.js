import React from 'react'

class Points extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {count: this.props.count}
  }
  render () {
    return (
      <div
        onClick={this.props.onClick}
      >{`${this.props.count}`}</div>
    )
  }
}

Points.propTypes = {
  increase: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func
}

Points.defaultProps = {
  onClick: () => {}
}

export default Points
