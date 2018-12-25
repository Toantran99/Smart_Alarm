import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import {facebookService} from './FacebookService'

export default class LogInPage extends React.Component {
  constructor(props) {
    super(props)

    this.login = this.login.bind(this)
  }

  render() {
    return (
      <View style={styles.container}>
        {facebookService.makeLoginButton((accessToken) => {
          this.login()
        })}
      </View>
    )
  }

  login() {
    this.props.navigation.navigate('MainNavigator')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})