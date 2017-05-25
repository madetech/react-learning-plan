import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Upvote from './'

storiesOf('Upvote', module)
  .add('inactive', () => (
    <Upvote onClick={action('clicked')} active={false} />
  ))
  .add('active', () => (
    <Upvote onClick={action('clicked')} active={true} />
  ))
