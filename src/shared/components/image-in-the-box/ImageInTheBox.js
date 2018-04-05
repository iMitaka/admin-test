import React, { Component } from 'react';
import './ImageInTheBox.css'

export default class ImageInTheBox extends Component {
    render() {
        return (
            <div className="container-img">
                <img src={this.props.src} className="img-thumbnail fill" alt="thumbnail"></img>
            </div>
        );
    }
}
