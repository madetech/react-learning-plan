import React from 'react'

class CommentForm extends React.Component {
  render () {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <textarea></textarea>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default CommentForm
