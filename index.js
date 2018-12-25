import { AppRegistry } from 'react-native';
import App from './SmartAlarmDrawer';
import { YellowBox } from 'react-native'; 
import LoginScreen from './components/Login/LoginScreen'
import App1 from './components/Login/App'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
AppRegistry.registerComponent('Smart_Alarm', () => App1);