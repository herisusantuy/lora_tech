import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 

import {color} from '../styles/default';
import Home from './Home'

// Navigation Setting
const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: color.darkBlue,
      },
      headerTintColor: color.white,
      fontWeight: 'bold',
    }}>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{
        title: 'LORA Tech', 
      }}
    />
  </HomeStack.Navigator>
);



const MainTab = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor={color.white}
    inactiveColor="grey"
    barStyle={{
      backgroundColor: color.darkBlue,
      paddingVertical: 5,
    }}>
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: color.darkBlue,
        tabBarIcon: ({color}) => (
          <MaterialIcons name="home-filled" color={color} size={25} />
        ),
      }}
    /> 
  </Tab.Navigator>
);

export default MainTab;