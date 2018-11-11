 import MapView from 'react-native-maps';
 import React, { Component } from 'react';
 import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  Button,
  Image,
  AsyncStorage,
  ToastAndroid,
} from 'react-native';
import RNGooglePlaces from 'react-native-google-places';
import geolib from 'geolib';
import PushNotification from 'react-native-push-notification';
import getAddress from './GetAddress';

var {width, height} = Dimensions.get('window')

const SCREEN_WIDTH = width
const SCREEN_HEIGHT = height
const ASPECT_RADIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RADIO

export default class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialPosition: {
        latitude: 14.058324,
        longitude: 108.277199,
        latitudeDelta: 0.9,
        longitudeDelta: 0.9
      },
  }
}

  watchId: ?number = null;

render() {
  return (
    <View style ={styles.container}>
    <MapView
    style={styles.map}
    region={this.state.initialPosition}>
    </MapView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
