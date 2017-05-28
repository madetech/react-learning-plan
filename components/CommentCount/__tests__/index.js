import { mount } from 'enzyme'
import React from 'react'
import CommentCount from '../'

describe('CommentCount', () => {
  describe('when there are no comments', () => {
    it('displays a comment count of 0', () => {
      expect(mount(<CommentCount count={0} />).text()).toBe('0 comments')
    })
  })

  describe('when there is 1 comment', () => {
    it('displays a comment count of 1', () => {
      expect(mount(<CommentCount count={1} />).text()).toBe('1 comment')
    })
  })

  describe('when there are 2 comments', () => {
    it('displays a comment count of 2', () => {
      expect(mount(<CommentCount count={2} />).text()).toBe('2 comments')
    })
  })
})
