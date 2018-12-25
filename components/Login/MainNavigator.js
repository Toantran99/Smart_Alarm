import { createBottomTabNavigator } from 'react-navigation'
import ProfilePage from './ProfilePage'
import LoginScreen from './LoginScreen'

export const MainNavigator = createBottomTabNavigator({
  Profile: {
    screen: ProfilePage,
    navigationOptions: {
      tabBarLabel: 'Profile'
    }
  },
  Shop: {
    screen: LoginScreen,
    navigationOptions: {
      tabBarLabel: 'Shop'
    }
  }
})