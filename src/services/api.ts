import axios from 'axios';

const api = axios.create({
    baseURL: 'http://ergast.com/api/f1'
});

export default api;