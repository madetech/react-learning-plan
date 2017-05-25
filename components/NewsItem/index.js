import React from 'react'
import Upvote from '../Upvote'
import PointsCount from '../PointsCount'
import PropTypes from 'prop-types';

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

  render () {
    return (
      <div>
        <Upvote
          onClick={this.handleClick.bind(this)}
          active={this.state.upvoted}
        />
        <PointsCount count={this.state.pointsCount}
        />
      </div>
    )
  }
}

NewsItem.propTypes = {
  upvoted: PropTypes.bool.isRequired,
  pointsCount: PropTypes.number.isRequired
}

export default NewsItem
