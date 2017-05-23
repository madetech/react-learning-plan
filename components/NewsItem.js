import React from 'react'
import Upvote from './Upvote'
import Comment from './Comment'

class NewsItem extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      upvoted: this.props.upvoted,
      commentCount: this.props.commentCount
    }
  }

  handleClick () {
    this.setState({
      upvoted: !this.state.upvoted
    })
  }

  render () {
    return (
      <div>
        <Upvote
          onClick={this.handleClick.bind(this)}
          active={this.state.upvoted}
        />
        <Comment count={this.state.commentCount} />
      </div>
    )
  }
}

NewsItem.propTypes = {
  upvoted: React.PropTypes.bool.isRequired,
  commentCount: React.PropTypes.number.isRequired
}

export default NewsItem
