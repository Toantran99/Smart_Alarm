import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {LoginNavigator} from './LoginNavigator'
import {SmartAlarmDrawer} from '../../SmartAlarmDrawer'
import FBSDK from 'react-native-fbsdk'
import {createSwitchNavigator} from 'react-navigation'
const { AccessToken } = FBSDK

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      accessToken: null
    }
  }
  componentDidMount() {
    AccessToken.getCurrentAccessToken()
    .then((data) => {
      this.setState({
        accessToken: data.accessToken
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    const Navigator = makeRootNavigator(this.state.accessToken)
    return <Navigator />
  }
}

const makeRootNavigator = (isLoggedIn) => {
  return createSwitchNavigator(
    {
      LoginNavigator: {
        screen: LoginNavigator,
      },
      SmartAlarmDrawer: {
        screen: SmartAlarmDrawer
        },
    },
    
    {
      initialRouteName: isLoggedIn ? "SmartAlarmDrawer" : "LoginNavigator"
    }
  )
}