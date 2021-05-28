import { FETCH_MESSAGES } from '../actions/index.js';
import { POST_MESSAGE } from '../actions/index.js';

const messagesReducer = (state = null, action) => {
  switch (action.type) {
    // TODO return action.payload
    case FETCH_MESSAGES: {
      return action.payload.messages;
    }
    case POST_MESSAGE: {
      const copiedState = state.slice(0);
      copiedState.push(action.payload);
      return copiedState;
    }
    default:
      return state;
  }
}

export default messagesReducer;