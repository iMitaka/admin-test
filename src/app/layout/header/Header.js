import React, { Component } from 'react';
import { app_title } from '../../../shared/constants/AppConstants'
import Profile from './components/Profile'

class Header extends Component {

  render() {
    return (
      <div className="text-center">
        <h1><strong>{app_title}</strong></h1>
        <Profile />
      </div>
    );
  }
}

export default Header;
