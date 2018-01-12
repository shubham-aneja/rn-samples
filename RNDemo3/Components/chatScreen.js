
import React from 'react';
import {View,Text,Button} from 'react-native';
class ChatScreen extends React.Component {
  static navigationOptions =({navigation})=>( {
    title: `Chat With ${navigation.state.params.user}`,
  });
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat With {params.user} </Text>
      </View>
    );
  }
}
export default ChatScreen;