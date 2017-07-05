import React from 'react'
import NewsItemList from '../NewsItemList'

export default class IndexPage extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.getPosts();
  }

  setPosts (json) {
    const posts = json.posts.map(post => ({
      title: post.title,
      pointsCount: post.points,
      host: post.host,
      username: post.creator
    }))

    this.setState({ posts })
  }

  getPosts () {
    fetch('http://localhost:3000/api/posts')
      .then(response => response.json())
      .then(json => this.setPosts(json))
  }

  render () {
    return (
      <NewsItemList items={this.state.posts} />
    )
  }
}
