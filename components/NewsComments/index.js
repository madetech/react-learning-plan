import React from 'react'
import CommentsTree from '../CommentsTree'

export default class NewsComments extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      comments: []
    }
  }

  componentDidMount() {
    this.getComments();
  }

  setComments (json) {
    this.setState({ comments: json.comments })
  }

  getComments () {
    fetch('http://localhost:3000/api/comments/' + this.props.newsId)
      .then(response => response.json())
      .then(json => this.setComments(json))
  }

  render () {
    return (
      <CommentsTree comments={this.state.comments} />
    )
  }
}
