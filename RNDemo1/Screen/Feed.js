/**
 * Created by manojsharma2 on 11/1/18.
 */
import React,{Component} from 'react';
import {View,Text,ScrollView} from 'react-native';
import {List,ListItem} from 'react-native-elements';
import {users} from '../config/data';

export default class Feed extends Component{
    onLearnMore=(user)=>{
        this.props.navigation.navigate('Details',{...user});
    }
    render(){
        return(
            <ScrollView>
                <List>
                    {users.map((user) => (
                        <ListItem
                            key={user.login.username}
                            roundAvatar
                            avatar={{ uri: user.picture.thumbnail }}
                            title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
                            subtitle={user.email}
                            onPress={() => this.onLearnMore(user)}
                        />
                    ))}
                </List>
            </ScrollView>
        )
    }
}