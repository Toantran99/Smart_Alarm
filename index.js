import { AppRegistry } from 'react-native';
import { YellowBox } from 'react-native'; 
import App from './src/navigators/App'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
AppRegistry.registerComponent('Smart_Alarm', () => App);