import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/v1/',
  responseType: 'json',
  requestType: 'json',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': Cookies.get('_ethnicpip_token')
  }
});

axiosInstance.interceptors.request.use (
  function (config) {
    const token = localStorage.getItem('access-token')
    if (token) config.headers.Token = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject (error);
  }
);

export default axiosInstance;
