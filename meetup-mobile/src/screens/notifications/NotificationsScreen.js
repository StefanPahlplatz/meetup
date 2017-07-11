import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

class NotificationsScreen extends Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <MaterialIcons
        name='notifications'
        size={25}
        color={tintColor}
      />
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>
          Notifications
        </Text>
      </View>
    );
  }
}

export default NotificationsScreen;
