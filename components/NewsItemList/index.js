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

    const children = this.props.items.map((item, index) => <NewsItem title={item.title} host={item.host} username={item.username} upvoted pointsCount={1} key={`NewsItem-${index}`}/> )

    return <div>{children}</div>
  }
}

NewsItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      pointsCount: PropTypes.number,
      username: PropTypes.string,
      host: PropTypes.string,
    })
  )
}

export default NewsItemList
