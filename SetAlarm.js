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
	Picker,ScrollView, Alert
} from 'react-native';
import Sound from 'react-native-sound';
import {StackNavigator} from 'react-navigation';
import ListAlarm from './ListAlarm';

function setTestState(testInfo, component, status) {
	component.setState({tests: {...component.state.tests}});
  }
  const audioTests = 
	{
	  title: 'mp3 in bundle',
	  url: 'ringtone.mp3',
	  basePath: Sound.MAIN_BUNDLE,
	}
  /**
   * Generic play function for majority of tests
   */
function playSound(testInfo, component) {
	setTestState(testInfo, component, 'pending');
  
	const callback = (error, sound) => {
	  if (error) {
		Alert.alert('error', error.message);
		setTestState(testInfo, component, 'fail');
		return;
	  }
	  setTestState(testInfo, component, 'playing');
	  // Run optional pre-play callback
	  testInfo.onPrepared && testInfo.onPrepared(sound, component);
	  sound.play(() => {
		// Success counts as getting to the end
		setTestState(testInfo, component, 'win');
		// Release when it's done so we're not using up resources
		sound.release();
	  });
	};
  
	// If the audio is a 'require' then the second parameter must be the callback.
	// if (testInfo.isRequire) {
	//   const sound = new Sound(testInfo.url, error => callback(error, sound));
	// } else {
	//   const sound = new Sound(testInfo.url, testInfo.basePath, error => callback(error, sound));
	// }
  }
class SetAlarm extends Component {
	constructor(props) {
		super(props);
		Sound.setCategory('Playback', true); // true = mixWithOthers
			
		// Special case for stopping
		this.stopSoundLooped = () => {
		if (!this.state.loopingSound) {
			return;
		}

		this.state.loopingSound.stop().release();
		this.setState({loopingSound: null, tests: {...this.state.tests, ['mp3 in bundle (looped)']: 'win'}});
		};



		const {params} = this.props.navigation.state;
		this.state = {
			lastedKey: -1,
			numList: 0,
			alarmList: [],
			alarm: {
				key: "",
				alarmName: "",
				address: params.name,
				latitude: params.latitude,
				longitude: params.longitude,
				minDisToAlarm: 100,
				ringtone: "default",
				enable: true,
			},
			min: 100,
			name: "Báo thức 1",
			distance: params.distance,
			ringtone: "ringtone.mp3",
			loopingSound: undefined,
			tests: {},
		}
	}

	componentDidMount()
	{
		this.loadAllAlarm();
	}

	static navigationOptions = {
		title: 'Alarm Settings',
		tabBarVisible: false,
		header:
		<View></View>
	};

	addAlarm = () => {
		var tempAlarm = {
			key: new Date(),
			alarmname: this.state.name,
			address: this.state.alarm.address,
			latitude: this.state.alarm.latitude,
			longitude: this.state.alarm.longitude,
			minDisToAlarm: this.state.min,
			ringtone: this.state.ringtone,
			enable: this.state.alarm.enable,
		}

		var tempList = this.state.alarmList;
		tempList.push(tempAlarm);
		this.setState({alarmList: tempList});
		this.setData(tempAlarm.key, tempAlarm);
		this.props.navigation.state.params.onGoBack();
		this.props.navigation.goBack();
	}

	loadAllAlarm()
		{
			AsyncStorage.getAllKeys()
			.then(keys => {
				this.getAllData(keys);
			});
		}

		getAllData(keyArray)
		{
			var tempList = new Array();
			AsyncStorage.multiGet(keyArray).then(
			value => {
				for(var i = 0; i < value.length; i++)
				{
					AsyncStorage.getItem(keyArray[i])
					.then(itemValue => {
						const objValue = JSON.parse(itemValue);
						tempList.push(objValue);
						this.setState({
							alarmList: tempList
						})
					});
				}
				this.setState({numList: value.length});
			}
			);
		}

		setData(keyAlarm, alarmObj)
		{
			AsyncStorage.setItem(keyAlarm, JSON.stringify(alarmObj));
		}

		updateData(keyAlarm, alarmObj)
		{
			AsyncStorage.mergeItem(keyAlarm, JSON.stringify(alarmObj));
		}

