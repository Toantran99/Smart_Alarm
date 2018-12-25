import {Dimensions,Animated,Text, View, StyleSheet, BackAndroid, TouchableOpacity,Vibration,Image,AsyncStorage,BackHandler} from 'react-native';
import React, {Component} from 'react';
import NotiController from './NotiController';
import PushNotification from 'react-native-push-notification';
import {StackNavigator} from 'react-navigation';
const PATTERN = [1000, 5000, 1000]
import map from './Map'
import Sound from 'react-native-sound';
import RNExitApp from 'react-native-exit-app';

const map_class = new map();
export default class AlarmScene extends Component {
  constructor(props){
    super(props);
    const {params} = this.props.navigation.state;
    this.state = {
      seconds : 5,
      address:params.addressAlarm,
      ringtone: params.ringtoneAlarm,
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

  turnOnRingStone(nameFile){
    // this.setState({ringtone: nameFile})// => set value for Picker when value change
     console.log("ABC"+nameFile);
    this.ringtone = new Sound(
      nameFile,
      undefined,
       error => {
        if (error) {
         // Means the file was never loaded.
         console.warn(error);
         return;
         }
         this.ringtone.setVolume(5);
         this.ringtone.setNumberOfLoops(-1);
         this.ringtone.play(success => {
        //  if (!success) {
        //    this.ringtone.reset();
        //  }
        if (success) {
          console.log('successfully finished playing');
          } else {
          console.log('playback failed due to audio decoding errors');
          // reset the player to its uninitialized state (android only)
          // this is the only option to recover after an error occured and use the player again
          }
         });
       }
       );
  }
  stopAlarm(){
    Vibration.cancel();
    this.ringtone.stop();
    // map_class.setState({IS_ALARMING:false});
    //map_class.setState_IS_ALARMING();
    BackHandler.exitApp();
    //RNExitApp.exitApp();
  }
  componentDidMount(){
    // console.log("hihi");
    // Vibration.cancel();
    // this.ringtone.stop();
    // map_class.setState({IS_ALARMING:false});
    // BackAndroid.exitApp();
  }
  render(){
    Vibration.vibrate(PATTERN,true)
    this.turnOnRingStone(this.state.ringtone)
    return(
      <View style={styles.container}>
      <Image source={require('./src/images/backgroundAlarm.jpg')} style={{flex:1,height:50 }} />
      <View style={{flex:3, alignItems: 'center',justifyContent: 'center',}}>
      {/* <Text>{this.state.address}</Text> */}
      <Text style={{fontSize:18,textAlign:'center'}}>{this.state.address}</Text>
      <TouchableOpacity style={{alignItems: 'center',justifyContent: 'center'}} onPress = {()=>this.stopAlarm()} >
      <Image source={require('./src/images/Alarm_Clock.gif') } style={{width:250, height: 200,marginTop:30 }} />
      <Image source={require('./src/images/push-button.gif')} style={{marginTop:-15,width:50, height: 50 }} />
      </TouchableOpacity>
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