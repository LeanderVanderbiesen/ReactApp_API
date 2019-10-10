import * as React from 'react';
export class Loader extends React.Component{
    constructor(props) {
        super(props);
        this.enableMessage = this.enableMessage.bind(this);

        this.state = {
            displayMessage: false,
        };
        this.timer = setTimeout(this.enableMessage, 2500);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    enableMessage() {
        this.setState({displayMessage: true});
    }

    render() {
        const {displayMessage} = this.state;

        if (displayMessage) {
            return null;
        }

        return (
                <div className="loader">
                    <img src={require('../../images/Bars-1.6s-200px.gif')} />
                </div>
            );
    }
}


