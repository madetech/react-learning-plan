import React from 'react'
import { storiesOf } from '@kadira/storybook'
import NewsComments from './'

storiesOf('NewsComments', module)
  .add('displaying live data', () => (
    <NewsComments newsId={12} />
  ))
