import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import Button from '../components/Button'
import Welcome from '../components/Welcome'
import NewsItem from '../components/NewsItem'
import NewsItemList from '../components/NewsItemList'
import Upvote from '../components/Upvote'
import Rank from '../components/Rank'

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ))

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ))

storiesOf('NewsItem', module)
  .add('not upvoted', () => (
    <NewsItem upvoted={false} />
  ))

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

storiesOf('Upvote', module)
  .add('inactive', () => (
    <Upvote onClick={action('clicked')} active={false} />
  ))
  .add('active', () => (
    <Upvote onClick={action('clicked')} active={true} />
  ))

storiesOf('Rank', module)
  .add('high', () => (
    <Rank ranking="1"/>
  ))
  .add('low', () => (
    <Rank ranking="100"/>
  ));
