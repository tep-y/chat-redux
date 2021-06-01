// TODO: add and export your own actions
export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const POST_MESSAGE = 'POST_MESSAGE';
export const SELECT_CHANNEL = 'SELECT_CHANNEL';

export function fetchMessages(channel) {
  const messageURL = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  
  const promise = fetch(messageURL).then(response => response.json());

  return {
    type: FETCH_MESSAGES,
    payload: promise
  }
};

export function createMessage(channel, author, content) {
  const messageURL = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  const body = { author, content };
  const promise = fetch(messageURL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: POST_MESSAGE,
    payload: promise
  };
}

export function selectChannel(channel) {
  return {
    type: SELECT_CHANNEL,
    payload: channel
  }
}