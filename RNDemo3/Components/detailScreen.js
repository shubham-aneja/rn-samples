import React,{Component} from 'react';
import {View,Text} from 'react-native';
export default class DetailScreen extends Component{
    static navigationOptions={
        title:'Detail'
    }
    render(){
        return(
            <View><Text>Detail Page</Text></View>
        )
    }
}