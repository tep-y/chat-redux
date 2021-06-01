import { SELECT_CHANNEL } from "../actions";

const selectedChannelReducer = (state = null, action) => {
  switch (action.type) {
    // TODO return action.payload
    case SELECT_CHANNEL: {
      return action.payload;
    }
    default:
      return state;
  }
}

export default selectedChannelReducer;