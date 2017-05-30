import { mount } from 'enzyme'
import React from 'react'
import PointsCount from '../'

function pointsCount(count) {
  return mount(
    <PointsCount pointsCount={count} />
  )
}

describe('PointsCount', () => {
  describe('when there are no points', () => {
    it('renders 0 points', () => {
      expect(pointsCount(0).text()).toBe('0 points')
    })
  })
  describe('when there is one point', () => {
    it('renders 1 point', () => {
      expect(pointsCount(1).text()).toBe('1 point')
    })
  })
  describe('when there are multiple points', () => {
    it('renders the number of points', () => {
      expect(pointsCount(3).text()).toBe('3 points')
    })
  })
})
