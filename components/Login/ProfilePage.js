import React, {Component} from 'react'
import { StyleSheet, View, Text, SafeAreaView } from 'react-native'
import { facebookService } from './FacebookService'

export default class ProfilePage extends React.Component {
  constructor(props) {
    super(props)

    this.logout = this.logout.bind(this)
    this.state = {
      profile: null
    }
  }

  componentDidMount() {
    this.loadData()
  }

  async loadData() {
    const profile = await facebookService.fetchProfile()

    this.setState({
      profile: profile
    })
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        backgroundColor: '#F5FCFF',
        padding: 10
      },
      point: {
        paddingTop: 30
      }
    })

    const profile = this.state.profile
    
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <ProfileView profile={this.state.profile}/>
          
        </View>
      </SafeAreaView>
    )
  }

  logout() {
    this.props.navigation.navigate('LoginNavigator')
  }
}

class ProfileView extends Component {
  render() {
    const profile = this.props.profile
    if (profile == null) {
      return <View />
    }

    const styles = StyleSheet.create({
      container: {
        flexDirection: 'row'
      },
      left: {
        paddingRight: 10
      },
      avatar: {
        
      },
      text: {
        fontSize: 20
      },
      right: {
        flexDirection: 'column',
        justifyContent: 'space-around'
      }
    })

    return (
      <View style={styles.container}>
        <View style={styles.left}>\
        <Text>{profile.avatar}</Text>
          {/* <Avatar
            style={styles.avatar}
            large
            rounded
            source={{ uri: profile.avatar }} /> */}
        </View>
        <View style={styles.right}>
          <Text style={styles.text}>{profile.name}</Text>
          {facebookService.makeLogoutButton(() => {
            this.logout()
          })}
        </View>
      </View>
    )
  }
}