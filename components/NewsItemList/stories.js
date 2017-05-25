import React from 'react'
import { storiesOf } from '@kadira/storybook'
import NewsItemList from './'

storiesOf('NewsItemList', module)
  .add('when there are no items', () => (
    <NewsItemList items={[]} />
  ))
  .add('when there are two items', () => (
    <NewsItemList
      items={[
        { title: 'Malicious Subtitles Threaten Kodi, VLC and Popcorn Time Users' },
        { title: 'Google and IBM announce Istio – a microservices mesh for Kubernetes' }
      ]}
    />
  ))
