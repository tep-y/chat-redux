// TODO: add and export your own actions
export const FETCH_MESSAGES = 'FETCH_MESSAGES';

export function fetchMessages(channel) {
  const messageURL = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  
  const promise = fetch(messageURL)
    .then(response => response.json());

  return {
    type: FETCH_MESSAGES,
    payload: promise
  }
};

export function createMessage(channel, author, content) {
  // TODO
  
};