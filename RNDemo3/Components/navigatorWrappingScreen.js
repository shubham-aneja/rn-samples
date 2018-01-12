/**
 * Created by manojsharma2 on 10/1/18.
 */
import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';
import { StackNavigator,TabNavigator } from 'react-navigation';
import AllContactScreen from './allContactScreen';
import RecentChatScreen from './recentChatScreen';

const MainScreenNavigator=TabNavigator({
    Recent:{screen:RecentChatScreen},
    All:{screen:AllContactScreen}
})
export default class NavigatorWrappingScreen extends React.Component {
    render() {
        return (
            <View>
                <MainScreenNavigator navigation={this.props.navigation}/>
            </View>
        );
    }
}
NavigatorWrappingScreen.router = MainScreenNavigator.router;
