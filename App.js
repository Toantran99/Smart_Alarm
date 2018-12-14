import React, {Component} from 'react';
import {View, StyleSheet,Image,TouchableHighlight,Text} from 'react-native';
import {StackNavigator, createDrawerNavigator,DrawerItems} from 'react-navigation';
import Map from './Map';
import ListAlarmStack from './ListAlarmStack';
import SetAlarm from './SetAlarm';
import Alarm from './Alarm';
// import MainView from './MainView';
import MapStackNavigator from './MapStackNavigator';
import {Container,Content,Header,Body} from 'native-base'
import Icon_FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Icon_Ion from 'react-native-vector-icons/Ionicons';

const CustomDrawerContentComponent = (props)=>(
  <Container>
    <Header style = {{height:200,backgroundColor:'#7986cb'}}>
      <Body>
        <Image
          style = {styles.drawerImage}
          source = {require('./src/images/images.jpg')}
          />
          <Text  style = {styles.text}>ABC</Text>
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
          color='#F50057'
          size={19}
          />
          
        )
    }
  },
  'Báo thức': {
      screen: ListAlarmStack,
      navigationOptions :{ 
      drawerIcon: () => (
        <Icon_Ion name='md-alarm' 
        color='#F50057'
        size={19}
        />
      )
    }
  },
  'Thông báo':{
      screen: ListAlarmStack,
      navigationOptions :{ 
      drawerIcon: () => (
        <Icon_FontAwesome name='bell' 
        color='#F50057'
        size={19}
        />
      )
      }
    },
  'Bạn bè':{
      screen: Alarm,
      navigationOptions :{ 
      drawerIcon: () => (
        <Icon_FontAwesome name='user-friends' 
        color='#F50057'
        size={19}
        />
      )
      }
    },
  'Đăng xuất':{
      screen: ListAlarmStack,
      navigationOptions :{ 
      drawerIcon: ({ tintColor }) => (
        <Icon_Ion name='ios-log-out' 
        color='#F50057'
        size={19}
        />
      )
      }
    },
  },
  {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  contentComponent: CustomDrawerContentComponent,
  contentOptions:{
    activeTintColor: '#ff5722',
    inactiveTintColor: '#757575',
    activeBackgroundColor: '#bdbdbd'
  },
});

styles = StyleSheet.create({
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
    paddingTop:20,
    textAlign:'center',
    fontSize:20
  }
})



export default TravelAlarmDrawer;
