import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'https://arpan-goyal-portfolio.onrender.com';

const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const submitContact = (data) => api.post('/api/contact', data);

export const getDownloadUrl = (type) => `${BASE_URL}/api/download/${type}`;

export default api;
