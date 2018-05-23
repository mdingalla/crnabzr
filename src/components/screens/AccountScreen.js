import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Linking,
  AsyncStorage,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from './../../constants/Colors';
import homeBottomNavigation from './../navigation/HomeBottomNavigation';
// import Container from '../../../native-base-theme/components/Container';
import { Container, Content, H1, H2, H3,Text, Button } from 'native-base';


export default class AccountScreen extends React.Component {
    static navigationOptions = homeBottomNavigation

    render(){
        return (
            <Container>
              
             <Content>
             <Text>My Profile</Text>
               </Content>
            </Container>
          ); 
    }
}