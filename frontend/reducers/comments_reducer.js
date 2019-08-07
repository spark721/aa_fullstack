
import {
  RECEIVE_COMMENT,
  DELETE_COMMENT,
} from '../actions/comment_action';

const commentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  // debugger
  switch (action.type) {
    case RECEIVE_COMMENT:
      newState[action.comment.id] = action.comment;
      return newState;
    case DELETE_COMMENT:
      delete newState[action.commentId];
      return newState;
    default:
      return oldState;
  }

}

export default commentsReducer;