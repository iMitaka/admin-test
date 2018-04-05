import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../../../../redux/auth/auth-action-creators'
import { Link } from 'react-router-dom'
import { ROUTE_LOGIN } from '../../../../shared/constants/RouteConstants'
import { logout_button_label } from '../../../../shared/constants/InputConstants'

class Profile extends Component {
  constructor(props) {
    super(props)

    this.onLogOutClick = this.onLogOutClick.bind(this)
  }

  onLogOutClick() {
    this.props.authActions.logout()
  }

  render() {
    let profile = null;
    if (this.props.auth.username) {
      profile = (
        <div>
          <h4>Добре дошъл {this.props.auth.username}</h4>
          <Link className="btn btn-danger" to={ROUTE_LOGIN} onClick={this.onLogOutClick}>{logout_button_label}</Link>
        </div>
      )
    }
    return (
      <div>
        <Link className="btn-lg btn-info" to="/">Начало</Link>
        <hr />
        {profile}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
