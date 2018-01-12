/**
 * Created by manojsharma2 on 10/1/18.
 */
import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';

export default class RecentChatScreen extends Component{
    render(){
        const {navigate}=this.props.navigation;
        return(
            <View>
                <Text>list of recent chat</Text>
                <Button onPress={()=>navigate('Chat',{user:'Manoj'})} title="Chat With Manoj"/>
            </View>
        )
    }
}