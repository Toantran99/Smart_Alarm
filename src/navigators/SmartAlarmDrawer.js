import React, {Component} from 'react';
import {View, StyleSheet,Image,TouchableHighlight,Text} from 'react-native';
import {StackNavigator, createDrawerNavigator,DrawerItems} from 'react-navigation';
import ListAlarmStack from '../navigators/ListAlarmStack';
import Logout from '../containers/Logout';
import MapStackNavigator from '../navigators/MapStackNavigator';
import Icon_FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Icon_Ion from 'react-native-vector-icons/Ionicons';
import {Container,Content,Header,Body} from 'native-base'

// const a = new CustomDrawerContentComponent1();

const CustomDrawerContentComponent = (props)=>(
  <Container>
    <Header style = {{height:190,backgroundColor:'#7986cb'}}>
      <Body>
        <Image
          style = {styles.drawerImage}
          source={require('../assets/598846.jpg')}
          />
          <Text  style = {styles.text}>Nguyễn Trung Nghĩa</Text>
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props}/>
    </Content>
  </Container>
)



export const SmartAlarmDrawer = createDrawerNavigator({
  "Bản đồ": {
    screen: MapStackNavigator,
    navigationOptions :{ 
        drawerIcon: () => (
          <Icon_FontAwesome name='map-marked-alt' 
          color='#F50057'
          size={20}
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
        size={20}
        />
      )
    }
  },
  // 'Thông báo':{
  //     screen: ListAlarmStack,
  //     navigationOptions :{ 
  //     drawerIcon: () => (
  //       <Icon_FontAwesome name='bell' 
  //       color='#F50057'
  //       size={19}
  //       />
  //     )
  //     }
  //   },
  // 'Bạn bè':{
  //     screen: ListAlarmStack,
  //     navigationOptions :{ 
  //     drawerIcon: () => (
  //       <Icon_FontAwesome name='user-friends' 
  //       color='#F50057'
  //       size={19}
  //       />
  //     )
  //     }
  //   },
  'Đăng xuất':{
      screen: Logout,
      navigationOptions :{ 
      drawerIcon: ({ tintColor }) => (
        <Icon_Ion name='ios-log-out' 
        color='#F50057'
        size={20}
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
    activeTintColor: '#ff5719',
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
    borderRadius:75,
  },
  text:{
    paddingLeft:15,
    paddingTop:19,
    // textAlign:'center',
    fontSize:19,
  }
})



// export default SmartAlarmDrawer;
