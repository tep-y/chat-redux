import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchMessages } from '../actions';
import Message from '../components/message';
import MessageForm from '../containers/message_form';

class MessageList extends Component {
  componentDidMount() {
    this.fetchMessages();
    this.refresh = setInterval(this.fetchMessages, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.refresh);
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }
  
  scrollToBottom = () => {
    this.list.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }

  render () {
    return (
      <div ref={(list) => {this.list = list}}>
        {
          this.props.messages.map((message) => {
            return <Message key={message.id} message={message} />;
          })
        }
        <MessageForm />
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