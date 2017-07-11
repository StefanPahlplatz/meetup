import { TabNavigator } from 'react-navigation';
import Colors from '../../constants/Colors';
import {
  HomeScreen,
  NotificationsScreen,
  ProfileScreen,
} from '../screens';

export default TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Notification: {
    screen: NotificationsScreen,
  },
  Profile: {
    screen: ProfileScreen,
  },
}, {
  swipeEnabled: true,
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
