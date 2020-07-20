import axios from 'axios';

const api = axios.create({
    baseURL: 'http://ergast.com/api/f1',
});

api.interceptors.request.use(request => {
    request.url += '.json';
   
    return request;
});

export default api;