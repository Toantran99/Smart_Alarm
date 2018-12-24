import {Dimensions,Easing,Animated,Text, View, StyleSheet, AppState, TouchableOpacity,Vibration,Image,AsyncStorage} from 'react-native';
import React, {Component} from 'react';
import NotiController from './NotiController';
import PushNotification from 'react-native-push-notification';
import {StackNavigator} from 'react-navigation';
const PATTERN = [1000, 3000, 5000]
import map from './Map'

export default class AlarmScene extends Component {
  constructor(props){
    super(props);
    const {params} = this.props.navigation.state;
    this.state = {
      seconds : 5,
      address:params.addressAlarm,
      ringtones: params.ringtoneAlarm,
      xValue: new Animated.Value(0),
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
      <View style={styles.container}>
      <Image source={require('./src/images/backgroundAlarm.jpg')} style={{flex:1,height:50 }} />
      <View style={{flex:3, alignItems: 'center',justifyContent: 'center',}}>
      <Text>{this.state.address}</Text>
      <Image source={require('./src/images/Alarm_Clock.gif')} style={{width:250, height: 200 }} />
      <Image source={require('./src/images/push-button.gif')} style={{marginTop:-15,width:50, height: 50 }} />
      </View>
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