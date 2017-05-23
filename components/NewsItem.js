import React from 'react'
import Upvote from './Upvote'
import Points from './Points'

class NewsItem extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {upvoted: this.props.upvoted}
    this.state = {count: this.props.count}
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
        <Points count={this.state.count}
        />
      </div>
    )
  }
}

NewsItem.propTypes = {
  upvoted: React.PropTypes.bool.isRequired
}

export default NewsItem
