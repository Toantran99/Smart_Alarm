import { createStackNavigator } from 'react-navigation'
import LoginFacebook from './LoginFacebook'
import LoginScreen from './LoginScreen'
export const LoginNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: { header: null }
  }
})