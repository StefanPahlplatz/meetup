import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { Button, Icon } from 'native-base';

import { LoadingScreen } from '../../commons';
import { MyMeetupList } from './components';

import { fetchMyMeetups } from './actions';
import Colors from '../../../constants/Colors';
import Metrics from '../../../constants/Metrics';
import styles from './styles/HomeScreen';

@connect(state => ({ myMeetups: state.home.myMeetups }), { fetchMyMeetups })
class HomeScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: Colors.redColor,
      paddingTop: Metrics.statusBarHeight,
      height: Metrics.statusBarHeight + Metrics.toolBarHeight,
    },
    headerRight: (
      <View>
        <Button
          transparent
          onPress={() => navigation.navigate('CreateMeetup')}
        >
          <Icon
            name="md-add-circle"
            style={{
              fontSize: 30,
              color: Colors.whiteColor,
            }}
          />
        </Button>
      </View>
    ),
    tabBarIcon: ({ tintColor }) => (
      <MaterialIcons
        name="home"
        size={25}
        color={tintColor}
      />
    ),
  });

  componentDidMount() {
    this.props.fetchMyMeetups();
  }

  render() {
    const {
      myMeetups: {
        isFetched,
        data,
        error,
      },
    } = this.props;

    if (!isFetched) {
      return <LoadingScreen />;
    } else if (error.on) {
      return (
        <View>
          <Text>{error.message}</Text>
        </View>
      );
    }

    return (
      <View style={styles.root}>
        <View style={styles.topContainer}>
          <Text>HomeScreen</Text>
          {/*<Button>test</Button>*/}
        </View>
        <View style={styles.bottomContainer}>
          <MyMeetupList meetups={data} />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
