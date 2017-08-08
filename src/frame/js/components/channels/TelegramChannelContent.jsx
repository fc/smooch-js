import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TransferRequestChannelContent from './TransferRequestChannelContent';

export class TelegramChannelContentComponent extends Component {

    static propTypes = {
        channelState: PropTypes.object.isRequired,
        username: PropTypes.string.isRequired
    };

    render() {
        const {username, channelState} = this.props;
        const url = `https://telegram.me/${username}?start=${channelState.transferRequestCode}`;
        return <TransferRequestChannelContent type='telegram'
                                              channelState={ channelState }
                                              url={ url } />;
    }
}

export default connect()(TelegramChannelContentComponent);