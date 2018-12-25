import React, {Component} from 'react';

import Logo from './Logo';

import Wallpaper from './Wallpaper';
// import ButtonSubmit from './ButtonSubmit';
import LoginFacebook from './LoginFacebook';
// import Router from './Router';
// import Form from './Form';
// import PropTypes from 'prop-types';
export default class LoginScreen extends Component {
  render() {
    return (
      <Wallpaper>
        <Logo />
        {/* <Form />
        <ButtonSubmit /> */}
        <LoginFacebook />
        {/* <Router/> */}
      </Wallpaper>
    );
  }
}
