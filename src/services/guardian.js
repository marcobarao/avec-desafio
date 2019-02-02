import axios from 'axios';

const guardian = axios.create({
  baseURL: 'https://content.guardianapis.com/',
});

export default guardian;
