import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.2.60:3000/api';

const fakeGroupId = '5963946c5ed49a0c800dd3a4';

class MeetupApi {
  constructor() {
    this.groupId = fakeGroupId;
    this.path = `/groups/${this.groupId}/meetups`;
  }

  async fetchGroupMeetups() {
    console.log('Fetching group meetups...');
    try {
      const { data } = await axios.get(this.path);
      return data.meetups;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  async createGroupMeetups(args) {
    console.log('Creating a group meetup...');
    try {
      const res = await axios.post(`${this.path}/new`, { ...args });
      return res;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
}

export {
  MeetupApi,
};
