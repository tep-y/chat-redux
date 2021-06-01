import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectChannel } from '../actions';
import { fetchMessages } from '../actions';
// import Message from '../components/message';
// import MessageForm from '../containers/message_form';

class ChannelList extends Component {
  componentDidUpdate(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.fetchMessages(nextProps.selectedChannel);
    }
  }

  handleClick = (channel) => {
    this.props.selectChannel(channel)
  }

  render () {
    return (
      <div className="channel-list">
        <h3>Channels list:</h3>
        {
        this.props.channels.map((channel) => {
          return <li key={channel} onClick={() => this.handleClick(channel)} 
          className={channel === this.props.selectedChannel ? 'active' : null}>#{channel}</li>
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // messages: state.messages,
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChannel, fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);