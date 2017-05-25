import React from 'react'
import { storiesOf } from '@kadira/storybook'
import NewsItem from './'

storiesOf('NewsItem', module)
  .add('not upvoted', () => (
    <NewsItem upvoted={false} pointsCount={0} />
  ))
