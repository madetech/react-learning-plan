import React from 'react'

class Upvote extends React.Component {
  render () {
    const upvoteStyles = {
      color: this.props.active ? 'orange' : 'black'
    }

    return (
      <div style={upvoteStyles}>{'↑'}</div>
    )
  }
}

Upvote.propTypes = {
  active: React.PropTypes.bool.isRequired
}

export default Upvote
