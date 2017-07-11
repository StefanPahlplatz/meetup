import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MeetupApi } from '../../../constants/api';
import { LoadingScreen } from '../../commons'
import { MyMeetupList } from './components';
import Colors from '../../../constants/Colors';
import styles from './styles/HomeScreen';

const meetupApi = new MeetupApi();

class HomeScreen extends Component {
  static defaultProps = {
    meetupApi
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: Colors.redColor,
    },
    tabBarIcon: ({ tintColor }) => (
      <MaterialIcons
        name='home'
        size={25}
        color={tintColor}
      />
    )
  };

  state = {
    loading: false,
    meetups: [],
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const meetups = await this.props.meetupApi.fetchGroupMeetups();
    this.setState({ loading: false, meetups });
    console.log(meetups);
  }

  render() {
    if (this.state.loading) {
      return <LoadingScreen />
    }

    return (
      <View style={styles.root}>
        <View style={styles.topContainer}>
          <Text>HomeScreen</Text>
        </View>
        <View style={styles.bottomContainer}>
          <MyMeetupList meetups={this.state.meetups} />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
