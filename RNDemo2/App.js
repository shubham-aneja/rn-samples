import React from 'react';
import { StyleSheet, Text, View ,Button,ScrollView} from 'react-native';
import { StackNavigator,TabNavigator,DrawerNavigator,Image } from 'react-navigation';
import FirstScreen from './screens/firstScreen';
import SecondScreen from './screens/secondScreen';

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const MyApp = DrawerNavigator({
  FirstScreen: {
    screen: FirstScreen,
  },
  SecondScreen: {
    screen: SecondScreen,
  },
});
export default MyApp;