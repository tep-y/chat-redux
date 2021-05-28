// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import messagesReducer from './reducers/messages.js';
import channelsReducer from './reducers/channels.js';
import selectedChannelReducer from './reducers/selected_channel.js';
import currentUsernameReducer from './reducers/current_username.js';

// State and reducers
const reducers = combineReducers({
  messages: messagesReducer,
  channels: channelsReducer,
  selectedChannel: selectedChannelReducer,
  currentUsername: currentUsernameReducer
});

const middlewares = applyMiddleware(logger, promiseMiddleware);

// const arrayMessages = [
//   {
//     "author":"anonymous92",
//     "content":"Hello world!",
//     "created_at":"2017-09-26T23:03:16.365Z"
//   },
//   {
//     "author":"anonymous77",
//     "content":"My name is anonymous77",
//     "created_at":"2017-09-26T23:03:21.194Z"
//   }
// ]

const initialState = {
  messages: [],
  channels: ['montreal', 'toronto', 'vancouver'],
  selectedChannel: 'montreal',
  currentUsername: prompt("username?")
};

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
