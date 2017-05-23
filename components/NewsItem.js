import React from 'react'
import Upvote from './Upvote'
import CommentCount from './CommentCount'
import Points from './Points'

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
      upvoted: !this.state.upvoted,
      count: this.state.count + 1
    })
  }

  render () {
    return (
      <div>
        <Upvote
          onClick={this.handleClick.bind(this)}
          active={this.state.upvoted}
        />
        <CommentCount count={this.state.commentCount} />
        <Points count={this.state.count}
        />
      </div>
    )
  }
}

NewsItem.propTypes = {
  upvoted: React.PropTypes.bool.isRequired,
  commentCount: React.PropTypes.number.isRequired
}

export default NewsItem
