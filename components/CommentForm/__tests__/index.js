import React from 'react'
import { render, mount } from 'enzyme'
import sinon from 'sinon'
import CommentForm from '../'

describe('CommentForm', () => {
  it('displays a textarea to enter a comment', () => {
    const component = render(<CommentForm />)
    expect(component.find('textarea').length).toBe(1)
  })

  it('allows you to add content into the text area', () => {
    const onFormSubmit = sinon.spy()
    const component = mount(<CommentForm onSubmit={onFormSubmit} />)
    component.find('button').simulate('click')

    setTimeout(() => {
      expect(onFormSubmit.called).toBe(true)
    }, 1)
  })
})
