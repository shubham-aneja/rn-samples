import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator,TabNavigator } from 'react-navigation';
import HomeScreen from './Components/homeScreen.js'
import ChatScreen from './Components/chatScreen.js';
import AllContactScreen from './Components/allContactScreen';
import RecentChatScreen from './Components/recentChatScreen';


const MainScreenNavigator=TabNavigator({
  Recent:{screen:RecentChatScreen},
  All:{screen:AllContactScreen}
})

const SimpleApp=StackNavigator({
  Home:{screen:MainScreenNavigator,navigationOptions:{title:"My Chats"}},
  Chat:{screen:ChatScreen},
})

export default class App extends React.Component{
  render(){
     return <SimpleApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
