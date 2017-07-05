import React from 'react'
import PropTypes from 'prop-types';
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

    const children = this.props.items.map((item, index) =>
      <NewsItem
        id={item.id}
        title={item.title}
        url={item.url}
        username={item.username}
        pointsCount={item.pointsCount}
        commentCount={item.commentCount}
        key={`NewsItem-${index}`}
      />
    )

    return <div>{children}</div>
  }
}

NewsItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      pointsCount: PropTypes.number,
      commentCount: PropTypes.number,
      username: PropTypes.string,
      url: PropTypes.string,
    })
  )
}

export default NewsItemList
