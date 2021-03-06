import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

import { MeetupApi } from '../../../constants/api';
import { CreateMeetupForm } from './components';
import { createMeetup } from './actions';
import { LoadingScreen } from '../../commons';
import styles from './styles/CreateMeetupScreen';

const meetupApi = new MeetupApi();

@connect(
  state => ({
    meetup: state.createMeetup,
  }),
  { createMeetup },
)
class CreateMeetupScreen extends Component {
  constructor() {
    super();

    this.state = {
      isDateTimePickerVisible: false,
      date: moment(),
    };
  }

  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  handleDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  // Updates the state with the selected date.
  handleDatePicked = (date) => {
    this.setState({ date });
    this.handleDateTimePicker();
  }

  // Checks if the choosen date is in the future.
  checkTitle() {
    const { date } = this.state;
    if (date > moment()) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    }
    return 'Pick a meetup date';
  }

  // Checks if the submit button should be disabled based on some conditions.
  checkIfButtonSubmitDisabled() {
    const { date } = this.state;

    if (date > moment()) {
      return false;
    }
    return true;
  }

  createMeetup = async (values) => {
    await this.props.createMeetup(values);
    this.props.navigation.goBack();
  }

  render() {
    const {
      meetup,
    } = this.props;
    if (meetup.isLoading) {
      return (
        <View style={styles.root}>
          <LoadingScreen />
        </View>
      );
    } else if (meetup.error.on) {
      return (
        <View style={styles.root}>
          <Text>{meetup.error.message}</Text>
        </View>
      );
    }
    return (
      <View style={styles.root}>
        <CreateMeetupForm
          createMeetup={this.createMeetup}
          showDateTimePicker={this.showDateTimePicker}
          checkTitle={this.checkTitle()}
        />
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.handleDateTimePicker}
          mode="datetime"
        />
      </View>
    );
  }
}

export default CreateMeetupScreen;
