import React from 'react'
import { shallow } from 'enzyme'
import Theme from '../'
import PropTypes from 'prop-types'

describe('Theme', function () {
  it('defines background colour in context', function () {
    const dom = shallow(<Theme backgroundColor="red"><div /></Theme>)
    const context = dom.instance().getChildContext()

    expect(context).toEqual({ backgroundColor: 'red' })
  })
})
