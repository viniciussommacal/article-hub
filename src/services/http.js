import axios from 'axios';

const http = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

http.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
);

export default http;
