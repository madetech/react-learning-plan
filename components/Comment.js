import React from 'react'

class Comment extends React.Component {
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
      <comment>{ this.formatString(this.props.count) }</comment> 
    )
  }
}

export default Comment
