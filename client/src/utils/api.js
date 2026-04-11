import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
  headers: { 'Content-Type': 'application/json' },
});

export const submitContact = (data) => api.post('/api/contact', data);

export const getDownloadUrl = (type) =>
  `${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/download/${type}`;

export default api;
