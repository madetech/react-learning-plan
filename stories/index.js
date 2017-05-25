import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import Button from '../components/Button'
import Welcome from '../components/Welcome'
import NewsItem from '../components/NewsItem'
import NewsItemList from '../components/NewsItemList'
import Upvote from '../components/Upvote'
import CommentCount from '../components/CommentCount'
import Rank from '../components/Rank'
import PointsCount from '../components/PointsCount'

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
    <NewsItem upvoted={false} pointsCount={0} />
  ))
  .add('with 12 comments', () => (
    <NewsItem commentCount={12} />
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

storiesOf('CommentCount', module)
  .add('with 0 count', () => (
    <CommentCount count={0} />
  ))
  .add('with 1 count', () => (
    <CommentCount count={1} />
  ))
  .add('with 2 count', () => (
    <CommentCount count={2} />
  ))

storiesOf('Rank', module)
    .add('high', () => (
        <Rank ranking="1"/>
    ))
    .add('low', () => (
        <Rank ranking="100" />
    ));

storiesOf('PointsCount', module)
  .add('0 points', () => (
    <PointsCount pointsCount={0} />

  .add('1 point', () => (
    <PointsCount pointsCount={1} />
  ))
  .add('5 points', () => (
    <PointsCount pointsCount={5} />
  ))
