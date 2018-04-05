import React, { Component } from 'react';
import TextInputComponent from '../../../shared/components/inputs/text-input/TextInputComponent'
import ButtonComponent from '../../../shared/components/inputs/button/ButtonComponent'
import './Login.css'
import { ROUTE_HOME } from '../../../shared/constants/RouteConstants'
import {
    username_label,
    password_label,
    login_button_label
} from '../../../shared/constants/InputConstants'
import { login } from '../../../services/property-service'
import cookie from 'react-cookies'

const enterKey = 'Enter'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this)
        this.login = this.login.bind(this)
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
            this.login()
        }
    }

    login() {
        login(this.state)
        .then(res => res.json())
        .then((result) => {
            console.log(result)
            cookie.save('auth', result.value)
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
                    <TextInputComponent name="password" label={password_label} type="password" value={this.state.password} onChange={this.handleInputChange} onKeyPress={this.enterPress} />
                    <br />
                    <ButtonComponent styleClass="info" label={login_button_label} onClick={this.login} />
                </div>
            </div>
        );
    }
}

export default Login;
