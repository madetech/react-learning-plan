import React from 'react'
import { storiesOf } from '@kadira/storybook'
import NewsItemList from './'

storiesOf('NewsItemList', module)
  .add('when there are no items', () => (
    <NewsItemList items={[]} />
  ))
  .add('when there are more than two items', () => (
    <NewsItemList
      items={[{
          "title": "copy Markets Analyst",
          "username": "Tevin65",
          "points": 48280,
          "host": 'bass.com'
        },
        {
          "title": "visionary",
          "username": "Elaina_OReilly89",
          "points": 24269,
          "host": "cheese.com"
        },
        {
          "title": "redundant",
          "username": "Daniela_Jenkins15",
          "points": 42358,
          "host": "bbc.com"
        },
        {
          "title": "Buckinghamshire withdrawal Refined Metal Hat",
          "username": "Jade90",
          "points": 49851,
          "host": "remotecontrol.com"
        }]}
    />
  ))
