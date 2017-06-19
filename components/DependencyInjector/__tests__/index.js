import React from 'react'
import { render, mount } from 'enzyme'
import DependecyInjection from '../'

describe('DependencyInjection', () => {
  it('exposes rand', () => {
    let m = mount(<DependecyInjection><div /></DependecyInjection>)
    expect(m.instance().getChildContext().rand).toBe(Math.random)
  })
})
