
import React from 'react';
import {View,Text,Button} from 'react-native';
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat',{user:'Manoj'})}
          title="Chat with Manoj"
        />
          <Button onPress={()=>navigate('Chat',{user:'Subhum'})} title="Chat with Subhum"/>
          <Button onPress={()=>navigate('Detail')} title="Detail"/>
      </View>
    );
  }
}
export default HomeScreen;