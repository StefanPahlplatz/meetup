import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Platform, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import HomeNavigator from './HomeNavigator';
import Metrics from '../../constants/Metrics';
import Colors from '../../constants/Colors';

import {
  CreateMeetupScreen,
} from '../screens';

export default StackNavigator({
  Home: { screen: HomeNavigator },
  CreateMeetup: {
    screen: CreateMeetupScreen,
    navigationOptions: ({ navigation }) => ({
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
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginLeft: 12 }}
        >
          <MaterialIcons
            name="close"
            size={30}
            color="#fff"
          />
        </TouchableOpacity>
      ),
    }),
  },
}, {
  mode: 'modal',
});
