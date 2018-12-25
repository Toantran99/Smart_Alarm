import React, {Component} from 'react';
import {Platform, StyleSheet, Animated,Text, View,Dimensions,Image} from 'react-native'
import {COLOR_FACEBOOK, COLOR_BLUE_LIGHT,COLOR_DARK_GRAY,COLOR_PINK} from './myColors'
var {height,width}= Dimensions.get('window')
export default class Splash extends Component{
    static navigationOptions ={
        header: null,
    }
    state ={
        logoOpacity: new Animated.Value(0),
        titleMarginTop: new Animated.Value(height/2)
    }
    async componentDidMount () {
      
        Animated.sequence([
            Animated.timing(this.state.logoOpacity,{
                toValue: 1,
                duration: 1500,
            }),
        Animated.timing(this.state.titleMarginTop,{
                 toValue:10,
                 duration:1000,
        })
        
    ]).start (()=> {
        this.props.navigation.navigate("Login")
        })
      
    } 
    
    render(){
        return<View style ={StyleSheet.container}>
            <Animated.Image source ={require('./src/images/logo.png')}
        //    style ={{...styles.logo, opacity : this.state.logoOpacity}}>
                 style ={StyleSheet.flatten([styles.logo, {opacity : this.state.logoOpacity}])}>
            </Animated.Image>
            <Animated.Text style ={ StyleSheet.flatten([styles.title, {marginTop: this.state.titleMarginTop}])}>
                Smart Alarm For You!
                
            </Animated.Text>
 
        </View>
    }

}
 const styles = StyleSheet.create({
     container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR_BLUE_LIGHT
     },
     logo:{
         width: 130,
         height: 130,
         borderRadius: 130/2
     },
     title:{
        marginTop: 10,
        textAlign: 'center',
        color: COLOR_DARK_GRAY ,
        width: 400,
        fontSize: 23

     }
})