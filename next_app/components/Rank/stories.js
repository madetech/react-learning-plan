import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Rank from './'

storiesOf('Rank', module)
  .add('high', () => (
    <Rank ranking="1"/>
  ))
  .add('low', () => (
    <Rank ranking="100"/>
  ))
