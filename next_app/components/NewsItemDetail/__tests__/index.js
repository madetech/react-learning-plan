import React from 'react'
import { shallow } from 'enzyme'
import NewsItemDetail from '../'

describe('NewsItemDetail', () => {
  it('contains a CommentForm', () => {
    const shallowRender = shallow(<NewsItemDetail />)
    expect(shallowRender.find('CommentForm').length).toBe(1)
  })
})
