import React, {Component} from 'react';

import Logo from '../containers/Logo';

import Wallpaper from '../containers/Wallpaper';
import LoginFacebook from './LoginFacebook';
export default class LoginScreen extends Component {
  render() {
    return (
      <Wallpaper>
        <Logo />
        <LoginFacebook />
      </Wallpaper>
    );
  }
}
