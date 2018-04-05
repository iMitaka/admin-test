import React, { Component } from 'react';
import './ButtonComponent.css'

class ButtonComponent extends Component {
    render() {
        let buttonClass = 'button-padding btn btn-' + this.props.styleClass;

        return (
            <div className="button">
                <button type="button"
                    onClick={this.props.onClick}
                    disabled={this.props.disabled}
                    className={buttonClass}>
                    <strong>{this.props.label}</strong>
                </button>
            </div>
        );
    }
}

export default ButtonComponent;
