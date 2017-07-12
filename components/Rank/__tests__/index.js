import {mount} from 'enzyme'
import React from 'react'
import Rank from '../'

describe('Rank', () => {
  beforeEach(() => {
    console.error = jest.fn((error) => {
      throw new Error(error);
    });
  });

  it('displays first place', () => {
    expect(mount(<Rank ranking={1}/>).text()).toBe("1")
  })

  it('displays second place', () => {
    expect(mount(<Rank ranking={2}/>).text()).toBe("2")
  })

  it('rejects missing ranking', () => {
    expect(() => mount(<Rank/>)).toThrow()
  })

  it('rejects non-stringy rankings', () => {
    expect(() => mount(<Rank ranking="dodgy"/>)).toThrow()
  })
})
