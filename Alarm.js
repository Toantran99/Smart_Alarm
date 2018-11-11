import {Text, View, StyleSheet, AppState, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import NotiController from './NotiController';
import PushNotification from 'react-native-push-notification';

export default class AlarmScene extends Component {
  constructor(props){
    super(props);
    this.state = {
      seconds : 5
    };
  }

  onClickCallBack=() =>
  {
    {
      //TODO: schedule background notification
        PushNotification.localNotificationSchedule({
        message: "My Notification Message", // (required)
        date: new Date(Date.now()), // in 5 secs
        title: "Day la title", 
        message: "Day la message", 
        });
    }
  }

  render(){

    return(
      <View
        style = {styles.container}>
        <Text> ALARM </Text>
        <TouchableOpacity
          style = {styles.button}
          onPress={this.onClickCallBack}>
        </TouchableOpacity>
        <NotiController />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  picker:{
    width : 100
  },
  container:{
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : 'pink'
  },
  button:{
    backgroundColor: 'green',
    width: 100,
    height: 100
  }
});