import React, { Component } from 'react';
import {
    Route,
    Redirect
} from 'react-router-dom'
import { connect } from 'react-redux'
import handleErrors from '../../shared/hendlers/ajax-error-hendler'
import cookie from 'react-cookies'
import {
    AuthCookieName,
    AuthCookieTokenType
} from '../../shared/constants/CookieConstants'
import { DOMAIN_URL } from '../../shared/constants/UrlConstants'
import { bindActionCreators } from 'redux'
import * as authActions from '../../redux/auth/auth-action-creators'

class AuthorizedRoute extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isAuthenticated: this.props.isAuthenticated,
        }
    }

    async componentDidMount() {
        if(cookie.load(AuthCookieName)) {
            await this.checkIdentity()
        }
    }

    async componentWillReceiveProps(newProps) {
        await this.checkIdentity()
    }

    async checkIdentity() {
        let headers = new Headers();
        headers.append('Authorization', AuthCookieTokenType + cookie.load(AuthCookieName))
        await fetch(DOMAIN_URL + '/Account/CheckIdentity', {
            headers: headers
        })
            .then(handleErrors)
            .then(res => res.json())
            .then(() => this.setState({ isAuthenticated: true }))
            .catch(() => {
                this.setState({ isAuthenticated: false })
                this.props.authActions.logout()
            })
    }

    render() {
        let { component: Component, ...rest } = this.props
        return (
            <Route {...rest} render={props => (
                this.state.isAuthenticated ? (
                    <Component {...props} />
                ) : (
                        <Redirect to={{
                            pathname: '/login',
                            state: { from: props.location }
                        }} />
                    )
            )
            } />
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isLogged
    }
}

function mapDispatchToProps(dispatch) {
    return {
        authActions: bindActionCreators(authActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizedRoute);