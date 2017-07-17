import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.2.60:3000/api';

const fakeGroupId = '596cebe3c6fd712d78407a99';

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
      throw e;
    }
  }

  async createGroupMeetups(args) {
    console.log('Creating a group meetup...');
    try {
      const res = await axios.post(`${this.path}/new`, { ...args });
      return res;
    } catch (e) {
      throw e;
    }
  }
}

export {
  MeetupApi,
};

class UserApi {
  constructor() {
    this.path = '/users';
  }

  async login(args) {
    try {
      const { data } = await axios.post(`${this.path}/auth0`, args);
      return data;
    } catch (e) {
      throw e;
    }
  }
}

export const User = new UserApi();
