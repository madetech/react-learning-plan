import React from 'react'
<<<<<<< HEAD:components/NewsItem.js
import Upvote from './Upvote'
<<<<<<< HEAD
import CommentCount from './CommentCount'
import Points from './Points'
=======
import PointsCount from './PointsCount'
>>>>>>> Rename to PointsCount, remove  and only increase on upvote
=======
import Upvote from '../Upvote'
import PointsCount from '../PointsCount'
>>>>>>> Move components into directories:components/NewsItem/index.js

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
