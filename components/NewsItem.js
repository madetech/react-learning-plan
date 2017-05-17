import React from 'react'
import Upvote from './Upvote'

class NewsItem extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {upvoted: this.props.upvoted}
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
      </div>
    )
  }
}

NewsItem.propTypes = {
  upvoted: React.PropTypes.bool.isRequired
}

export default NewsItem
