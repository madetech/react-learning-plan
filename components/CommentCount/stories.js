import React from 'react'
import { storiesOf } from '@kadira/storybook'
import CommentCount from './'

storiesOf('CommentCount', module)
  .add('when there are no comments', () =>(
    <CommentCount count={0} />
  ))
  .add('when there is 1 comment', () =>(
    <CommentCount count={1} />
  ))
  .add('when there are 2 comments', () =>(
    <CommentCount count={2} />
  ))
