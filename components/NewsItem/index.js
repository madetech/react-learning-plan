import React from 'react'
import Upvote from '../Upvote'
import PointsCount from '../PointsCount'
import CommentCount from '../CommentCount'

class NewsItem extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      upvoted: this.props.upvoted,
      pointsCount: this.props.pointsCount,
      commentCount: this.props.commentCount
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
        <PointsCount count={this.state.pointsCount}
        />
        <CommentCount count={this.state.commentCount}
        />
      </div>
    )
  }
}

NewsItem.propTypes = {
  upvoted: React.PropTypes.bool.isRequired,
  pointsCount: React.PropTypes.number.isRequired,
  commentCount: React.PropTypes.number.isRequired
}

export default NewsItem
