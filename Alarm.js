import {Text, View, StyleSheet, AppState, TouchableOpacity,Vibration,Image,AsyncStorage} from 'react-native';
import React, {Component} from 'react';
import NotiController from './NotiController';
import PushNotification from 'react-native-push-notification';
const PATTERN = [1000, 3000, 5000]
export default class AlarmScene extends Component {
  constructor(props){
    super(props);


    //Vibration.vibrate(10000),
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
    Vibration.vibrate(PATTERN)
    return(
      // <View
      //   style = {styles.container}>
      //   <Text> ALARM </Text>
      //   <TouchableOpacity
      //     style = {styles.button}
      //     onPress={this.onClickCallBack}>
      //     <Image source={require('./src/images/Alarm_Clock.gif')} style={{width:300, height: 200 }} />
      //   </TouchableOpacity>
      //   <NotiController />
      // </View>
      <View style={styles.container}>
      <Image source={require('./src/images/Alarm_Clock.gif')} style={{width:300, height: 250 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  picker:{
    width : 100
  },
  container:{
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : '#e0e0e0'
  },
  button:{
    backgroundColor: 'green',
    width: 10,
    height: 10
  },
  imgBtn:{
    width: 100,
    height: 100
  }
});