import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {StyleSheet, View, Text,Image,TouchableOpacity,AsyncStorage} from 'react-native';
import { Container,Header, Content, Button,InputGroup,Input, Card, CardItem } from 'native-base';

import FBSDK from 'react-native-fbsdk'
const { LoginButton, AccessToken, GraphRequest, GraphRequestManager } = FBSDK
import {facebookService} from '../containers/FacebookService' 

export default class LoginFacebook extends Component{

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
      //this.props.navigation.navigate('SmartAlarmDrawer')
  }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top:-100,
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  button: {
    height: 40,
    width: 210,
    backgroundColor: '#3b5998',
    borderRadius: 5,
    margin: 10,
  },
  buttonContainer: {
    flex:1,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'flex-start',
    marginLeft: 10,
  },
  buttonText: {
    color:'white',
    fontSize:16,
    fontWeight: "bold",
    marginLeft:20,
  },
  textWithDivider: {
    color: "black",
    marginVertical: 10,
    paddingHorizontal: 10
  }
});

