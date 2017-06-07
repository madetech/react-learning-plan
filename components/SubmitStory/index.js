import React from 'react'

class SubmitStory extends React.Component {
  constructor(props) {
    super(props)
    this.onSubmitStory = this.onSubmitStory.bind(this)
  }

  render() {
    return <div>
      <form onSubmit={this.onSubmitStory}>
        <input name="title" type="text" ref={(input) => { this.titleInput = input; }} />
        <button name="submit-story"></button>
      </form>
    </div>
  }

  onSubmitStory(e) {
    e.preventDefault();
    console.log(this.titleInput.value)
    this.props.onSubmitStory('brollies');
  }
}

export default SubmitStory
