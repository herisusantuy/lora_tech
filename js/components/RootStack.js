import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screen
import Login from './Login';
import MainTab from './MainTab';

// Stack Navigation
const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator headerMode="none" initialRouteName="MainTab">
    <RootStack.Screen name="Login" component={Login} />
    <RootStack.Screen name="MainTab" component={MainTab} />
  </RootStack.Navigator>
);

export default RootStackScreen;
