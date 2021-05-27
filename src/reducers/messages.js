import { FETCH_MESSAGES } from '../actions/index.js';

const messagesReducer = (state, action) => {
  if (state === undefined) {
    return [];
  }
  switch (action.type) {
    // TODO return action.payload
    case FETCH_MESSAGES: {
      return action.payload;
    }
    default:
      return state;
  }
}

export default messagesReducer;