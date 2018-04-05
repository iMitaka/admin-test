import React, { Component } from 'react';
import './TextInputComponent.css'

class TextInputComponent extends Component {
    render() {
        return (
            <div>
                <div className="text-input-label">
                    <strong onClick={() => { this.textInput.focus() }}>{this.props.label}</strong>
                </div>
                <input className="form-control"
                    name={this.props.name}
                    type={this.props.type}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    onKeyPress={this.props.onKeyPress}
                    disabled={this.props.disabled}
                    ref={(input) => this.textInput = input} />
            </div>
        );
    }
}

export default TextInputComponent;
