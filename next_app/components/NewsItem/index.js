import React from 'react'
import PropTypes from 'prop-types';
import URL from 'url-parse'
import Upvote from '../Upvote'
import PointsCount from '../PointsCount'
import CommentCount from '../CommentCount'

class NewsItem extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      upvoted: this.props.upvoted,
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

  title () {
    const postType = this.props.url === undefined ? 'text' : 'link'

    if (postType === 'link') {
      const host = new URL(this.props.url).hostname;
      return <span><a href={this.props.url}>{this.props.title}</a> ({host})</span>
    } else {
      return <a href={`/item?id=${this.props.id}`}>{this.props.title}</a>
    }
  }

  render () {
    return (
      <div>
        <div>
          <Upvote onClick={this.handleClick.bind(this)} active={this.state.upvoted} />
          {this.title()}
        </div>
        <div>
          <PointsCount pointsCount={this.state.pointsCount} /> by {this.props.username}
          &nbsp;| <a href={`/item?id=${this.props.id}`}><CommentCount count={this.props.commentCount} /></a>
        </div>
      </div>
    )
  }
}

NewsItem.propTypes = {
  upvoted: PropTypes.bool.isRequired,
  pointsCount: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

export default NewsItem
