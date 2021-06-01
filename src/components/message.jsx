import React, { Component } from 'react';

class Message extends Component {
  render() {
    return(
      <div className="message-box">
        <p><strong>{this.props.message.author}</strong> <em>{this.props.message.created_at}</em></p>
        <p>{this.props.message.content}</p>
      </div>
    );
  }
}

export default Message;
