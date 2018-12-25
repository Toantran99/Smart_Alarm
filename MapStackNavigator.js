import React, {Component} from 'react';
import {View, StyleSheet,TouchableHighlight,Text,Image} from 'react-native';
import {StackNavigator, DrawerNavigator} from 'react-navigation';
import Map from './Map';
import App from './App';
import Alarm from './Alarm';
import SetAlarm from './SetAlarm';
import Icon from 'react-native-vector-icons/Ionicons';

const menuIcon = (<Icon name="md-menu" size={30} color={'#fff'} style={{paddingRight: 10, paddingLeft: 15}} />);
const searchIcon = (<Icon name="ios-search" size={30} color={'#fff'} style={{paddingRight: 10, paddingLeft: 15}} />);
export default StackNavigator({
	Map: {
		screen: Map,
		navigationOptions: ({navigation}) => ({
			headerStyle:{
				backgroundColor: '#7986cb',
				borderBottomColor: '#ffffff',
				borderBottomWidth: 3,
			},
			title:'Bản đồ',
			headerTintColor: 'white',
			headerLeft:( <View style={styles.headerLeft}>
				<TouchableHighlight style = {styles.container}
					onPress = {()=>{
						navigation.openDrawer();
					}}>
					{ menuIcon }
				</TouchableHighlight>
				</View>
			),
			})
		},
	 SetAlarm: {screen: SetAlarm,
		navigationOptions: ({navigation}) => ({
			headerStyle:{
				backgroundColor: '#7986cb',
				borderBottomColor: '#ffffff',
				borderBottomWidth: 3,
			},
			title:'Thiết lập báo thức',
			headerTintColor: 'white',
			})
	},
	 Alarm:{screen:Alarm,navigationOptions: { header: null }},


});

const styles = StyleSheet.create({
	headerLeft: {
	  flexDirection: 'row',
	},
  });