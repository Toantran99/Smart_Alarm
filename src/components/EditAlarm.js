import React, {Component} from 'react';
import {
	Text,
	Image,
	View,
	StyleSheet,
	Button,
	StatusBar,
	TextInput,
	TouchableOpacity,
	AsyncStorage,
	Slider,
	Picker
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import geolib from 'geolib';
import Icon_MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon_Ion from 'react-native-vector-icons/Ionicons';

const updateIcon = (<Icon_Ion name="md-checkmark" size={32} color={'#fff'} style={{paddingRight: 15, paddingLeft: 15,paddingTop:5 ,paddingBottom:5}}/>);

class EditAlarm extends Component {
	constructor(props) {
		super(props);
		const {params} = this.props.navigation.state;
		this.saveAlarm = this.saveAlarm.bind(this);

		this.state = {
			alarm: {
				key: params.alarm.key,
				alarmname: params.alarm.alarmname,
				address: params.alarm.address,
				latitude: params.alarm.latitude,
				longitude: params.alarm.longitude,
				minDisToAlarm: params.alarm.minDisToAlarm,
				ringtone: params.alarm.ringtone,
				enable: params.alarm.enable,
			},
			distance: geolib.getDistance(params.currentPosition, params.alarm),
			min: params.alarm.minDisToAlarm,
			name: params.alarm.alarmname,
			ringtone: params.alarm.ringtone,
		}
	}

	static navigationOptions = ({navigation}) => {
		const {params = {}} = navigation.state;
		return {
		  headerRight:<View >
				  <TouchableOpacity onPress={() => params.saveAlarm()}>
					{updateIcon} 
				</TouchableOpacity>
				</View>
		};
	}

	saveAlarm = () => {
		var tempAlarm = {
			key: this.state.alarm.key,
			alarmname: this.state.name,
			address: this.state.alarm.address,
			latitude: this.state.alarm.latitude,
			longitude: this.state.alarm.longitude,
			minDisToAlarm: this.state.min,
			ringtone: this.state.ringtone,
			enable: this.state.alarm.enable,
		}

		this.updateData(tempAlarm.key, tempAlarm).then(this.goBackToListAlarm());
    }

    goBackToListAlarm = () => {
    	this.props.navigation.state.params.onGoBack();
    	this.props.navigation.goBack();
    }


	render() {
		return(

			<View style={{flex: 1, position: "relative"}}>
				{/* <View style={styles.statusBar}>
					<TouchableOpacity onPress = {() => this.props.navigation.goBack()}>
						{closeIcon}
					</TouchableOpacity>
					<Text style = {{paddingLeft: 0,textAlign:'center',alignSelf: 'center', flex: 1, fontSize: 22, color: 'black'}}>Chỉnh sửa báo thức</Text>

					<TouchableOpacity onPress={this.addAlarm} >
						{saveIcon} 
					</TouchableOpacity>
				</View> */}

				{/* <View style = {{height: 50}}></View> */}
				
				<View style={styles.titleBox}>
					<Text style = {styles.propertiesTitle}>Tên báo thức</Text>
					<TextInput
						style = {styles.propertiesText}
						underlineColorAndroid='transparent'
						autoFocus = {true}
						onChangeText={(nameAlarm) => this.setState({name:nameAlarm})}
						value={this.state.name}/>
				</View>

				<View style={styles.titleBox}>
					<Text style = {styles.propertiesTitle}>Địa chỉ</Text>
					<Text style = {styles.propertiesText}>{this.state.alarm.address}</Text>
				</View>

				<View style={styles.titleBox}>
					<Text style = {styles.propertiesTitle}>Khoảng cách hiện tại</Text>
					<Text style = {styles.propertiesText}>{this.state.distance + "m"}</Text>
				</View>

				<View style={styles.titleBox}>
					<Text style = {styles.propertiesTitle}>Khoảng cách báo thức</Text>
					<Text style = {styles.propertiesText}>{this.state.min + "m"}</Text>
					<Slider
						style={{ width: 320, marginLeft: 20}}
						step={1}
						thumbTintColor = {"#64dd17"}
						minimumTrackTintColor = {"#64dd17"}
						minimumValue={100}
						maximumValue={1000}
						value={this.state.min}
						onValueChange={val => this.setState({ min: val })}/>
				</View>

				<View style={styles.titleBox}>
					<Text style = {styles.propertiesTitle}>Nhạc chuông</Text>
					<Picker style = {styles.picker}
					  selectedValue={this.state.ringtone}
					//   onValueChange={(itemValue, itemIndex) => this.setState({ringtone: itemValue})}
					// onValueChange={(itemValue, itemIndex) => this.ABC(this.state.ringtone)}
					onValueChange={(itemValue, itemIndex) => this.turnOnRingStone(itemValue)}
					  >
					  <Picker.Item label="Way Back Home" value="way_back_home.mp3" />
					  <Picker.Item label="Hello OMFG" value="hello_omfg_ringtone.mp3" />
					  <Picker.Item label="Chicken Disco" value="chicken_disco.mp3" />
					  <Picker.Item label="Despacito Marimba" value="despacito_marimba.mp3" />
					</Picker>
				</View>
				
			</View>
			)
		}

  async updateData(keyAlarm, alarmObj)
  {
    await AsyncStorage.mergeItem(keyAlarm, JSON.stringify(alarmObj));
  }
}

const styles = StyleSheet.create({
	picker: {
		height: 20,
		marginLeft: 20,
		opacity: 0.6,
	},
	statusBar:{
		flexDirection: 'row',
		backgroundColor: "#7986cb",
		alignSelf: 'flex-start',
		position: 'absolute',
		right: 0,
		top: 0,
	},
	titleBox: {
		paddingBottom: 10
	},
	propertiesTitle: {
		marginBottom: 10,
		color: "black",
		fontWeight: 'bold',
		padding: 10,
		fontSize:18,
		backgroundColor: "#D7D7D7",
		paddingLeft: 20
	},
	propertiesText: {
		paddingLeft: 25,
		color: "black",
		fontSize:16,
	},
});

export default EditAlarm;
