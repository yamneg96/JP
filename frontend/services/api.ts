import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000/api',
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export { API };

export const login = (data: any) => API.post('/token/', data);
export const register = (data: any) => API.post('/register/', data);
export const getServices = () => API.get('/services/');
export const bookService = (data: any) => API.post('/bookings/', data);
export const postReview = (data: any) => API.post('/reviews/', data);
