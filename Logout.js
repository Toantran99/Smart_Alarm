import React, {Component} from 'react'
import { StyleSheet, View, Text, SafeAreaView,Alert} from 'react-native'
import { facebookService } from './components/Login/FacebookService'

export default class Logout extends React.Component {
  constructor(props) {
    super(props)

    this.logout = this.logout.bind(this)
  }

  componentDidMount() {
  }

  render() {
    // return(
    //   Alert.alert(
    //     'Đăng xuất',
    //     'Bạn có muốn đăng xuất khỏi ứng dụng không?',
    //     [
    //     {text: 'Không', onPress: () => console.log('cancel')},
    //     {text: 'Có', onPress: () => this.logout()},
    //     ],
    //     {cancelable: false}
    //     )
    // )
    this.logout();
    return null;
  }

  logout() {
    this.props.navigation.navigate('LoginNavigator')
  }
}

