import React from 'react'
import PropTypes from 'prop-types';

export default class CommentsTree extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.renderComment = this.renderComment.bind(this);
  }

  render () {
    return <div>{this.props.comments.map(this.renderComment)}</div>
  }

  renderComment (comment) {
    return <div>
      <div>{comment.creator}</div>
      <blockquote>{comment.comment}</blockquote>
      <div style={{padding: '5px 20px'}}>
        {comment.replies.map(this.renderComment)}
      </div>
    </div>
  }
}

function getCommentPropType () {
  const commentShape = {
    creator: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
  }
  commentShape.replies = PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired;
  return PropTypes.shape(commentShape);
}

CommentsTree.propTypes = {
  comments: getCommentPropType()
}
