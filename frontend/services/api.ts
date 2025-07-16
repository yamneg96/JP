import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000/api' });

export const login = (data) => API.post('/token/', data);
export const register = (data) => API.post('/register/', data);
export const getServices = () => API.get('/services/');
export const bookService = (data) => API.post('/bookings/', data);
export const postReview = (data) => API.post('/reviews/', data);