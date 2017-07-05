import React from 'react'
import {storiesOf} from '@kadira/storybook'
import CommentsTree from './'

storiesOf('CommentsTree', module)
  .add('Single comment', () => (
    <CommentsTree comments={[{creator: 'Adrian', comment: 'I love react', replies: []}]}/>
  ))
  .add('Tree of comments', () => (
    <CommentsTree comments={[{
      creator: 'Adrian',
      comment: 'I',
      replies: [{
        creator: 'Richard',
        comment: 'Love',
        replies: [{
          creator: 'Camilla',
          comment: 'React',
          replies: []
        }]
      }]
    }]}/>
  ))
