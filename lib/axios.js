import axios from 'axios';

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

instance.interceptors.request.use(config => {

    console.log('request sent.');

    return config;
})

export default instance;