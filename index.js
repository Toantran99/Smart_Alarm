import { AppRegistry } from 'react-native';
import AppStackNavigator from './AppStackNavigator'
import { YellowBox } from 'react-native'; 
import {name as appName} from './app.json';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
AppRegistry.registerComponent(appName, () => AppStackNavigator);