		getMP3(nameFile){
			title:''
			url: nameFile;
			basePath: Sound.MAIN_BUNDLE;
			console.log('ABC');
		}
		ABC(nameFile){
			this.setState({ringtone: nameFile})// => set value for Picker when value change

			this.ringtone = new Sound(
				nameFile,
				Sound.MAIN_BUNDLE,
			   error => {
					if (error) {
					 // Means the file was never loaded.
					 console.warn(error);
					 return;
				   }
				   this.ringtone.setVolume(1);
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
						whoosh.reset();
					  }
				   });
				 }
			   );
		}
		render() {
			
		return(

			<View style={{flex: 1, position: "relative"}}>
				<View style={styles.statusBar}>
					<TouchableOpacity onPress = {() => this.props.navigation.goBack()}>
						<Image source={require('./src/images/back_icon.png')} style={{margin: 15, width: 20, height: 20}} />
					</TouchableOpacity>
					<Text style = {{paddingLeft: 0,alignSelf: 'center', flex: 1, fontSize: 20, color: 'white'}}>Add Alarm</Text>
					<TouchableOpacity style={styles.saveBtn} onPress={this.addAlarm}>
						<Text style = {{alignSelf: 'center', paddingLeft: 10, fontSize: 20, color: 'white'}}>Save</Text>
					</TouchableOpacity>
				</View>

				<View style = {{height: 50}}></View>
				
				<View style={styles.titleBox}>
					<Text style = {styles.propertiesTitle}>Alarm name</Text>
					<TextInput
						style = {{marginLeft: 25, padding: 0}}
						underlineColorAndroid='transparent'
						autoFocus = {true}
						onChangeText={(nameAlarm) => this.setState({name:nameAlarm})}
						value={this.state.name}/>
				</View>

				<View style={styles.titleBox}>
					<Text style = {styles.propertiesTitle}>Destination</Text>
					<Text style = {{paddingLeft: 25}}>{this.state.alarm.address}</Text>
				</View>

				<View style={styles.titleBox}>
					<Text style = {styles.propertiesTitle}>Distance</Text>
					<Text style = {{paddingLeft: 25}}>{this.state.distance + "m"}</Text>
				</View>

				<View style={styles.titleBox}>
					<Text style = {styles.propertiesTitle}>Min Distance</Text>
					<Text style = {{paddingLeft: 25}}>{this.state.min + "m"}</Text>
					<Slider
						style={{ width: 320, marginLeft: 20}}
						step={1}
						thumbTintColor = {"#ff5722"}
						minimumTrackTintColor = {"#ff5722"}
						minimumValue={100}
						maximumValue={1000}
						value={this.state.min}
						onValueChange={val => this.setState({ min: val })}/>
				</View>

				<View style={styles.titleBox}>
					<Text style = {styles.propertiesTitle}>Ringtone</Text>
					<Picker style = {styles.picker}
					  selectedValue={this.state.ringtone}
					//   onValueChange={(itemValue, itemIndex) => this.setState({ringtone: itemValue})}
					// onValueChange={(itemValue, itemIndex) => this.ABC(this.state.ringtone)}
					onValueChange={(itemValue, itemIndex) => this.ABC(itemValue)}
					  >
					  <Picker.Item label="Oop oop" value="ringtone.mp3" />
					  <Picker.Item label="Hello" value="hello_ringtone.mp3" />
					  <Picker.Item label="In My Heart" value="in_my_heart.mp3" />
					  <Picker.Item label="Sweet Ringtone" value="sweet.mp3" />
					</Picker>
				</View>
			</View>
			)
		}
//

		
	}

	const styles = StyleSheet.create({
		button: {
			height: 50,
			width: 50,
			borderRadius: 50,
			alignItems: 'center',
			justifyContent: 'center',
			position: 'absolute',
			bottom: 20,
			right:20,
			shadowColor: "#000000",
			shadowOpacity: 0.8,
			shadowRadius: 200,
			shadowOffset: {
				height: 1,
				width: 0
			}
		},
		imgBtn: {
			height: 50,
			width: 50,
			borderRadius: 50,
		},
		picker: {
			height: 20,
			marginLeft: 20,
			opacity: 0.6,
		},
		statusBar:{
			flexDirection: 'row',
			backgroundColor: "#ff5722",
			alignSelf: 'flex-start',
			position: 'absolute',
			right: 0,
			top: 0,
		},
		saveBtn:{
			flexDirection: 'row',
			width: 70,
			backgroundColor: 'transparent',
			height: 50,
			shadowColor: '#000000',
			shadowOffset: {
				width: 0,
				height: 3
			},
			shadowRadius: 5,
			shadowOpacity: 1.0,
		},
		titleBox: {
			paddingBottom: 10
		},
		propertiesTitle: {
			marginBottom: 10,
			color: "black",
			fontWeight: 'bold',
			padding: 10,
			backgroundColor: "#D7D7D7",
			paddingLeft: 20
		}
	});

	export default SetAlarm;