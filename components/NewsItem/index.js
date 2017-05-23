import React from 'react'
import Upvote from './Upvote'
import CommentCount from './CommentCount'
import PointsCount from './PointsCount'

class NewsItem extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      upvoted: this.props.upvoted,
      commentCount: this.props.commentCount,
      pointsCount: this.props.pointsCount
    }
  }

  handleClick () {
    this.setState({
      upvoted: !this.state.upvoted
    })
    if (this.state.upvoted !== true) {
      this.setState({ pointsCount: this.state.pointsCount + 1 })
    }
  }

  render () {
    return (
      <div>
        <Upvote
          onClick={this.handleClick.bind(this)}
          active={this.state.upvoted}
        />
        <CommentCount count={this.state.commentCount} />
        <PointsCount count={this.state.pointsCount}
        />
        <CommentCount count={this.state.commentCount} />
      </div>
    )
  }
}

NewsItem.propTypes = {
  upvoted: React.PropTypes.bool.isRequired,
  commentCount: React.PropTypes.number.isRequired,
  pointsCount: React.PropTypes.number.isRequired
}

export default NewsItem
