import React from 'react';
import moment from 'moment';

export class Message extends React.Component{
    propTypes: {
        message: React.PropTypes.object.isRequired
    };

    formatTime(time) {
        return moment(time).format('h:mm A');
    }

    render() {
        return (
            <li>{this.formatTime(this.props.message.time)} - {this.props.message.text}</li>
        );
    }
}
