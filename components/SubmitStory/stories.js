import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import SubmitStory from './'

storiesOf('SubmitStory', module)
  .add('fun', () => (
    <SubmitStory onSubmitStory={action('story submitted')}/>
  ))
