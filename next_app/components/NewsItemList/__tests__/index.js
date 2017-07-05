import { mount } from 'enzyme'
import React from 'react'
import NewsItem from '../../NewsItem'
import NewsItemList from '../'

function createNewsItemList(items) {
  return mount(
    <NewsItemList
      items={items}
    />
  )
}

describe('NewsItemList', () => {
  const item1 = {
    title: 'Malicious Subtitles Threaten Kodi, VLC and Popcorn Time Users'
  }

  describe('when there is one item', () => {
    it('creates one child', () => {
      expect(createNewsItemList([item1]).children().length).toBe(1)
    })
  })

  describe('when there are two items', () => {
    const item2 = {
      title: 'Google and IBM announce Istio – a microservices mesh for Kubernetes'
    }

    it('creates two children', () => {
      expect(createNewsItemList([item1, item2]).children().length).toBe(2)
    })

    it('renders the title for the second item', () => {
      expect(createNewsItemList([item1, item2]).children().nodes[1].props.title).toContain('Google and IBM announce Istio – a microservices mesh for Kubernetes')
    })
  })

  it('rickrolls when there is no news', () => {
    expect(createNewsItemList([]).text()).toContain('Never Gonna Give You Up')
  })

  it('creates a child NewsItem per item', () => {
    const firstChild = createNewsItemList([item1]).children().nodes[0]
    expect(firstChild).toBeInstanceOf(NewsItem)
    expect(firstChild.props.title).toBe('Malicious Subtitles Threaten Kodi, VLC and Popcorn Time Users')
  })
})
