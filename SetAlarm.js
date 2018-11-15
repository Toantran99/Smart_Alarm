import React, {Component} from 'react';
import {Text, View, Button, StatusBar, TextInput, TouchableOpacity, AsyncStorage} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Data from './DataController';

class SetAlarm extends Component {

	constructor(props) {
		super(props);
		const {params} = this.props.navigation.state;
	}


	static navigationOptions = {
	    title: 'Alarm Settings',
			header:
	      <View></View>
	};

	render() {

		return(

			<View style={{padding: 20, paddingTop: 100}}>
		   <Text> Test</Text>

			</View>
		)
	}
}

export default SetAlarm;