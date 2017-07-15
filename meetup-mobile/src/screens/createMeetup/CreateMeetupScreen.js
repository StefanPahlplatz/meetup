import React, { Component } from 'react';
import { Platform, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

import { MeetupApi } from '../../../constants/api';
import Metrics from '../../../constants/Metrics';
import Colors from '../../../constants/Colors';
import styles from './styles/CreateMeetupScreen';

const meetupApi = new MeetupApi();

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
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.iconClose}
      >
        <MaterialIcons
          name="close"
          size={30}
          color="#fff"
        />
      </TouchableOpacity>
    ),
  });

  constructor() {
    super();

    this.state = {
      isDateTimePickerVisible: false,
      date: moment(),
      title: '',
      description: '',
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
    const { title, description, date } = this.state;

    if (title.length > 5 && description.length > 5 && date > moment()) {
      return false;
    }
    return true;
  }

  // Updates the title state when the text input changes.
  changeTitle = title => this.setState({ title });

  // Updates the description state when the text input changes.
  changeDescription = description => this.setState({ description });

  createMeetup = async () => {
    const { title, description, date } = this.state;

    const res = await meetupApi.createGroupMeetups({
      title,
      description,
      date,
    });

    console.log(res);
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.container}>
          <View style={styles.item}>
            <FormLabel>Title</FormLabel>
            <FormInput
              style={{ marginRight: 0, height: 52 }}
              selectionColor={Colors.redColor}
              onChangeText={this.changeTitle}
              value={this.state.title}
            />
          </View>
          <View style={styles.item}>
            <FormLabel>Description</FormLabel>
            <FormInput
              style={{ marginRight: 0, height: 52 }}
              selectionColor={Colors.redColor}
              onChangeText={this.changeDescription}
              value={this.state.description}
              multiline
            />
          </View>
          <View style={styles.item}>
            <Button
              onPress={this.showDateTimePicker}
              title={this.checkTitle()}
              fontFamily="monserrat-regular"
              raised
            />
          </View>
          <View style={styles.buttonCreate}>
            <Button
              backgroundColor={Colors.blackBlueColor}
              title="Create Meetup"
              fontFamily="monserrat-regular"
              raised
              onPress={this.createMeetup}
              disabled={this.checkIfButtonSubmitDisabled()}
            />
          </View>
        </View>
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
