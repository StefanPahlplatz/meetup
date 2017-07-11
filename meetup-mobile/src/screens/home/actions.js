import PropTypes from 'prop-types';
import { MeetupApi } from '../../../constants/api';

const meetupApi = new MeetupApi();

export const FETCH_MY_MEETUPS = 'FETCH_MY_MEETUPS';

const fetchMyMeetups = () => ({
  type: FETCH_MY_MEETUPS,
  payload: meetupApi.fetchGroupMeetups(),
});

fetchMyMeetups.propTypes = {
  type: PropTypes.string.isRequired,
  payload: PropTypes.func.isRequired,
};

export {
  fetchMyMeetups,
};
