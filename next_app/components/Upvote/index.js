import React from 'react'
import PropTypes from 'prop-types';

class Upvote extends React.Component {
  render () {
    const upvoteStyles = {
      color: this.props.active ? 'orange' : 'black',
      cursor: 'pointer'
    }

    return (
      <span
        onClick={this.props.onClick}
        style={upvoteStyles}
      >{'↑'}</span>
    )
  }
}

Upvote.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func
}

Upvote.defaultProps = {
  onClick: () => {}
}

export default Upvote
