import React from 'react'
import { storiesOf } from '@kadira/storybook'
import IndexPage from './'

storiesOf('IndexPage', module)
  .add('displaying live data', () => (
    <IndexPage />
  ))
