import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Colors from './../../constants/Colors';

import HomeScreen from './../screens/HomeScreen';
import AccountScreen from './../screens/AccountScreen';

import { createBottomTabNavigator } from 'react-navigation';
import createMaterialBottomTabNavigator from 'react-navigation-material-bottom-tabs/createMaterialBottomTabNavigator';

export default createMaterialBottomTabNavigator({
  Home: {
    screen:HomeScreen
  },
  Profile: {
    screen:AccountScreen
  }
},{
  initialRouteName:'Home',
  activeTintColor: '#F44336'
});
