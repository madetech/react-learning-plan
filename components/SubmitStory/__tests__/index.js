import React from 'react'
import sinon from 'sinon'
import {shallow} from 'enzyme'
import SubmitStory from '../'


describe('SubmitStory', () => {
  it('Calls onSubmitStory with story details', () => {
    const createStorySpy = sinon.spy();
    const component = shallow(<SubmitStory onSubmitStory={createStorySpy} />)
    component.find('form').simulate('submit', new Event('Over 9000'))
    component.find('input[name="title"]').first().value = "hahahah";
    expect(createStorySpy.calledWith('brollies')).toBe(true)
  })
})
