import React from 'react'
import hacker from '../lib/hacker'
import CommentsTree from '../components/CommentsTree'

function mapReplies (kid) {
  return {
    creator: ,
    comment:,
    replies:
  }
}

export default class ItemAroo extends React.Component {
  static async getInitialProps({ query }) {
    const item = await hacker.item(query.id)

    return {
      id: item.id,
      by: item.by,
      score: item.score,
      title: item.title,
      url: item.url,
      text: item.text,
      descendants: item.descendants,
      kids: item.kids.map(mapReplies)
    }
  }

  render () {
    return (
      <div>
        {this.props.id}
        <CommentsTree  />
      </div>
    )
  }
}
