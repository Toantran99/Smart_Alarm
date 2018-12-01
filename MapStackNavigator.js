import React, {Component} from 'react';
import {View, StyleSheet,TouchableHighlight,Text,Image} from 'react-native';
import {StackNavigator, DrawerNavigator} from 'react-navigation';
import Map from './Map';
import App from './App';
import ListAlarm from './ListAlarm';
import SetAlarm from './SetAlarm';
import Icon from 'react-native-vector-icons/Ionicons';

const menuIcon = (<Icon name="md-menu" size={30} color={'#fff'} style={{paddingRight: 10, paddingLeft: 15}} />);
const searchIcon = (<Icon name="ios-search" size={30} color={'#fff'} style={{paddingRight: 10, paddingLeft: 15}} />);
const map = new Map();
export default StackNavigator({
	Map: {
		screen: Map,
		navigationOptions: ({navigation}) => ({
			headerStyle:{
				backgroundColor: '#1E90FF',
				borderBottomColor: '#ffffff',
				borderBottomWidth: 3,
			},
			title:'Bản đồ',
			headerTintColor: 'white',
			headerLeft:( <View style={styles.headerLeft}>
				<TouchableHighlight style = {styles.container}
					onPress = {()=>{
						// navigation.navigate('DrawerOpen');
						navigation.openDrawer();
					}}>
					{ menuIcon }
				</TouchableHighlight>
				</View>
			),
			// headerRight:<View style={styles.headerLeft}>
			// 	<TouchableHighlight style = {styles.container}
			// 		onPress = {()=>{
			// 			this.props.openSearchModal();
			// 			// map.openSearchModal();
			// 		}}>
			// 		{ searchIcon }
			// 	</TouchableHighlight>
			// </View>
			})
		},
	SetAlarm: {screen: SetAlarm},
});

const styles = StyleSheet.create({
	headerLeft: {
	  flexDirection: 'row',
	},
  });