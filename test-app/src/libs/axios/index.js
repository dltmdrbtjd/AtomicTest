import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://mycroft-test-api.herokuapp.com/'
})

instance.interceptors.request.use((req) => {
  req.headers['Content-Type'] = 'application/json; charset=utf-8'

  return req;
})

export default instance;