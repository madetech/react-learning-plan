import React from 'react'
import hacker from '../lib/hacker'
import NewsItemList from '../components/NewsItemList'

export default class ThingyRoo extends React.Component {
  static async getInitialProps () {
    const topstories = await hacker.topstories()
    return {
      topstories: topstories.map(story => ({
        id: story.id,
        title: story.title,
        pointsCount: story.score,
        commentCount: story.descendants,
        username: story.by,
        url: story.url,
      }))
    }
  }

  render() {
    return (
      <div>
        <NewsItemList items={this.props.topstories} />
      </div>
    )
  }
}
