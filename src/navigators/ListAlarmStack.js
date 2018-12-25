import React, {Component} from 'react';
import {View, StyleSheet,TouchableHighlight} from 'react-native';
import {StackNavigator, DrawerNavigator} from 'react-navigation';
import ListAlarm from '../components/ListAlarm';
import EditAlarm from '../components/EditAlarm';
import Icon from 'react-native-vector-icons/Ionicons';

const menuIcon = (<Icon name="md-menu" size={30} color={'#fff'} style={{paddingRight: 10, paddingLeft: 15}} />);

export default (ListAlarmStack = StackNavigator({
	ListAlarm: {screen: ListAlarm,
		navigationOptions: ({navigation}) => ({
			headerStyle:{
				backgroundColor: '#7986cb',
				borderBottomColor: '#ffffff',
				borderBottomWidth: 3,
			},
			title:'Báo thức',
			headerTitleStyle: {
                textAlign: 'center',
                alignSelf:'center',
            },
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
			})},
	EditAlarm: {screen: EditAlarm,
		navigationOptions: ({navigation}) => ({
			headerStyle:{
				backgroundColor: '#7986cb',
				borderBottomColor: '#ffffff',
				borderBottomWidth: 3,
			},
			title:'Chỉnh sửa báo thức',
			headerTintColor: 'white',
			})},
}));