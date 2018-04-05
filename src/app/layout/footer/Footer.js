import React, { Component } from 'react';

export default class Footer extends Component {

    render() {
        return (
            <div className="text-center">
                <hr />
                <strong>&copy; {new Date().getFullYear()}</strong>
            </div>
        );
    }
}
