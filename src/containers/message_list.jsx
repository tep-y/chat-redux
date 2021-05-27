import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Message from '../components/message';
import { fetchMessages } from '../actions/index.js';



class MessageList extends Component {
  componentWillMount() {
    this.props.fetchMessages();
  }

  render() {
    return(
      <div>
        {this.props.messages.map((message) => {
          return <Message key={message.author} message={message} />
      })}</div>
    );
  }
}



function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);