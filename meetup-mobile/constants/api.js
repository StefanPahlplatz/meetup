const fetchMeetups = () =>
  fetch('http://192.168.2.60:3000/api/meetups')
    .then(res => res.json());

export default fetchMeetups;
