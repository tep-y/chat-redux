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
import selectedChannelReducer from './reducers/selectedChannel.js';
import currentUsernameReducer from './reducers/currentUsername.js';

// State and reducers
const reducers = combineReducers({
  messages: messagesReducer,
  channels: channelsReducer,
  selectedChannel: selectedChannelReducer,
  currentUsername: currentUsernameReducer
});

const middlewares = applyMiddleware(logger, promiseMiddleware);

const initialState = {
  messages: [],
  channels: ['montreal', 'toronto', 'vancouver'],
  selectedChannel: 'montreal',
  currentUsername: prompt("username?")
};

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
