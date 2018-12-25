/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Keyboard,Text, View,TextInput,TouchableOpacity,TouchableWithoutFeedback} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {COLOR_FACEBOOK, COLOR_BLUE_LIGHT,COLOR_DARK_GRAY,COLOR_PINK} from './myColors'
import {LoginManager} from 'react-native-fbsdk'
export default class Login extends Component{
  static navigationOptions ={
    header: null,
  }
  async loginFacebook(){
    try{
      let result = await LoginManager.logInWithReadPermissions(['public_profile'])
        if (result.isCancelled){
          alert('Login was cancelled');
        } else { 
          alert('Login was successful with permissions:'+result.grantedPermissions.toString());
          const {navigate} = this.props.navigation;
          navigate('Map',
          {
            
          })
        }
    }catch(error){
      alert('Login failed with error:'+error)
    }
  }
  render() {
    const Divider =(props) => {
      return <View {...props}>
        <View style={styles.line}></View>
        <Text style ={styles.textOR}>OR</Text>
        <View style={styles.line}></View>
      </View>

    }
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dissmiss}>
      <View style={styles.container}>
        <View style ={styles.up}>
        <Ionicons
        name ="ios-alarm"
        size ={100}
        color ={'white'}>
        </Ionicons>
        <Text style ={styles.title}>
        Smart Alarm For You!
         </Text>
     </View>
     <View style ={styles.down}>
     <View style ={styles.textInputContainer}>
       <TextInput style ={styles.textInput}
       placeholder ="Enter your email"
       textContentType ='emailAddress'
       keyboardType ='email-address'
       >

       </TextInput>
      </View>
    
      <View style ={styles.textInputContainer}>    
       <TextInput 
          style ={styles.textInput}
          placeholder ="Enter your password"
          secureTextEntry ={true}
       > 

       </TextInput>
      </View>
        <TouchableOpacity style ={styles.loginButton}>
        <Text style ={styles.loginButtonTitle}>
          Login
        </Text>
       </TouchableOpacity>
       <Divider style ={styles.divider}></Divider>
        <FontAwesome.Button style={styles.facebookButton}
        name="facebook"
        onPress ={this.loginFacebook}
        backgroundColor= {COLOR_FACEBOOK}
        >
        <Text style ={styles.loginButtonTitle}>Login with Facebook</Text>

        </FontAwesome.Button>
      </View>
      </View>
      </TouchableWithoutFeedback>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_BLUE_LIGHT,
  },
  up: {
  flex:3,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
},
 down: {
 flex:7,
 flexDirection:'column',
justifyContent: 'flex-start',
alignItems:'center'
 
 },
 title:{
  textAlign: 'center',
  color: COLOR_DARK_GRAY ,
  width: 400,
  fontSize: 23,
 },
 textInputContainer:{
   paddingHorizontal: 10,
   borderRadius: 6,
   marginTop: 20,
   
   backgroundColor: 'rgba(255,255,255,0.8)'// Opacity a
   
 },
 textInput:{
   width: 280,
   height:45,
   color:'white',

 },
 loginButton :{
   width: 300,
   height:45,
   borderRadius: 6,
   justifyContent: 'center',
   alignItems:'center',
   backgroundColor: COLOR_PINK,
   marginTop:40,
 },
 facebookButton:{
  width: 300,
  height:45,
  borderRadius: 6,
  justifyContent: 'center',
  alignItems:'center',
  
 },
 loginButtonTitle:{
   fontSize:18,

 },
 line:{
   height: 1,
   flex : 2,
   backgroundColor:'black'
 },
 textOR: {
   flex: 1,
   textAlign:'center',

 },
 divider:{
   flexDirection:'row',
   height:40,
   width:298,
   justifyContent:'center',
   alignItems:'center',
 }
  
})
