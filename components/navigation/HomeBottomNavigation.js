
import React from 'react';
import {
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Linking,
  AsyncStorage,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from './../../constants/Colors';

// function getTitle(mystate){
//   switch (mystate){
//     case 'Links':
//       return 'My Account';

//     default:
//       return mystate;
//   }
// }

export  default  navigationOptions = ({ navigation }) => ({
    title:navigation.state.routeName,
    tabBarIcon: ({ focused }) => {
      const { routeName } = navigation.state;
      let iconName;
      switch (routeName) {
        case 'Home':
          iconName =
            Platform.OS === 'ios'
              ? `ios-home${focused ? '' : '-outline'}`
              : 'md-home';
          break;
        case 'Me':
          iconName = Platform.OS === 'ios' ? `ios-person${focused ? '' : '-outline'}` : 'md-person';
          break;

        case 'Fantasy':
          iconName = Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link';
          break;
          
        case 'Settings':
          iconName =
            Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options';
      }
      return (
        <Ionicons
          name={iconName}
          size={28}
          style={{ marginBottom: -3 }}
          color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
      );
    },
})