import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainTabNavigator from './components/navigation/MainTabNavigator';



export default class App extends React.Component {
  render() {
    return (
        <MainTabNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
