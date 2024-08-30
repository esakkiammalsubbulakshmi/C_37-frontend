import React, { Component } from 'react';

class Message extends Component {
    constructor() {
        super();
        this.state = {
            message: 'Welcome' // Corrected the typo here
        };
    }

    changeMessage() {
        this.setState({
            message: 'Thank you' // Use setState to update the state
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Click</button>
            </div>
        );
    }
}

export default Message;
