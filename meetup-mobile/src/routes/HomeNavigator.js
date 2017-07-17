import React from 'react';
import { TabNavigator } from 'react-navigation';
import Touchable from '@appandflow/touchable';
import { MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

import Colors from '../../constants/Colors';
import Metrics from '../../constants/Metrics';
import {
  HomeScreen,
  NotificationsScreen,
  ProfileScreen,
} from '../screens';

const AddButton = styled(Touchable) `
  marginRight: 12;
`;

export default TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: Colors.redColor,
        paddingTop: Metrics.statusBarHeight,
        height: Metrics.statusBarHeight + Metrics.toolBarHeight,
      },
      headerRight: (
        <AddButton
          onPress={() => navigation.navigate('CreateMeetup')}
        >
          <MaterialIcons
            name="add-circle"
            size={30}
            color="#fff"
          />
        </AddButton>
      ),
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons
          name="home"
          size={25}
          color={tintColor}
        />
      ),
    }),
  },
  Notification: {
    screen: NotificationsScreen,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: Colors.redColor,
        paddingTop: Metrics.statusBarHeight,
        height: Metrics.statusBarHeight + Metrics.toolBarHeight,
      },
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons
          name="notifications"
          size={25}
          color={tintColor}
        />
      ),
    }),
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: Colors.redColor,
        paddingTop: Metrics.statusBarHeight,
        height: Metrics.statusBarHeight + Metrics.toolBarHeight,
      },
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons
          name="account-circle"
          size={25}
          color={tintColor}
        />
      ),
    }),
  },
}, {
  swipeEnabled: false,
  animationEnabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    pressColor: Colors.redColor,
    indicatorStyle: {
      backgroundColor: Colors.redColor,
    },
    inactiveTintColor: Colors.blackBlueColor,
    activeTintColor: Colors.redColor,
    style: {
      backgroundColor: Colors.whiteColor,
    },
  },
});
