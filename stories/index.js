import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import Button from '../components/Button'
import Welcome from '../components/Welcome'
import NewsItem from '../components/NewsItem'
import Upvote from '../components/Upvote'

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

storiesOf('Upvote', module)
  .add('inactive', () => (
    <Upvote onClick={action('clicked')} active={false} />
  ))
  .add('active', () => (
    <Upvote onClick={action('clicked')} active={true} />
  ))
