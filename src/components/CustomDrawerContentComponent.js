import React, {Component} from 'react'
import { StyleSheet, View, Text, SafeAreaView,Image } from 'react-native'
import { facebookService } from '../containers/FacebookService' 
import {Container,Content,Header,Body} from 'native-base'
import {DrawerItems} from 'react-navigation';

export default class CustomDrawerContentComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      profile: null,
      abc : null
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
    const profile = this.state.profile
    
    return (
        <ProfileView profile={this.state.profile} cde ={this.state.abc}/>
    )
  }
}
class ProfileView extends Component {
    render() {
      const profile = this.props.profile;
      const cde = this.props.abc;
      if (profile == null) {
        return <View />
      }
  
      const styles = StyleSheet.create({
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
          },
          drawerImage:{
            height:100,
            width:100,
            borderRadius:75
          },
          text:{
            paddingLeft:30,
            paddingTop:19,
            textAlign:'center',
            fontSize:19
          }
      })
  
      return (
        <Container>
        <Header style = {{height:190,backgroundColor:'#7986cb'}}>
          <Body>
            <Image
              style = {styles.drawerImage}
              source={{uri:profile.avatar}}
              />
              <Text  style = {styles.text}>{profile.name}</Text>
          </Body>
        </Header>
        <Content>
          <DrawerItems {...cde}/>
        </Content>
      </Container>
      )
    }
  }

