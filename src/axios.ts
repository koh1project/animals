import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://shibe.online/api/shibes'
});

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
export default instance;
