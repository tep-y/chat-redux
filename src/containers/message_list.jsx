import React, { Component } from 'react';
import { connect } from 'react-redux';
import message from '../components/message';

class MessageList extends Component {
  render() {
    console.log(this.props.messages)
    return(
      <div>
        {this.props.messages.map((message) => {
          return <p key={message.author}>{message.author} {message.created_at} {message.content}</p>
      })}</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps)(MessageList);