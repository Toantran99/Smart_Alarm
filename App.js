import React, {Component} from 'react';
import {View, StyleSheet,Image,TouchableHighlight} from 'react-native';
import {StackNavigator, createDrawerNavigator,DrawerItems} from 'react-navigation';
import Map from './Map';
import ListAlarmStack from './ListAlarmStack';
import SetAlarm from './SetAlarm';
// import MainView from './MainView';
import MapStackNavigator from './MapStackNavigator';
import {Container,Content,Header,Body} from 'native-base'
import Icon_FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Icon_Ion from 'react-native-vector-icons/Ionicons';

const CustomDrawerContentComponent = (props)=>(
  <Container>
    <Header style = {{height:200,backgroundColor:'white'}}>
      <Body>
        <Image
          style = {StyleSheet.drawerImage}
          source = {require('./src/images/images.jpg')}
          />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props}/>
    </Content>
  </Container>
)



const TravelAlarmDrawer = createDrawerNavigator({
  "Bản đồ": {
    screen: MapStackNavigator,
    navigationOptions :{ 
        drawerIcon: () => (
          <Icon_FontAwesome name='map-marked-alt' 
          color='#F50057'/>
        )
    }
  },
  'Báo thức': {
      screen: ListAlarmStack,
      navigationOptions :{ 
      drawerIcon: () => (
        <Icon_Ion name='md-alarm' 
        color='#F50057'/>
      )
    }
  },
  'Thông báo':{
      screen: ListAlarmStack,
      navigationOptions :{ 
      drawerIcon: () => (
        <Icon_FontAwesome name='bell' 
        color='#F50057'/>
      )
      }
    },
  'Bạn bè':{
      screen: ListAlarmStack,
      navigationOptions :{ 
      drawerIcon: () => (
        <Icon_FontAwesome name='user-friends' 
        color='#F50057'/>
      )
      }
    },
  'Đăng xuất':{
      screen: ListAlarmStack,
      navigationOptions :{ 
      drawerIcon: () => (
        <Icon_Ion name='ios-log-out' 
        color='#F50057'/>
      )
      }
    },
  },
  {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  contentComponent: CustomDrawerContentComponent,
  contentOptions:{
    activeTintColor:'orange'
  },
  tabBarOptions: {
    activeTintColor: '#ff5722',
    inactiveTintColor: '#000000',
    style: {
      padding: 2,
      backgroundColor: 'white',
    },
    showIcon: true,
    upperCaseLabel: false,
    indicatorStyle: {
      backgroundColor: '#ff5722',
    },
    tabStyle: {
      paddingVertical: 0,
      height: 50,
    }
  },
});

styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  drawerImage:{
    height:150,
    width:150,
    borderRadius:75
  },
})



export default TravelAlarmDrawer;
