import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchMessages } from '../actions';
import Message from '../components/message';
import MessageForm from '../containers/message_form';

class MessageList extends Component {
  componentWillMount() {
    this.fetchMessages();
  }

  // componentDidMount() {
    
  // }

  componentDidUpdate() {
    this.scrollToBottom();
    this.refresh = setInterval(this.fetchMessages, 5000);
  }
  
  componentWillUnmount() {
    clearInterval(this.refresh);
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }
  
  scrollToBottom = () => {
    this.list.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }

  render () {
    return (
      <div className="message-container">
        <div className="message-title">
          <h1>Channel: #{this.props.selectedChannel}</h1>
        </div>
        <div ref={(list) => {this.list = list}} className="message-content">
          {
            this.props.messages.map((message) => {
              return <Message key={message.id} message={message} />;
            })
          }
          <MessageForm />
        </div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);