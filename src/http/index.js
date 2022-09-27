import axios from 'axios';

const http = axios.create();
http.defaults.baseURL = process.env.VUE_APP_HOST_URL;

http.defaults.timeout = 16000;

// 添加请求拦截器
http.interceptors.request.use(config => {
  let dateTime = Date.now();
  if (config.method === 'post') {
  } else if (config.method === 'get') {
    config.params = {
      ...config.params,
      '_t0': String(dateTime),
    };
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default http;
