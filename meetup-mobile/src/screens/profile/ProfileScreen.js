import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';
import Metrics from '../../../constants/Metrics';

class ProfileScreen extends Component {

  static navigationOptions = {
    headerStyle: {
      backgroundColor: Colors.redColor,
      paddingTop: Metrics.statusBarHeight,
      height: Metrics.statusBarHeight + Metrics.toolBarHeight,
    },
    tabBarIcon: ({ tintColor }) => (
      <MaterialIcons
        name='account-circle'
        size={25}
        color={tintColor}
      />
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>
          ProfileScreen
        </Text>
      </View>
    );
  }
}

export default ProfileScreen;
