import React from 'react'
import { storiesOf } from '@kadira/storybook'
import PointsCount from './'

storiesOf('PointsCount', module)
  .add('0 points', () => (
    <PointsCount pointsCount={0} />
  ))
  .add('1 point', () => (
    <PointsCount pointsCount={1} />
  ))
  .add('5 points', () => (
    <PointsCount pointsCount={5} />
  ))
