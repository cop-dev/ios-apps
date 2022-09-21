import axios from 'axios';

const http = axios.create();
http.defaults.baseURL = process.env.VUE_APP_HOST_URL;

http.defaults.timeout = 16000;

export default http;