import React from 'react';
import { View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';

import { TextInputWithValidation } from '../../../commons';
import { createMeetupValidation } from '../validation';
import Colors from '../../../../constants/Colors';
import styles from './styles/CreateMeetupForm';

const CreateMeetupForm = ({
  createMeetup,
  checkTitle,
  showDateTimePicker,
  handleSubmit,
  invalid,
  submitting,
}) => (
  <View style={styles.container}>
    <Field
      style={{ marginRight: 0, height: 52 }}
      component={TextInputWithValidation}
      name="title"
      label="Title"
      selectionColor={Colors.redColor}
      containerStyle={styles.item}
    />
    <Field
      style={{ marginRight: 0, height: 52 }}
      component={TextInputWithValidation}
      name="description"
      label="Description"
      multiline
      selectionColor={Colors.redColor}
      containerStyle={styles.item}
    />
    <View style={styles.item}>
      <Button
        raised
        fontFamily="montserrat"
        onPress={showDateTimePicker}
        title={checkTitle}
      />
    </View>
    <View style={styles.buttonCreate}>
      <Button
        raised
        backgroundColor={Colors.blackBlueColor}
        title="Create Meetup"
        fontFamily="montserrat"
        disabled={invalid || submitting}
        onPress={handleSubmit(createMeetup)}
      />
    </View>
  </View>
);

CreateMeetupForm.propTypes = {
  createMeetup: PropTypes.func.isRequired,
  checkTitle: PropTypes.string.isRequired,
  showDateTimePicker: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'createMeetup',
  validate: createMeetupValidation,
})(CreateMeetupForm);
