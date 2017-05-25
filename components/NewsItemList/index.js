import React from 'react'
import NewsItem from '../NewsItem'

class NewsItemList extends React.Component {
  render () {
    if (this.props.items.length === 0) {
      return (
        <div>
          Never Gonna Give You Up
        </div>
      )
    }

    const children = this.props.items.map(item => <NewsItem title={item.title}/> )

    return <div>{children}</div>
  }
}

NewsItemList.propTypes = {
  items: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      title: React.PropTypes.string,
      pointsCount: React.PropTypes.number
    })
  )
}

export default NewsItemList
