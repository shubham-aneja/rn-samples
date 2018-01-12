/**
 * Created by manojsharma2 on 10/1/18.
 */
import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';

export default class AllContactScreen extends Component{
    render(){
        const {navigate}=this.props.navigation;
        return(
            <View>
                <Text>list of all contacts</Text>
                <Button onPress={()=>navigate('Chat',{user:'Manoj'})} title="Chat With Manoj"/>
                <Button onPress={()=>navigate('Chat',{user:'Amit'})} title="Chat With Amit"/>
            </View>
        )
    }
}