import React from 'react'

class CommentCount extends React.Component {
  formatString(count) {
    if(count === 1) {
      return `${count} comment`
    } else {
      return `${count} comments`
    }
  }

  render () {
    return (
      <span>
        {this.formatString(this.props.count)}
      </span>
    )
  }
}

CommentCount.defaultProps = {
  count: 0
}

export default CommentCount
