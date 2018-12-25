import { createStackNavigator } from 'react-navigation'
import LoginScreen from '../components/LoginScreen'
export const LoginNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: { header: null }
  }
})