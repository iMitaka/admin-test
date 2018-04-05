import React, { Component } from 'react';
import TextInputComponent from '../../../shared/components/inputs/text-input/TextInputComponent'
import ButtonComponent from '../../../shared/components/inputs/button/ButtonComponent'
import { ROUTE_HOME } from '../../../shared/constants/RouteConstants'
import {
    username_label,
    password_label,
    login_button_label
} from '../../../shared/constants/InputConstants'
import { register } from '../../../services/property-service'

const enterKey = 'Enter'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this)
        this.register = this.register.bind(this)
    }

    handleInputChange(event) {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    enterPress(event) {
        if (event.key === enterKey) {
            this.register()
        }
    }

    register() {
        register(this.state)
        .then(res => res.text())
        .then((result) => {
            console.log(result)
            this.props.history.push(ROUTE_HOME)
        })
        .catch((err) => {
            console.log(err)
        })
        
    }

    render() {
        return (
            <div className="login">
                <div className="col-lg-5" />
                <div className="col-lg-2">
                    <TextInputComponent name="username" label={username_label} type="text" value={this.state.username} onChange={this.handleInputChange} onKeyPress={this.enterPress} />
                    <br />
                    <TextInputComponent name="email" label={username_label} type="email" value={this.state.email} onChange={this.handleInputChange} onKeyPress={this.enterPress} />
                    <br />
                    <TextInputComponent name="password" label={password_label} type="password" value={this.state.password} onChange={this.handleInputChange} onKeyPress={this.enterPress} />
                    <br />
                    <ButtonComponent styleClass="info" label={'Register'} onClick={this.register} />
                </div>
            </div>
        );
    }
}

export default Register;
