import { DOMAIN_URL } from '../../shared/constants/UrlConstants'
import cookie from 'react-cookies'
import { withRouter } from 'react-router-dom'
import React from 'react';

class EnsureLoggedInContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isAuthenticated: false
        }
    }

    async componentDidMount() {
        if (cookie.load('auth')) {
            await this.checkIdentity()
        }

        if (!this.state.isAuthenticated) {
            this.props.history.push("/login")
        }
    }

    async checkIdentity() {
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + cookie.load('auth'))

        await fetch(DOMAIN_URL + '/account/CheckIdentity', {
            headers: headers
        })
            .then(res => res.json())
            .then(() => {
                this.setState({ isAuthenticated: true })
            })
            .catch(() => {
                this.setState({ isAuthenticated: false })
            })
    }

    render() {
        if (this.state.isAuthenticated) {
            return this.props.children
        } else {
            return null
        }
    }
}


export default withRouter(EnsureLoggedInContainer)