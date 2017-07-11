import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { arrayOf, object } from 'prop-types';
import styles from './styles/MyMeetupsList';

const MyMeetupsList = ({ meetups }) => (
  <View style={styles.root}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>My Meetups</Text>
    </View>
    <View style={styles.contentContainer}>
      <ScrollView horizontal>
        {meetups.map(meetup => (
          <View key={meetup.title} style={styles.meetupCard}>

            <View style={styles.meetupCardTopContainer}>
              <Text style={styles.meetupCard}>
                {meetup.title}
              </Text>
            </View>

            <View style={styles.meetupCardBottomContainer}>
              <Text style={styles.meetupCardMetaName}>
                {meetup.group.name}
              </Text>
              <Text style={styles.meetupCardMetaDate}>
                Mar 2m 6:00 pm
            </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  </View>
);

MyMeetupsList.propTypes = {
  meetups: arrayOf(object).isRequired,
};

export default MyMeetupsList;
