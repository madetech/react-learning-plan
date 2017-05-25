import React from 'react'

class Upvote extends React.Component {
  render () {
    const upvoteStyles = {
      color: this.props.active ? 'orange' : 'black',
      cursor: 'pointer'
    }

    return (
      <div
        onClick={this.props.onClick}
        style={upvoteStyles}
      >{'↑'}</div>
    )
  }
}

Upvote.propTypes = {
  active: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func
}

Upvote.defaultProps = {
  onClick: () => {}
}

export default Upvote
