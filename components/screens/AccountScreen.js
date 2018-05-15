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
import homeBottomNavigation from './../navigation/HomeBottomNavigation';


export default class AccountScreen extends React.Component {
    static navigationOptions = homeBottomNavigation

    render(){
        return (
            <View>
              <Text>My Profile</Text>
            </View>
          ); 
    }
}