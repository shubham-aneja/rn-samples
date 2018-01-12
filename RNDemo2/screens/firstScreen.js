
import React,{Component} from 'react';
import { StyleSheet, Text, View ,Button,ScrollView,Image} from 'react-native';
import { StackNavigator,TabNavigator,DrawerNavigator } from 'react-navigation';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
export default class SecondScreen extends Component{
    static navigationOptions={
        drawerLabel: 'FirstScreen',
        drawerIcon: ({ tintColor }) => (
            <Image
              source={require('./home.png')}
              style={[ {tintColor: 'blue'}]}
            />
          ),
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Screen 1</Text>
                <Button onPress={()=>this.props.navigation.navigate('DrawerOpen')} title="Open DrawerNavigator"/>
            </View>

        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color:'blue',
        fontSize:30,
    },
})