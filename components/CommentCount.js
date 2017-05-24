import React from 'react'

class CommentCount extends React.Component {
  formatString (count) {
    if (count == undefined) { count = 0 }

    if (count == 1) {
      return (count + " comment")
    } else {
      return (count + " comments")
    }
  }

  render () {
    return (
      <div>{ this.formatString(this.props.count) }</div> 
    )
  }
}

export default CommentCount
