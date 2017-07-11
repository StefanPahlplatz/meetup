import React, { Component } from 'react';
import { Platform, View, Text } from 'react-native';
import { Button, Icon } from 'native-base';

import Metrics from '../../../constants/Metrics';
import Colors from '../../../constants/Colors';

class CreateMeetupScreen extends Component {
  static navigationOptions = ({ navigation }) => ({ //eslint-disable-line
    title: 'Create a new Meetup',
    headerTitleStyle: { color: Colors.whiteColor },
    headerStyle: {
      backgroundColor: Colors.redColor,
      ...Platform.select({
        android: {
          backgroundColor: Colors.redColor,
          paddingTop: Metrics.statusBarHeight,
          height: Metrics.statusBarHeight + Metrics.toolBarHeight,
        },
      }),
    },
    headerLeft: (
      <Button
        transparent
        onPress={() => navigation.goBack()}
      >
        <Icon
          name="md-close"
          style={{
            fontSize: 30,
            color: Colors.whiteColor,
          }}
        />
      </Button>
    ),
  });

  render() {
    return (
      <View>
        <Text>CreateMeetupScreen</Text>
      </View>
    );
  }
}

export default CreateMeetupScreen;
