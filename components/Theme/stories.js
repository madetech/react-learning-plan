import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Theme from './'
import PropTypes from 'prop-types'

class Button extends React.Component {
  render () {
    return (
      <button style={{background: this.context.backgroundColor}}>
        {this.props.children}
      </button>
    )
  }
}

Button.contextTypes = {
  backgroundColor: PropTypes.string
}

storiesOf('Theme', module)
  .add('with yellow background color', () => (
    <Theme backgroundColor="yellow">
      <Button>
        CLICK ME
      </Button>
    </Theme>
  ))

  .add('with red background color', () => (
    <Theme backgroundColor="red">
      <Button>
        ANGRY
      </Button>
    </Theme>
  ))
